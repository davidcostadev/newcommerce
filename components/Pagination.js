import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'
import { suffixToString } from '../utils/pagination'

const Item = ({ page, prefix, query, current, begin, end }) => {
  const queryNew = JSON.parse(JSON.stringify(query))
  queryNew.page = page

  const route = `${prefix}?${suffixToString(queryNew)}`

  let content = (
    <Link route={route}>
      <a className="page-link">{page}</a>
    </Link>
  )

  if (current) {
    content = (
      <span className="page-link">{page}</span>
    )
  } else if (begin) {
    content = (
      <Link route={route}>
        <a className="page-link">Início</a>
      </Link>
    )
  } else if (end) {
    content = (
      <Link route={route}>
        <a className="page-link">Final</a>
      </Link>
    )
  }

  return (
    <li className="page-item">{content}</li>
  )
}

Item.propTypes = {
  page: PropTypes.number.isRequired,
  current: PropTypes.bool.isRequired,
  query: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired,
  begin: PropTypes.bool.isRequired,
  end: PropTypes.bool.isRequired,
}

const Pagination = (props) => {
  if (!props.list.length || !props.total) return null

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {props.list.map(item => (
          <Item key={item.page} prefix={props.prefix} query={props.query} {...item} />
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  list: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  prefix: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired,
}

Pagination.defaultProps = {
  prefix: [],
  suffix: [],
}

export default Pagination
