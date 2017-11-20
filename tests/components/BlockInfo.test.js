/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import BlockInfo from '../../components/BlockInfo'

const content = `
  <strong>strong</strong>
`

describe('Component <BlockInfo />', () => {
  it('<BlockInfo />', () => {
    const tree = renderer.create((
      <BlockInfo
        content={content}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
