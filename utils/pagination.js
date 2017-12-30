
export const suffixToString = query => Object.keys(query)
  .map(item => `${item}=${query[item]}`)
  .join('&')


export const getColumn = (column) => {
  switch (column) {
    case 'best_sellers':
      return 4
    case 'more_popular':
      return 5
    case 'stock':
      return 13
    case 'biggest_price':
    case 'lowert_price':
      return 6
    case 'name':
    default:
      return 2
  }
}

export const getSort = (sort) => {
  switch (sort) {
    case 'desc':
      return 2
    case 'asc':
    default:
      return 1
  }
}

export const getMaximiumPage = (page, pages, limit) => {
  if (pages <= limit) {
    return pages
  }

  const limitSub = limit
  const limitWithPage = page + limitSub

  if (limitWithPage >= pages) {
    return pages
  }

  return limitWithPage
}

export const getMinimumPages = (page, pages, limit) => {
  if (page <= limit) {
    return 1
  }

  return page - limit
}

export const getListPages = (page, pages) => {
  const limit = 5
  const list = []

  for (let newI = page; newI <= getMaximiumPage(page, pages, limit); newI += 1) {
    list.push(newI.toString())
  }

  return list
}


export const parsePagination = (page, total, quant) => {
  const pages = Math.ceil(total / quant)
  const limit = 5
  const listPages = []
  const begin = page === 1
  const end = page === pages

  const minimum = getMinimumPages(page, pages, limit)
  const maximium = getMaximiumPage(page, pages, limit)

  for (let i = minimum; i <= maximium; i += 1) {
    listPages.push(i.toString())
  }


  return {
    list: listPages,
    total,
    per_page: quant,
    current_page: page,
    last_page: pages,
    is_begin: begin,
    is_end: end,
  }
}

export default parsePagination
