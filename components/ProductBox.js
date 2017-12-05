import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'
import styles from '../assets/scss/App.scss'
import { StringToReal } from '../utils/money'
import SquareBox from './SquareBox'
import { parcelado } from './ParceladoBox'


export const ProductBox = ({ product }) => (
  <div className={styles.product}>
    <SquareBox image={product.PS_PATH_IMAGEM_250} />
    {/* <picture className={styles.productImage}>
      <img src={product.PS_PATH_IMAGEM_250} alt={product.PS_PRODUTO} />
    </picture> */}
    <div className={styles.productTitle}>{product.PS_PRODUTO}</div>
    <div className={styles.productPrice}>
      <span className={styles.currency}>R$</span>
      <span className={styles.amount}>{StringToReal(product.PS_VALOR_DE_VENDA)}</span>
    </div>
    {parcelado(product.PS_VL_VENDA_CCCREDITO3X)}
    <div className={styles.productButtons}>
      <Link route={`/product/${product.PS_PATH_PAGE}`}>
        <a className={`btn ${styles.btn} ${styles.btnDetail}`}>Ver Detalhes</a>
      </Link>
      <Link route="/product">
        <a className={`btn ${styles.btn} ${styles.btnBuy}`}>Comprar</a>
      </Link>
    </div>
  </div>
)

ProductBox.propTypes = {
  product: PropTypes.object.isRequired,
}


export default ProductBox
