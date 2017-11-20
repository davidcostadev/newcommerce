import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from '../assets/scss/App.scss'

export const LinkItem = ({ item }) => (
  <li>
    <a href={item.path}>{item.title}</a>
  </li>
)

LinkItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export const WidgetCategory = ({ title, menu }) => (
  <div className={classNames(styles.widget, styles.widgetCategory)}>
    <h3 className={classNames(styles.widgetTitle)}>{title}</h3>
    <ul className={styles.productCategories}>
      {menu.map(item => (
        <LinkItem key={item.path} item={item} />
      ))}
    </ul>
  </div>
)

WidgetCategory.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
}

export default WidgetCategory
