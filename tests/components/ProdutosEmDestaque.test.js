import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import ProdutosEmDestaque from '../../containers/ProdutosEmDestaque'
import { offers as mockOffer } from './__mocks__/offer'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('../../api/Offers.js', () => () => (Promise.resolve(mockOffer)))

describe('Component <ProdutosEmDestaque />', () => {
  describe('render', () => {
    it('with no project', () => {
      const tree = renderer.create((
        <ProdutosEmDestaque />
      )).toJSON()

      expect(tree).toMatchSnapshot()
    })

    it('test componentDidMount', async () => {
      const wrapper = shallow((
        <ProdutosEmDestaque />
      ))

      await wrapper.instance().componentDidMount()

      expect(wrapper.state('products')).toMatchSnapshot()
    })

    it('with state products', () => {
      const wrapper = shallow((<ProdutosEmDestaque />))
        .setState({ products: [mockOffer] })

      expect(toJson(wrapper.update())).toMatchSnapshot()
    })
  })
})

