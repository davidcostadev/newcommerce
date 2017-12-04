import { SET_CART, SET_CART_ITENS } from '../type'

export const initialStateCart = {}
export const initialStateItens = []

export const cart = (state = initialStateCart, { type, payload }) => {
  switch (type) {
    case SET_CART:
      return payload
    default:
      return state
  }
}
export const cartItens = (state = initialStateItens, { type, payload }) => {
  switch (type) {
    case SET_CART_ITENS:
      return payload
    default:
      return state
  }
}

