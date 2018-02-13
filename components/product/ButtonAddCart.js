import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import jsCookie from 'js-cookie'
import { AddProduct } from '../../api/Cart'

import { setCart, setCartItens } from '../../flux/cart/cartActions'

export class Button extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      adding: 0,
      success: false,
    }
  }

  async handleClick() {
    const {
      productId,
      onSetCart,
      onSetCartItens,
    } = this.props
    const cartId = this.props.cart.PS_ID_CARRINHO || null

    this.setState({
      adding: productId,
    })

    try {
      const env = {
        PASSKEY: process.env.PASSKEY,
        DOMAIN_API: process.env.DOMAIN_API,
      }
      const data = {
        productId,
        cartId,
      }

      const { cart, cartItens } = await AddProduct(env, axios.post, data)

      jsCookie.set('cartId', cart.PS_ID_CARRINHO, { expires: 7 })

      onSetCart(cart)
      onSetCartItens(cartItens)

      this.setState({
        success: true,
      })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const {
      adding,
      success,
    } = this.state

    let text = adding ? 'Adicionando' : 'Comprar'
    text = success ? 'Adicionado' : text

    return (
      <button
        className="btn btn-lg btn-primary btn-buy"
        type="button"
        onClick={this.handleClick}
      >
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  productId: PropTypes.number.isRequired,
  cart: PropTypes.shape({
    PS_ID_CARRINHO: PropTypes.any,
  }),
}

Button.defaultProps = {
  cart: {
    PS_ID_CARRINHO: null,
  },
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  onSetCart: bindActionCreators(setCart, dispatch),
  onSetCartItens: bindActionCreators(setCartItens, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
