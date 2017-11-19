import React from 'react'
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

const Pagination = ({ list, total, prefix, suffix }) => {
  console.log(`total ${total}`)

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {list.map(item => <Item key={item.page} prefix={prefix} suffix={suffix} {...item} />)}
      </ul>
    </nav>
  )
}

export default Pagination
