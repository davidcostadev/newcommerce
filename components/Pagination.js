import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'
import { suffixToString } from '../utils/pagination'

const Item = ({ page, prefix, query, is_begin, is_end, last_page, current }) => {
  const queryNew = JSON.parse(JSON.stringify(query))
  queryNew.page = page

  const route = `${prefix}?${suffixToString(queryNew)}`

  let content = (
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
}

Pagination.defaultProps = {
  prefix: [],
  suffix: [],
}

export default Pagination
