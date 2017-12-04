import { SET_CART, SET_CART_ITENS } from '../type'


export const setCart = cart => ({
  type: SET_CART,
  payload: cart,
})
export const setCartItens = cartItens => ({
  type: SET_CART_ITENS,
  payload: cartItens,
})

