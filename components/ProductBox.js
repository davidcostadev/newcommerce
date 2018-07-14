import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'
import * as Product from '../layout/Product'
import { floatToReal } from '../utils/money'
import SquareBox from './SquareBox'
import ShowPrice from './permissions/ShowPrice'
import ShowCart from './permissions/ShowCart'
import ButtonAdd from './product/ButtonAddCart'


export const ProductBox = ({ product, columns }) => (
  <Product.ProductItem columns={columns}>
    <SquareBox image={product.urlImage} />
    <Product.ProductTitle>{product.name}</Product.ProductTitle>
    <ShowPrice>
      <Product.ProductPrice>
        <Product.ProductCurrency>R$</Product.ProductCurrency>
        <Product.ProductAmount>{floatToReal(product.regularPriceReal)}</Product.ProductAmount>
      </Product.ProductPrice>
      <Product.Status red green={parseInt(product.flagUnavaliable, 10)}>
        {product.PS_DISPONIBILIDADE}
      </Product.Status>
    </ShowPrice>
    <Product.ProductButtons>
      <Link route={`/product/${product.slug}`}>
        <Product.ProductBtnDetails
          href={`/product/${product.slug}`}
        >
          Ver Detalhes
        </Product.ProductBtnDetails>
      </Link>
      <ShowCart>
        <Product.ProductBtnBuy>
          <ButtonAdd
            productId={parseInt(product.idOffer, 10)}
          />
        </Product.ProductBtnBuy>
      </ShowCart>
    </Product.ProductButtons>
  </Product.ProductItem >
)


ProductBox.propTypes = {
  product: PropTypes.object.isRequired,
  columns: PropTypes.number.isRequired,
}

export default ProductBox
