import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '../routes'
import { suffixToString } from '../utils/pagination'

const FilterOrderProducts = ({ prefix, query }) => {
  const list = [
    { value: 'best_sellers.desc', title: 'Mais Vendidos' }, // 4
    { value: 'more_popular.desc', title: 'Mais Populares' }, // 5
    { value: 'stock.desc', title: 'Mais Estoque' }, // 5
    { value: 'biggest_price.asc', title: 'Maior Preço' }, // 6
    { value: 'lowert_price.desc', title: 'Menor Preço' }, // 6
    { value: 'name.asc', title: 'Nome A-Z' }, // 2
    { value: 'name.desc', title: 'Nome Z-A' }, // 2
  ]

  const sort = query.sort ? query.sort : 'stock.asc'

  const onChange = (event) => {
    const queryNew = JSON.parse(JSON.stringify(query))

    queryNew.page = 1
    queryNew.sort = event.target.value

    Router.pushRoute(`${prefix}?${suffixToString(queryNew)}`)
  }

  return (
    <form className="form-inline justify-content-end">
      <label htmlFor="order" className="col-sm-2 col-form-label">Filtrar</label>
      <select
        id="order"
        className="form-control"
        value={sort}
        onChange={onChange}
      >
        {list.map(item => (
          <option key={item.value} value={item.value}>{item.title}</option>
        ))}
      </select>
    </form>
  )
}

FilterOrderProducts.propTypes = {
  prefix: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired,
}

export default FilterOrderProducts
