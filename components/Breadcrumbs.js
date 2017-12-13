import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { Link } from '../routes'

import styles from '../assets/scss/App.scss'

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
const BreadcrumbItemCurrent = ({ item }) => (
  <BreadcrumbItem className={classNames(['breadcrumb-item', 'active'])}>
    {item.title}
  </BreadcrumbItem>
)

const Breadcrumbs = ({ itens }) => (
  <Breadcrumb className={classNames(['breadcrumb'])}>
    {itens.map((item, index) => {
      if (itens.length - 1 === index) {
        return <BreadcrumbItemCurrent item={item} key={index} />
      }

      return <BreadcrumbItemLink item={item} key={index} />
    })}
  </Breadcrumb>
)

export default Breadcrumbs
