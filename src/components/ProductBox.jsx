import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../assets/scss/App.scss';

function toReal(number) {
  const float = parseFloat(number.replace(',', '.'), 10);
  return float.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

const ProductBox = ({ product }) => (
  <div className={styles.product}>
    <picture className={styles.productImage}>
      <img src={product.PS_PATH_IMAGEM_250} alt={product.PS_PRODUTO}ss />
    </picture>
    <div className={styles.productTitle}>{product.PS_PRODUTO}</div>
    <div className={styles.productPrice}>
      <span className={styles.currency}>R$</span>
      <span className={styles.amount}>{toReal(product.PS_VALOR_DE_VENDA)}</span>
    </div>
    <div className={styles.productButtons}>
      <Link to={`/product/${product.PS_PATH_PAGE}`} className={`btn ${styles.btn} ${styles.btnDetail}`}>Ver Detalhes</Link>
      <Link to="/product" className={`btn ${styles.btn} ${styles.btnBuy}`}>Comprar</Link>
    </div>
  </div>
);

ProductBox.propTypes = {
  product: PropTypes.object.isRequired
};


export default ProductBox;
