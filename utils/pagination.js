const parsePagination = (page, total, quant) => {
  if (typeof page === 'undefined' || typeof total === 'undefined' || typeof quant === 'undefined') {
    throw new Error('Missing arguments')
  }

  const pages = Math.ceil(total / quant)
  const current = page > 0 ? page + 1 : 1
  const show = 5
  const listPages = []
  const oldLimit = (current - show) > 1 ? (current - show) : 2

  if (current > 1) {
    listPages.push({
      page: 1,
      begin: true,
      current: false,
      end: false,
    })
  }

  for (let i = oldLimit; i < current; i += 1) {
    listPages.push({
      page: i,
      begin: false,
      current: false,
      end: false,
    })
  }

  listPages.push({
    page: current,
    begin: false,
    current: true,
    end: false,
  })


  const maxLimit = current + (show + 1) < pages ? current + (show + 1) : pages


  for (let i = current + 1; i < maxLimit; i += 1) {
    listPages.push({
      page: i,
      begin: false,
      current: false,
      end: false,
    })
  }

  if (current < pages) {
    listPages.push({
      page: pages,
      begin: false,
      current: false,
      end: true,
    })
  }

  return {
    list: listPages,
    total,
    current,
    pages,
    quant,
  }
}

export default parsePagination
