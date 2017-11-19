import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from '../routes'

import styles from '../assets/scss/App.scss'

// const data = {
//   name: 'Gabinete Raidmax Gamer EXO Pto/Verde S/Fonte 108bg',
//   price: 170.40,
//   description: '<h2>Descrição</h2><p>Características:</p><p>– Marca: Raidmax</p><p>– Modelo: EXO 108BG</p><p>Especificações:</p><p>– Unidades externas (baias): 2x 5.25″</p><p>– Unidades internas (baias): 3x 3.5″ HD / 3x 2.5″ SSD</p><p>– Sistema Board: Micro ATX / ATX / Mini-ITX</p><p>– Slots de expansão: 7 Slots</p><p>– I/O Ports: 1x USB 3.0 + 1x USB 2.0 / 2x HD Áudio</p><p>– Dimensões: 445 x 185 x 420 mm</p><p>Sistema de resfriamento:</p><p>– Frontal: 1x 120mm LED fan</p><p>– Lateral: 2x 120mm fan (não incluso)</p><p>– Traseiro: 1x 80mm (não incluso)</p><p>Conteúdo da embalagem:</p><p>– 01 Gabinete Raidmax</p>',
//   description_short: 'Lorem inpur amet doin',
//   sky: '10968',
//   images: [
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1-150x150.jpg'
//     },
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1-150x150.jpg'
//     },
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1-150x150.jpg'
//     },
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1-150x150.jpg'
//     },
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1-150x150.jpg'
//     },
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1-150x150.jpg'
//     }
//   ]
// }

function toFloat(number) {
  return parseFloat(number.replace(',', '.'), 10)
}

function floatToReal(float) {
  const float2Decimal = Math.round(float * 100) / 100
  return float2Decimal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}
function StringToReal(number) {
  const float = toFloat(number)
  return float.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}


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


const stringToDesconto = (value, desconto) => {
  const float = toFloat(value)
  const factor = (100 - desconto) * 0.01

  return floatToReal(factor * float)

}


const ProductDetail = ({ product, bredcrumbs }) => (
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
          <button className="btn btn-lg btn-primary btn-buy"> Comprar</button>
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
