import axios from 'axios'
import jsCookie from 'js-cookie'
import { AddProduct } from '../api/Cart'

async function addProductCart(productId, cartId, setCart, setCartItens) {
  // const cartId = this.state.cartId || null

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

    // this.setState({ cartId: cart.PS_ID_CARRINHO })

    setCart(cart)
    setCartItens(cartItens)

    return cart.PS_ID_CARRINHO
  } catch (err) {
    console.error(err)
  }

  return 0
}

export default {
  addProductCart,
}
