/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import { FlashMessages } from '../../components/page/FlashMessage'

const mockErrors = [
  {
    id: 1,
    type: 'success',
    message: 'message 01',
  },
  {
    id: 2,
    type: 'danger',
    message: 'message 02',
  },
  {
    id: 3,
    type: 'info',
    message: 'message 03',
  },
  {
    id: 4,
    type: 'warning',
    message: 'message 04',
  },
]

describe('Component <FlashMessages />', () => {
  it('With list erros', () => {
    const tree = renderer.create((
      <FlashMessages
        msgs={mockErrors}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('With no list erros', () => {
    const tree = renderer.create((
      <FlashMessages
        msgs={[]}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
