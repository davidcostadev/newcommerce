import {
  deleteProduct,
  AddProduct,
  getCart,
  changeQuant,
  closeCart,
} from '../../api/Cart'
import {
  cartProductIns,
  cartProductInsError,
  cartSel,
  cartSelError,
  cartProductDelete,
  cartProductQuant,
  cartProductQuantError,
  cartProdutDeleteError,
  cartClose,
  closeCloseError,
} from './__mocks__/Cart.test.mocks'

const fakeProcess = {
  env: {
    PASSKEY: 'key12345',
    DOMAIN_API: 'http://api.domain.com/v1/',
  },
}


describe('should', () => {
  it('insert product in cart', (done) => {
    const data = {
      productId: 123,
      cartId: 123,
      sessionId: 'asdf',
    }

    const fakeFetchProductIns = () => Promise.resolve({
      data: {
        result: [cartProductIns],
      },
    })

    AddProduct(fakeProcess.env, fakeFetchProductIns, data)
      .then((response) => {
        expect(response)
          .toEqual({
            cart: cartProductIns.PS_TABELA_CARRINHO[0],
            cartItens: cartProductIns.PS_TABELA_ITENS,
          })
        done()
      })
      .catch(err => console.log(err))
  })

  it('return error on insert product unknow in cart', (done) => {
    const data = {
      productId: 4000,
      cartId: 123,
      sessionId: 'asdf',
    }

    const fakeFetchProductInsError = () => Promise.resolve({
      data: {
        result: [cartProductInsError],
      },
    })

    AddProduct(fakeProcess.env, fakeFetchProductInsError, data)
      .catch((err) => {
        expect(err)
          .toEqual(new Error(cartProductInsError.PS_FEEDBACK))
        done()
      })
  })

  it('get all products in the cart', (done) => {
    const data = {
      cartId: 123,
    }

    const fakeFetchCartSel = () => Promise.resolve({
      data: {
        result: [cartSel],
      },
    })

    getCart(fakeProcess.env, fakeFetchCartSel, data)
      .then((response) => {
        expect(response)
          .toEqual({
            cart: cartSel.PS_TABELA_CARRINHO[0],
            cartItens: cartSel.PS_TABELA_ITENS,
          })
        done()
      })
      .catch(err => console.log(err))
  })

  it('return error on get all products in an unknow cart', (done) => {
    const data = {
      cartId: 4000,
    }

    const fakeFetchCartSelError = () => Promise.resolve({
      data: {
        result: [cartSelError],
      },
    })

    getCart(fakeProcess.env, fakeFetchCartSelError, data)
      .then((response) => {
        expect(response)
          .toEqual({
            cart: {},
            cartItens: [],
          })
        done()
      })
      .catch((err) => {
        expect(err)
          .toEqual(new Error(cartSelError.PS_TABELA_CARRINHO[0].PS_FEEDBACK))
        done()
      })
      .catch(err => console.log(err))
  })

  it('change quantity of product in cart', (done) => {
    const data = {
      cartId: 12218,
      movimentCartId: 22426,
      quant: 2,
    }

    const fakeFetchChangeQuant = () => Promise.resolve({
      data: {
        result: [cartProductQuant],
      },
    })

    changeQuant(fakeProcess.env, fakeFetchChangeQuant, data)
      .then((response) => {
        expect(response)
          .toEqual({
            cart: cartProductQuant.PS_TABELA_CARRINHO[0],
            cartItens: cartProductQuant.PS_TABELA_ITENS,
          })
        done()
      })
      .catch(err => console.log(err))
  })

  it('fall on change quantity of product in cart for maximium limit extedied', (done) => {
    const data = {
      cartId: 12218,
      movimentCartId: 22426,
      quant: 2,
    }

    const fakeFetchChangeQuantError = () => Promise.resolve({
      data: {
        result: [cartProductQuantError],
      },
    })

    changeQuant(fakeProcess.env, fakeFetchChangeQuantError, data)
      .catch((err) => {
        expect(err)
          .toEqual(new Error(cartProductQuantError.PS_FEEDBACK))
        done()
      })
  })

  it('remove product in cart', (done) => {
    const fakeFetchDeleteProduct = () => Promise.resolve({
      data: {
        result: [cartProductDelete],
      },
    })

    deleteProduct(fakeProcess.env, fakeFetchDeleteProduct, 123)
      .then((response) => {
        expect(response)
          .toEqual({
            cart: cartProductDelete.PS_TABELA_CARRINHO[0],
            cartItens: cartProductDelete.PS_TABELA_ITENS,
          })
        done()
      })
      .catch(err => console.log(err))
  })

  it('return error on remove product in cart', (done) => {
    const fakeFetchDeleteProductError = () => Promise.resolve({
      data: {
        result: [cartProdutDeleteError],
      },
    })

    deleteProduct(fakeProcess.env, fakeFetchDeleteProductError, 123)
      .catch((err) => {
        expect(err)
          .toEqual(new Error(cartProdutDeleteError.PS_FEEDBACK))
        done()
      })
  })

  it('close cart', (done) => {
    const data = {
      paymentId: 15,
      cartId: 123,
      deliveryId: 1,
      userId: 1,
    }

    const fakeFetchCloseCart = () => Promise.resolve({
      data: {
        result: [cartClose],
      },
    })

    closeCart(fakeProcess.env, fakeFetchCloseCart, data)
      .then((response) => {
        expect(response)
          .toEqual(cartClose.PS_TABELA_INFO[0])
        done()
      })
      .catch(err => console.log(err))
  })

  it('fall close cart no exists', (done) => {
    const data = {
      paymentId: 15,
      cartId: 123,
      deliveryId: 1,
      userId: 1,
    }

    const fakeFetchCloseCartError = () => Promise.resolve({
      data: {
        result: [closeCloseError],
      },
    })

    closeCart(fakeProcess.env, fakeFetchCloseCartError, data)
      .then(err => console.log(err))
      .catch((err) => {
        expect(err)
          .toEqual(new Error(closeCloseError.PS_FEEDBACK))
        done()
      })
  })
})
