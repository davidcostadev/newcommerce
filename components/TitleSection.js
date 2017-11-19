import React from 'react'

import styles from '../assets/scss/App.scss'

const TitleSection = ({ title }) => (
  <div className={styles.titleSection}>
    <h1>{title}</h1>
  </div>
)


export default TitleSection
