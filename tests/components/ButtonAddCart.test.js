/* eslint no-undef: "off" */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import moxios from 'moxios'
import ButtonAddCartConnected, { Button } from '../../components/product/ButtonAddCart'
import { cartProductIns, cartProductInsError } from '../api/__mocks__/Cart.test.mocks'

Enzyme.configure({ adapter: new Adapter() })

describe('should', () => {
  const initialState = {}
  const mockStore = configureStore()
  let store

  afterEach(() => moxios.uninstall())

  beforeEach(() => {
    store = mockStore(initialState)
    moxios.install()
  })

  it('Add product on cart', () => {
    const tree = renderer.create((
      <ButtonAddCartConnected
        productId={1}
        store={store}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('click on button', (done) => {
    const onSetCart = jest.fn()
    const onSetCartItens = jest.fn()

    process.env = {
      PASSKEY: '123',
      DOMAIN_API: 'http://domain.com',
    }

    const wrapper = shallow((
      <Button
        productId={1}
        onSetCart={onSetCart}
        onSetCartItens={onSetCartItens}
      />
    ))

    moxios.stubRequest('http://domain.com/TSvmCarrinho/sp_web_carrinho_produto_ins', {
      status: 200,
      responseText: {
        result: [cartProductIns],
      },
    })

    wrapper.find('button').simulate('click')

    moxios.wait(() => {
      expect(onSetCart).toMatchSnapshot()
      expect(onSetCartItens).toMatchSnapshot()
      done()
    })
  })

  it('fall on click on button', (done) => {
    const onSetCart = jest.fn()
    const onSetCartItens = jest.fn()
    console.error = jest.fn()

    process.env = {
      PASSKEY: '123',
      DOMAIN_API: 'http://domain.com',
    }
    const wrapper = shallow((
      <Button
        productId={1}
        onSetCart={onSetCart}
        onSetCartItens={onSetCartItens}
      />
    ))

    moxios.stubRequest('http://domain.com/TSvmCarrinho/sp_web_carrinho_produto_ins', {
      status: 200,
      responseText: {
        result: [cartProductInsError],
      },
    })

    wrapper.find('button').simulate('click')

    moxios.wait(() => {
      expect(console.error).toMatchSnapshot()
      done()
    })
  })
})
