/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import ProductDescription from '../../components/ProductDescription'
import { offerContent } from './__mocks__/offerContent'

describe('Component <ProductDescription />', () => {
  it('with some text', () => {
    const tree = renderer.create((
      <ProductDescription
        content={offerContent}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
