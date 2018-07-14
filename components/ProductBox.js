import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'
import * as Product from '../layout/Product'
import { floatToReal } from '../utils/money'
import SquareBox from './SquareBox'
import ButtonToStore from './product/ButtonToStore'


export const ProductBox = ({ product, columns }) => (
  <Product.ProductItem columns={columns}>
    <SquareBox image={product.urlImage} />
    <Product.ProductTitle>{product.name}</Product.ProductTitle>
    <Product.ProductPrice>
      <Product.ProductCurrency>R$</Product.ProductCurrency>
      <Product.ProductAmount>{floatToReal(product.regularPriceReal)}</Product.ProductAmount>
    </Product.ProductPrice>
    <Product.Status red green={parseInt(product.flagUnavaliable, 10)}>
      {product.PS_DISPONIBILIDADE}
    </Product.Status>
    <Product.ProductButtons>
      <Link route={`/product/${product.slug}`}>
        <Product.ProductBtnDetails
          href={`/product/${product.slug}`}
        >
          Ver Detalhes
        </Product.ProductBtnDetails>
      </Link>
      <Product.ProductBtnBuy>
        <ButtonToStore
          to={product.urlAffiliate}
        />
      </Product.ProductBtnBuy>
    </Product.ProductButtons>
  </Product.ProductItem >
)


ProductBox.propTypes = {
  product: PropTypes.object.isRequired,
  columns: PropTypes.number.isRequired,
}

export default ProductBox
