/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import { ParcelBox, parcelado } from '../../components/ParceladoBox'

describe('Test File ProductBox', () => {
  it('test with value below of minimunm', () => {
    const tree = renderer.create(parcelado('10')).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('test with value below of minimunm', () => {
    const tree = renderer.create(parcelado('4')).toJSON()
    expect(tree).toMatchSnapshot()
  })
})


describe('Test File ProductBox', () => {
  it('should show value parcel', () => {
    const tree = renderer.create((
      <ParcelBox
        parcel={3}
        amount="35,01"
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should show minimo value', () => {
    const tree = renderer.create((
      <ParcelBox
        parcel={3}
        amount="4"
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
