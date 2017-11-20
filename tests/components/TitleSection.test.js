/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import TitleSection from '../../components/TitleSection'

describe('Component <TitleSection />', () => {
  it('<TitleSection />', () => {
    const tree = renderer.create((
      <TitleSection
        title="Titulo da Section"
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
