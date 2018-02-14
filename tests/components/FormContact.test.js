/* eslint no-undef: "off" */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import FormContact from '../../components/form/FormContact'

Enzyme.configure({ adapter: new Adapter() })

describe('should', () => {
  it('Add product on cart', () => {
    const onChange = jest.fn()

    const tree = renderer.create((
      <FormContact
        onChange={onChange}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('fill form and submit', () => {
    const onChange = jest.fn()
    const preventDefault = jest.fn()

    const wrapper = shallow((
      <FormContact
        onChange={onChange}
      />
    ))


    wrapper.find('button').simulate('click', { preventDefault })
    expect(wrapper.get(0)).toMatchSnapshot()

    wrapper.find('[id="name"]').simulate('change', {
      target: {
        id: 'name',
        value: 'david',
      },
    })

    wrapper.find('button').simulate('click', { preventDefault })
    expect(wrapper.get(0)).toMatchSnapshot()

    wrapper.find('[id="email"]').simulate('change', {
      target: {
        id: 'email',
        value: 'david@email.com',
      },
    })

    wrapper.find('button').simulate('click', { preventDefault })
    expect(wrapper.get(0)).toMatchSnapshot()

    wrapper.find('[id="subject"]').simulate('change', {
      target: {
        id: 'subject',
        value: 'subject',
      },
    })
    wrapper.find('button').simulate('click', { preventDefault })
    expect(wrapper.get(0)).toMatchSnapshot()

    wrapper.find('[id="message"]').simulate('change', {
      target: {
        id: 'message',
        value: 'message',
      },
    })

    wrapper.find('button').simulate('click', { preventDefault })
    expect(preventDefault).toBeCalled()
    expect(wrapper.get(0)).toMatchSnapshot()
    expect(onChange).toBeCalled()
    expect(onChange).toMatchSnapshot()
  })
})
