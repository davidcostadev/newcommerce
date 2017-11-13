import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../assets/scss/App.scss';

function toFloat(number) {
  return parseFloat(number.replace(',', '.'), 10);
}

function floatToReal(float) {
  const float2Decimal = Math.round(float * 100) / 100;
  return float2Decimal.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}
function StringToReal(number) {
  const float = toFloat(number);
  return float.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

function parcelado(number) {
  const float = toFloat(number);

  let currentParcel = 0;
  let currentAmount = 0;
  const limitSemJuros = 3;
  const minimoParcela = 5;

  if (float < minimoParcela) {
    return <ParcelBox parcel={currentParcel} amount={floatToReal(float)} />;
  }

  for (let i = 1; i <= limitSemJuros; i += 1) {
    const current = float / i;
    if (current < minimoParcela) {
      break;
    }
    currentParcel = i;
    currentAmount = current;
  }

  return <ParcelBox parcel={currentParcel} amount={floatToReal(currentAmount)} />;
}

const ParcelBox = ({ parcel, amount }) => (
  <div className={styles.productComplement}>
    ou {parcel}x de
    <span className={styles.currency}>R$</span>
    <span className={styles.amount}>{amount}</span>
    <strong>Sem Juros</strong>
  </div>
);

ParcelBox.propTypes = {
  parcel: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired
};


const ProductBox = ({ product }) => (
  <div className={styles.product}>
    <picture className={styles.productImage}>
      <img src={product.PS_PATH_IMAGEM_250} alt={product.PS_PRODUTO} />
    </picture>
    <div className={styles.productTitle}>{product.PS_PRODUTO}</div>
    <div className={styles.productPrice}>
      <span className={styles.currency}>R$</span>
      <span className={styles.amount}>{StringToReal(product.PS_VALOR_DE_VENDA)}</span>
    </div>
    {parcelado(product.PS_VL_VENDA_CCCREDITO3X)}
    <div className={styles.productButtons}>
      <Link
        to={`/product/${product.PS_PATH_PAGE}`}
        className={`btn ${styles.btn} ${styles.btnDetail}`}>Ver Detalhes</Link>
      <Link to="/product" className={`btn ${styles.btn} ${styles.btnBuy}`}>Comprar</Link>
    </div>
  </div>
);

ProductBox.propTypes = {
  product: PropTypes.object.isRequired
};


export default ProductBox;
