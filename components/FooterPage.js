import React from 'react'
import PropTypes from 'prop-types'

import styles from '../assets/scss/App.scss'

const FooterPage = props => (
  <div id={styles.footePage}>{props.children}</div>
)


FooterPage.propTypes = {
  children: PropTypes.node.isRequired
}

export default FooterPage
