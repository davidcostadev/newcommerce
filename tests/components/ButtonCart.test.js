/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '../../components/ButtonCart'


describe('Test component ButtonCart', () => {
  it('should do be 0', () => {
    const tree = renderer.create((
      <Button quant={0} />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should do be 5', () => {
    const tree = renderer.create((
      <Button quant={5} />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
