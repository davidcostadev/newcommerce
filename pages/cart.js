import React from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { initStore } from '../store'
import { getCart, changeQuant, deleteProduct } from '../api/Cart'
import { setCart, setCartItens } from '../flux/cart/cartActions'
import Page from '../containers/PageHOF'
import ContentCart from '../components/ContentCart'
import { Container } from '../layout/Pages'

class Cart extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId, cartId } = await Page.getInitialProps(store, req, isServer)

    const { cart, cartItens } = store.getState()

    const urlMeta = {
      PS_TITLE: 'Carrinho',
      PS_DESCRIPTION: 'Carrinho de Compra',
    }

    return {
      cartId,
      sessionId,
      urlMeta,
      cart,
      cartItens,
      setCart,
      setCartItens,
    }
  }

  constructor() {
    super()

    this.onChangeQuant = this.onChangeQuant.bind(this)
    this.onDeleteProduct = this.onDeleteProduct.bind(this)

    this.state = {
      deletingProduct: 0,
    }
  }

  async onChangeQuant(movimentCartId, productId, quant) {
    try {
      const env = {
        PASSKEY: process.env.PASSKEY,
        DOMAIN_API: process.env.DOMAIN_API,
      }
      const data = {
        cartId: this.props.cartId,
        movimentCartId,
        productId,
        quant,
      }

      const { cart, cartItens } = await changeQuant(env, axios.post, data)


      this.props.setCart(cart)
      this.props.setCartItens(cartItens)
    } catch (error) {
      console.error(error)
    }
  }

  async onDeleteProduct(productId) {
    this.setState({
      deletingProduct: parseInt(productId, 10),
    })
    try {
      const env = {
        PASSKEY: process.env.PASSKEY,
        DOMAIN_API: process.env.DOMAIN_API,
      }
      const { cartId } = this.props
      await deleteProduct(env, axios.post, productId)

      const { cart, cartItens } = await getCart(env, axios.post, { cartId })


      this.props.setCart(cart)
      this.props.setCartItens(cartItens)
    } catch (error) {
      console.error(error)
      this.setState({
        deletingProduct: 0,
      })
    }
  }

  render() {
    const { deletingProduct } = this.state

    return (
      <Page {...this.props}>
        <Container>
          <ContentCart
            cart={this.props.cart}
            cartItens={this.props.cartItens}
            changeQuant={this.onChangeQuant}
            deleteProduct={this.onDeleteProduct}
            deletingProduct={deletingProduct}
          />
        </Container>
      </Page>
    )
  }
}


Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  cartItens: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  setCartItens: PropTypes.func.isRequired,
  cartId: PropTypes.string.isRequired,
  sessionId: PropTypes.string.isRequired,
}

const mapState = state => state


const mapDispatchToProps = dispatch => ({
  setCart: bindActionCreators(setCart, dispatch),
  setCartItens: bindActionCreators(setCartItens, dispatch),
})


export default withRedux(initStore, mapState, mapDispatchToProps)(Cart)
