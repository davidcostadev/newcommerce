import React from 'react'
import PropTypes from 'prop-types'

import styles from '../assets/scss/App.scss'

const TitleSection = ({ title }) => (
  <div className={styles.titleSection}>
    <h1>{title}</h1>
  </div>
)

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TitleSection
