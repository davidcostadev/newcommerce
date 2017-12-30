/* eslint no-undef: 'off' */

import {
  parsePagination,
  getListPages,
  getColumn,
  suffixToString,
  getMaximiumPage,
  getMinimumPages,
  getSort,
} from '../../utils/pagination'

describe('pagination functions', () => {
  it('should convert object to string query', () => {
    expect(suffixToString({
      q: 'search',
      page: 1,
      sort: 'stock.asc',
    })).toBe('q=search&page=1&sort=stock.asc')
  })
  it('should to get names columns', () => {
    expect(getColumn('best_sellers')).toBe(4)
    expect(getColumn('more_popular')).toBe(5)
    expect(getColumn('stock')).toBe(13)
    expect(getColumn('biggest_price')).toBe(6)
    expect(getColumn('lowert_price')).toBe(6)
    expect(getColumn('name')).toBe(2)
    expect(getColumn('other')).toBe(2)
  })
  it('should to get sort names ', () => {
    expect(getSort('desc')).toBe(2)
    expect(getSort('asc')).toBe(1)
    expect(getSort('other')).toBe(1)
  })

  it('should get a minor or equal number of page with limit', () => {
    expect(getMaximiumPage(1, 4, 5)).toBe(4)
    expect(getMaximiumPage(1, 5, 5)).toBe(5)
  })
  it('should get a maximiun number of page', () => {
    expect(getMaximiumPage(1, 20, 5)).toBe(6)
    expect(getMaximiumPage(2, 20, 5)).toBe(7)
    expect(getMaximiumPage(3, 20, 5)).toBe(8)
    expect(getMaximiumPage(4, 20, 5)).toBe(9)
    expect(getMaximiumPage(5, 20, 5)).toBe(10)
    expect(getMaximiumPage(6, 20, 5)).toBe(11)
    expect(getMaximiumPage(7, 20, 5)).toBe(12)
    expect(getMaximiumPage(8, 20, 5)).toBe(13)
    expect(getMaximiumPage(9, 20, 5)).toBe(14)
    expect(getMaximiumPage(10, 10, 5)).toBe(10)
    expect(getMaximiumPage(11, 10, 5)).toBe(10)
    expect(getMaximiumPage(11, 20, 5)).toBe(16)
  })
  it('should get a minimum number of page', () => {
    expect(getMinimumPages(1, 10, 5)).toBe(1)
    expect(getMinimumPages(2, 10, 5)).toBe(1)
    expect(getMinimumPages(3, 10, 5)).toBe(1)
    expect(getMinimumPages(4, 10, 5)).toBe(1)
    expect(getMinimumPages(5, 10, 5)).toBe(1)
    expect(getMinimumPages(6, 10, 5)).toBe(1)
    expect(getMinimumPages(7, 10, 5)).toBe(2)
    expect(getMinimumPages(8, 10, 5)).toBe(3)
    expect(getMinimumPages(9, 10, 5)).toBe(4)
    expect(getMinimumPages(10, 10, 5)).toBe(5)
  })

  it('should get a list of pages', () => {
    const mockOne = ['1', '2', '3', '4', '5', '6']

    expect(getListPages(1, 50)).toEqual(mockOne)
  })

  it('should get paginations objects', () => {
    const mock1 = {
      list: ['1', '2', '3', '4', '5', '6'],
      total: 40,
      current_page: 1,
      last_page: 8,
      per_page: 5,
      is_begin: true,
      is_end: false,
    }
    const mock4 = {
      list: ['1', '2', '3', '4', '5', '6', '7', '8'],
      total: 40,
      current_page: 4,
      last_page: 8,
      per_page: 5,
      is_begin: false,
      is_end: false,
    }
    const mock6 = {
      list: ['1', '2', '3', '4', '5', '6', '7', '8'],
      total: 40,
      current_page: 6,
      last_page: 8,
      per_page: 5,
      is_begin: false,
      is_end: false,
    }
    const mock7 = {
      list: ['2', '3', '4', '5', '6', '7', '8'],
      total: 40,
      current_page: 7,
      last_page: 8,
      per_page: 5,
      is_begin: false,
      is_end: false,
    }
    const mock8 = {
      list: ['3', '4', '5', '6', '7', '8'],
      total: 40,
      current_page: 8,
      last_page: 8,
      per_page: 5,
      is_begin: false,
      is_end: true,
    }

    expect(parsePagination(1, 40, 5)).toEqual(mock1)
    expect(parsePagination(4, 40, 5)).toEqual(mock4)
    expect(parsePagination(6, 40, 5)).toEqual(mock6)
    expect(parsePagination(7, 40, 5)).toEqual(mock7)
    expect(parsePagination(8, 40, 5)).toEqual(mock8)
    // expect(parsePagination(8, 40, 5)).toE  qual(mock8)
  })
})
