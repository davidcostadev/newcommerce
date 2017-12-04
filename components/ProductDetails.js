import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from '../routes'
import { toFloat, floatToReal, StringToReal, stringToDesconto } from '../utils/money'
import styles from '../assets/scss/App.scss'

function parcelado(number) {
  const float = toFloat(number)

  let currentParcel = 0
  let currentAmount = 0
  const limitSemJuros = 3
  const minimoParcela = 5

  if (float < minimoParcela) {
    return <ParcelBox parcel={currentParcel} amount={floatToReal(float)} />
  }

  for (let i = 1; i <= limitSemJuros; i += 1) {
    const current = float / i
    if (current < minimoParcela) {
      break
    }
    currentParcel = i
    currentAmount = current
  }

  return <ParcelBox parcel={currentParcel} amount={floatToReal(currentAmount)} />
}

const ParcelBox = ({ parcel, amount }) => (
  <div className={styles.productComplement}>
    <span>ou {parcel}x de</span>
    <span className={styles.currency}>R$</span>
    <span className={styles.amount}>{amount}</span>
    <span>Sem Juros</span>
  </div>
)

ParcelBox.propTypes = {
  parcel: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
}

const ProductDetail = ({ product, bredcrumbs, addProductCart }) => (
  <div className={styles.productDetails}>
    <h1 className={styles.productTitle}>{product.PS_PRODUTO}</h1>
    <p className={styles.productHeader}>
      {/* <span className={styles.rating}>
        <span className={styles.stars}>
          <span className={styles.star}>
            <i className="ion-ios-star" />
          </span>
          <span className={styles.star}>
            <i className="ion-ios-star" />
          </span>
          <span className={styles.star}>
            <i className="ion-ios-star" />
          </span>
          <span className={styles.star}>
            <i className="ion-ios-ion-ios-star-half" />
          </span>
          <span className={styles.star}>
            <i className="ion-ios-star-outline" />
          </span>
        </span>
        <a href="#" className={styles.ratingLink}>6 Avaliações</a>
      </span> */}
      <span className={styles.sku}>
        <i className="ion-ios-grid-view-outline" />
        <span>{product.PS_ID_PRODUTO}</span>
      </span>
      <span className={styles.tags}>
        <i className="ion-ios-pricetag-outline" />
        <Link route={bredcrumbs[2].route}><a className={styles.tag}>{bredcrumbs[2].title}</a></Link>
      </span>
    </p>
    <p className={styles.productDescriptionShort}>{product.PS_DESCRICAO_VENDA}</p>
    <div className={styles.productBlock}>
      <div className={styles.productPriceCol}>
        <p className={styles.productPrice}>
          <span className={styles.text}>Por</span>
          <span className={styles.currency}>R$</span>
          <span className={styles.amount}>{StringToReal(product.PS_VALOR_DE_VENDA)}</span>
        </p>
        {parcelado(product.PS_VL_VENDA_CCCREDITO3X)}
      </div>
      <div className={styles.productPriceCol}>
        <div className={styles.productButtons}>
          <button className="btn btn-lg btn-primary btn-buy" onClick={() => addProductCart(product.PS_ID_PRODUTO)}> Comprar</button>
          <button className="btn btn-lg btn-danger btn-favorite">
            <i className="ion-ios-heart" />
          </button>
        </div>
      </div>
    </div>
    <p className={styles.productPriceBoleto}>
      <span className={styles.currency}>R$</span>
      <span className={styles.amount}>{stringToDesconto(product.PS_VALOR_DE_VENDA, 6)}</span>
      <span className={styles.text}>7% de Desconco no Boleto ou Transferencia</span>
    </p>
    <div className={styles.productMore}>
      <div className={styles.productCorreioCalc}>
        <span>
          <i className="ion-ios-location" />
          <span>Digite seu CEP para calcular o frete</span>
        </span>
        <div className={classNames([styles.inputGroup, 'input-group'])}>
          <input type="text" className="form-control" placeholder="00000-000" />
          <span className="input-group-btn">
            <button className="btn btn-primary">Calcular</button>
          </span>
        </div>
      </div>
      <div className={styles.productMoreButtons}>
        <button className="btn btn-default">Achou preço melhor?</button>
      </div>
    </div>
  </div>
)

export default ProductDetail
