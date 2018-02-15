/* eslint no-undef: "off" */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import WayPayment, { Way } from '../../components/product/WayPayment'

Enzyme.configure({ adapter: new Adapter() })

describe('should', () => {
  it('List way payment', () => {
    const onClick = jest.fn()

    const tree = renderer.create((
      <WayPayment
        paymentDefault={1}
        onClick={onClick}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Item way payment', () => {
    const onClick = jest.fn()
    const payment = {
      id: 22,
      name: 'one',
      factor: 1.5,
    }
    const tree = renderer.create((
      <Way
        paymentDefault={1}
        payment={payment}
        onClick={onClick}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('change way payment', () => {
    const paymentItem = {
      id: 22,
      name: 'one',
      factor: 1.5,
    }
    const onClick = (payment) => {
      expect(payment).toEqual(paymentItem)
    }

    const wrapper = shallow((
      <Way
        paymentDefault={1}
        payment={paymentItem}
        onClick={onClick}
      />
    ))

    expect(wrapper.get(0)).toMatchSnapshot()
    wrapper.find('#payment-22').simulate('click')
  })
})
