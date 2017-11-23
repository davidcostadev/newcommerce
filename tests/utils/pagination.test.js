/* eslint no-undef: "off" */

import pagination from '../../utils/pagination'

describe('pagination', () => {
  it('Test props missing arguments: 0 arguments', () => {
    try {
      expect(pagination()).toBeUndefined()
    } catch (e) {
      expect(e.message).toEqual('Missing arguments')
    }
  })
  it('Test props missing arguments: 1 arguments', () => {
    try {
      expect(pagination(0)).toBeUndefined()
    } catch (e) {
      expect(e.message).toEqual('Missing arguments')
    }
  })
  it('Test props missing arguments: 2 arguments', () => {
    try {
      expect(pagination(0, 1)).toBeUndefined()
    } catch (e) {
      expect(e.message).toEqual('Missing arguments')
    }
  })
  it('Test props missing arguments: 3 Arguments', () => {
    try {
      expect(typeof pagination(0, 1, 0)).toBe('object')
    } catch (e) {
      expect(e.message).toEqual('Missing arguments')
    }
  })
})
