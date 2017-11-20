import React from 'react'
import PropTypes from 'prop-types'
import styles from '../assets/scss/App.scss'

const contentEscape = content => ({
  __html: content,
})

const BlockInfo = ({ content }) => (
  <section className={styles.blockInfo}>
    <header className={styles.blockInfoHeader}>
      <h2>Informações do Produto</h2>
    </header>
    <div className={styles.blockInfoContent} dangerouslySetInnerHTML={contentEscape(content)} />
  </section>
)

BlockInfo.propTypes = {
  content: PropTypes.string.isRequired,
}

export default BlockInfo
