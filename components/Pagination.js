import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'

const Item = ({ page, suffix, prefix, current, begin, end }) => {
  const newSuffix = []

  newSuffix.push(`page=${page}`)

  if (suffix.length) {
    newSuffix.push(suffix.join('&'))
  }

  const route = `${prefix}?${newSuffix.join('&')}`

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
  current: PropTypes.number.isRequired,
  suffix: PropTypes.array.isRequired,
  prefix: PropTypes.array.isRequired,
  begin: PropTypes.bool.isRequired,
  end: PropTypes.bool.isRequired,
}


const Pagination = (props) => {
  if (!props.list.length || !props.total) return null

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {props.list.map(item => (
          <Item key={item.page} prefix={props.prefix} suffix={props.suffix} {...item} />
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  list: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  prefix: PropTypes.array,
  suffix: PropTypes.array,
}

Pagination.defaultProps = {
  prefix: [],
  suffix: [],
}

export default Pagination
