import React from 'react';
import styles from '../assets/scss/App.scss';

const ProductBox = () => (
  <div className={styles.product}>
    <picture className={styles.productImage}>
      <img src="http://www.winerp.com.br/images/mundial/products/gabinete-slim-dt-100bk-c-fonte-ps-200-fx-c3tech---45093-300-193420.jpg" alt="" />
    </picture>
    <div className={styles.productTitle}>Quadros De Distribuição Embutir 5 Din/3 Nema Tramontina 56300/001</div>
    <div className={styles.productPrice}>
      <span className={styles.currency}>R$</span> <span className={styles.amount}>16,80</span>
    </div>
    <div className={styles.productButtons}>
      <a href="/product" className={`btn ${styles.btn} ${styles.btnDetail}`}>Ver Detalhes</a>
      <a href="/product" className={`btn ${styles.btn} ${styles.btnBuy}`}>Comprar</a>
    </div>
  </div>
);

export default ProductBox;
