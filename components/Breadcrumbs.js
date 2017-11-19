import React from 'react'
import { Link } from '../routes'
import classNames from 'classnames'

import styles from '../assets/scss/App.scss'

const BreadcrumbItemLink = ({ item }) => (
  <li className={classNames([styles.breadcrumbItem, 'breadcrumb-item'])}>
    <Link route={item.route}><a>{item.title}</a></Link>
  </li>
)
const BreadcrumbItemCurrent = ({ item }) => (
  <li className={classNames([styles.breadcrumbItem, 'breadcrumb-item', 'active'])}>
    {item.title}
  </li>
)


const Breadcrumbs = ({ itens }) => (
  <ol className={classNames([styles.breadcrumb, 'breadcrumb'])}>
    {itens.map((item, index) => {
      console.log(itens.length - 1 === index)
      if (itens.length - 1 === index) {
        return <BreadcrumbItemCurrent item={item} key={index}/>
      }

      return <BreadcrumbItemLink item={item} key={index} />
    })}
  </ol>
)

export default Breadcrumbs
