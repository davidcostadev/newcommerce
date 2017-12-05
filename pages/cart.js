import React from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import { getCart } from '../api/Cart'
import { setCart, setCartItens } from '../flux/cart/cartActions'
import Page from '../containers/PageHOF'
import styles from '../assets/scss/App.scss'
import ContentCart from '../components/ContentCart'

class Cart extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const cartId = Page.getCartId(store, req, isServer)
    const { cart, cartItens } = await Cart.getCart(store, cartId, sessionId)

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
    }
  }

  static async getCart(store, cartId, sessionId) {
    console.log('getCart')
    const state = store.getState()

    if (state.cartItens.length) {
      return {
        cart: state.cart,
        cartItens: state.cartItens,
      }
    }


    const { cart, cartItens } = await getCart({
      cartId,
      sessionId,
    })

    store.dispatch(setCart(cart))
    store.dispatch(setCartItens(cartItens))

    return {
      cart,
      cartItens,
    }
  }

  render() {
    return (
      <Page {...this.props}>
        <div className={`container ${styles.container}`}>
          <ContentCart cart={this.props.cart} cartItens={this.props.cartItens} />
        </div>
      </Page>
    )
  }
}


const mapState = state => state


const mapDispatchToProps = dispatch => ({
  setCart: bindActionCreators(setCart, dispatch),
  setCartItens: bindActionCreators(setCartItens, dispatch),
})


export default withRedux(initStore, mapState, mapDispatchToProps)(Cart)
