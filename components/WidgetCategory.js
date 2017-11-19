import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from '../assets/scss/App.scss'

const LinkItem = ({ item }) => (
  <li className={styles.productCategory}>
    <a href={item.path}>{item.title}</a>
  </li>
)

LinkItem.propTypes = {
  item: PropTypes.object.isRequired,
}

const menus = [
  {
    title: 'Cabo',
    path: 'category/informatica/name',
  },
  {
    title: 'Fone de Ouvido',
    path: 'category/informatica/name',
  },
  {
    title: 'Gabinete & Kit',
    path: 'category/informatica/name',
  },
  {
    title: 'Hard Disk',
    path: 'category/informatica/name',
  },
  {
    title: 'Memória',
    path: 'category/informatica/name',
  },
  {
    title: 'Mouse',
    path: 'category/informatica/name',
  },
  {
    title: 'Placa Mãe',
    path: 'category/informatica/name',
  },
  {
    title: 'Teclado',
    path: 'category/informatica/name',
  },
]

const WidgetCategory = ({ title, menu }) => (
  <div className={classNames(styles.widget, styles.widgetCategory)}>
    <h3 className={classNames(styles.widgetTitle)}>{title}</h3>
    <ul className={styles.productCategories}>
      {menu.map(item => (
        <LinkItem item={item} />
      ))}
    </ul>
  </div>
)

export default WidgetCategory
