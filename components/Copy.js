import React from 'react'
// import PropTypes from 'prop-types';

import styles from '../assets/scss/App.scss'

const Copy = () => (
  <div className={styles.copy}>
    <div className={`container ${styles.container}`}>
      <div className={styles.copyCol}>
        2017 Todos os Direitos Reservados
      </div>
      <div className={styles.copyCol}>
        <a href="#">newCommerce</a> Os produtos que você curte e o melhor serviço da internet.
      </div>
      <div className={styles.copyCol}>
        Desenvolvidor por<a href="#"> davidcosta.com.br</a>
      </div>
    </div>
  </div>
)

export default Copy
