import { deleteProduct, AddProduct } from '../../api/Cart'
import CartMock from './__mocks__/Cart.test.mocks'

const fakeProcess = {
  env: {
    PASSKEY: 'key12345',
    DOMAIN_API: 'http://api.domain.com/v1/',
  },
}

const fakeFetchProductIns = () => Promise.resolve({
  data: {
    result: [CartMock.cartProductIns],
  },
})

const fakeFetchDeleteProduct = () => Promise.resolve({
  data: {
    result: [CartMock.cartProductDelete],
  },
})

const fakeFetchDeleteProductError = () => Promise.resolve({
  data: {
    result: [CartMock.cartProdutDeleteError],
  },
})

describe('should', () => {
  it('insert product in cart', (done) => {
    const data = {
      productId: 123,
      cartId: 123,
      sessionId: 'asdf',
    }

    AddProduct(fakeProcess.env, fakeFetchProductIns, data)
      .then((response) => {
        expect(response)
          .toEqual({
            cart: CartMock.cartProductIns.PS_TABELA_CARRINHO[0],
            cartItens: CartMock.cartProductIns.PS_TABELA_ITENS,
          })
        done()
      })
      .catch(err => console.log(err))
  })

  it('remove product in cart', (done) => {
    deleteProduct(fakeProcess.env, fakeFetchDeleteProduct, 123)
      .then((response) => {
        expect(response)
          .toEqual({
            cart: CartMock.cartProductDelete.PS_TABELA_CARRINHO[0],
            cartItens: CartMock.cartProductDelete.PS_TABELA_ITENS,
          })
        done()
      })
      .catch(err => console.log(err))
  })

  it('return erro on remove product in cart', (done) => {
    deleteProduct(fakeProcess.env, fakeFetchDeleteProductError, 123)
      .catch((err) => {
        expect(err)
          .toEqual(new Error(CartMock.cartProdutDeleteError.PS_FEEDBACK))
        done()
      })
      .catch(err => console.log(err))
  })
})
