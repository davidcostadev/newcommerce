/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { ProductBox } from '../../components/ProductBox'
import { offer as product } from './__mocks__/offer'


const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
    subscribe: jest.fn(),
  }
  const next = jest.fn()

  const invoke = action => thunk(store)(next)(action)

  return { store, next, invoke }
}
const { store } = create()

describe('Test File ProductBox', () => {
  it('ProductBox with 4 column', () => {
    const tree = renderer.create((
      <Provider store={store}>
        <ProductBox
          product={product}
          columns={4}
        />
      </Provider>
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('ProductBox with 3 column', () => {
    const tree = renderer.create((
      <Provider store={store}>
        <ProductBox
          product={product}
          columns={3}
        />
      </Provider>
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
