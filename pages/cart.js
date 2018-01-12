import React from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import { changeQuant } from '../api/Cart'
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

  async changeQuant(movimentCartId, productId, quant) {
    console.log('changeQuant', movimentCartId, productId)

    const { cart, cartItens } = await changeQuant({
      cartId: this.props.cartId,
      sessionId: this.props.sessionId,
      movimentCartId,
      productId,
      quant,
    })

    this.props.setCart(cart)
    this.props.setCartItens(cartItens)
  }

  render() {
    return (
      <Page {...this.props}>
        <Container>
          <ContentCart
            cart={this.props.cart}
            cartItens={this.props.cartItens}
            changeQuant={this.changeQuant.bind(this)}
          />
        </Container>
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
