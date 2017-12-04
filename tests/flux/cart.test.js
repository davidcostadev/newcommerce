import * as reducer from '../../flux/cart/cartReducers'
import * as type from '../../flux/type'

describe('test cart redux', () => {
  it('should to return inital state', () => {
    expect(reducer.cart(undefined, {})).toEqual({})
  })

  it('should handle SET_CART', () => {
    expect(reducer.cart({}, {
      type: type.SET_CART,
      payload: {
        id: 1,
      },
    })).toEqual({
      id: 1,
    })
  })

  it('should change SET_CART', () => {
    expect(reducer.cart({
      id: 1,
    }, {
      type: type.SET_CART,
      payload: {
        id: 2,
      },
    })).toEqual({
      id: 2,
    })
  })
})

describe('test cartItens redux', () => {
  it('should to return inital state', () => {
    expect(reducer.cartItens(undefined, {})).toEqual([])
  })

  it('should handle SET_CART_ITENS', () => {
    expect(reducer.cartItens([], {
      type: type.SET_CART_ITENS,
      payload: [
        { id: 1 },
      ],
    })).toEqual([
      { id: 1 },
    ])
  })

  it('should change SET_CART_ITENS', () => {
    expect(reducer.cartItens([
      { id: 1 },
    ], {
      type: type.SET_CART_ITENS,
      payload: [
        { id: 1 },
        { id: 2 },
      ],
    })).toEqual([
      { id: 1 },
      { id: 2 },
    ])
  })
})
