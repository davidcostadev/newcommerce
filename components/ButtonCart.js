import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from '../routes'
import styles from '../assets/scss/App.scss'

export const ButtonCart = ({ quant }) => (
  <Link route="/cart">
    <a className={styles.menuLink}>
      <i className="ion-ios-cart-outline" />
      <span className={`badge ${styles.badge}`}>{quant}</span>
    </a>
  </Link>
)

ButtonCart.propTypes = {
  quant: PropTypes.number,
}

ButtonCart.defaultProps = {
  quant: 0,
}

const mapState = state => ({
  quant: state.cartItens.length,
})

export default connect(mapState)(ButtonCart)
