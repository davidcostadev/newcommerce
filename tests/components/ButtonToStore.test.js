/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import ButtonToStore from '../../components/product/ButtonToStore'

describe('<ButtonToStore />', () => {
  describe('render', () => {
    it('default', () => {
      const tree = renderer.create((
        <ButtonToStore
          to="http://domain/product"
        />
      )).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
