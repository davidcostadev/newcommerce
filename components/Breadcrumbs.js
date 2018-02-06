import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { Link } from '../routes'


const Breadcrumb = styled.ul`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0.5rem 0;
  font-size: 12px;
  background-color: $body-bg;
`

const BreadcrumbItem = styled.li`
  .&+.&::before {
    content: ">"
  }
`


const BreadcrumbItemLink = ({ item }) => (
  <li className={classNames(['breadcrumb-item'])}>
    <Link route={item.route}><a>{item.title}</a></Link>
  </li>
)

BreadcrumbItemLink.propTypes = {
  item: PropTypes.shape({
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}


const BreadcrumbItemCurrent = ({ item }) => (
  <BreadcrumbItem className={classNames(['breadcrumb-item', 'active'])}>
    {item.title}
  </BreadcrumbItem>
)

BreadcrumbItemCurrent.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
}

const Breadcrumbs = ({ itens }) => (
  <Breadcrumb className={classNames(['breadcrumb'])}>
    {itens.map((item, index) => {
      if (itens.length - 1 === index) {
        return <BreadcrumbItemCurrent item={item} key={item.route} />
      }

      return <BreadcrumbItemLink item={item} key={item.route} />
    })}
  </Breadcrumb>
)

Breadcrumbs.propTypes = {
  itens: PropTypes.array.isRequired,
}

export default Breadcrumbs
