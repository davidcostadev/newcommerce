import React from 'react'
// import classNames from 'classnames';

import styles from '../assets/scss/App.scss'

const BlockInfo = ({ content }) => (
  <section className={styles.blockInfo}>
    <header className={styles.blockInfoHeader}>
      <h2>Informações do Produto</h2>
    </header>
    <div className={styles.blockInfoContent} dangerouslySetInnerHTML={{ __html: content }} />
  </section>
)

export default BlockInfo
