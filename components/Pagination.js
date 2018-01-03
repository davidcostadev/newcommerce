import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'
import { suffixToString } from '../utils/pagination'

const Item = (props) => {
  const {
    page,
    prefix,
    query,
    // is_begin,
    // is_end,
    // last_page,
    current,
  } = props

  const queryNew = JSON.parse(JSON.stringify(query))
  queryNew.page = page

  const route = `${prefix}?${suffixToString(queryNew)}`

  const content = (
    <Link route={route}>
      <a className="page-link">{page}</a>
    </Link>
  )

  if (current === page) {
    return (
      <li className="page-item active">
        <span className="page-link">{page}</span>
      </li>
    )
  }


  return (
    <li className="page-item">{content}</li>
  )
}

Item.propTypes = {
  page: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  query: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired,
  // is_begin: PropTypes.bool.isRequired,
  // is_end: PropTypes.bool.isRequired,
  // last_page: PropTypes.number.is Required,
}

const Pagination = (props) => {
  if (!props.list.length || !props.total) return null

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {props.list.map(item => (
          <Item
            key={parseInt(item, 10)}
            prefix={props.prefix}
            query={props.query}
            page={parseInt(item, 10)}
            current={props.current_page}
            is_begin={props.is_begin}
            is_end={props.is_end}
            last_page={props.last_page}
          />
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
  is_begin: PropTypes.bool.isRequired,
  is_end: PropTypes.bool.isRequired,
  last_page: PropTypes.number.isRequired,
  current_page: PropTypes.number.isRequired,
}


Pagination.defaultProps = {
  prefix: [],
  suffix: [],
}

export default Pagination
