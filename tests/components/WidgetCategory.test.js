/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import { LinkItem, WidgetCategory } from '../../components/WidgetCategory'

describe('Component <WidgetCategory />', () => {
  it('<LinkItem />', () => {
    const tree = renderer.create((
      <LinkItem
        item={{ path: '#', title: 'title' }}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('<WidgetCategory />', () => {
    const menu = [
      {
        path: '#1',
        title: 'title 1',
      },
      {
        path: '#2',
        title: 'title 2',
      },
    ]
    const tree = renderer.create((
      <WidgetCategory
        title="Titulo Widget"
        menu={menu}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
