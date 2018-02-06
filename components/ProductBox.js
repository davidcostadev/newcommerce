import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'
import * as Product from '../layout/Product'
import { StringToReal } from '../utils/money'
import SquareBox from './SquareBox'
// import { parcelado } from './ParceladoBox'
import ShowPrice from './permissions/ShowPrice'
import ShowCart from './permissions/ShowCart'

export const ProductBox = ({ product, columns }) => (
  <Product.ProductItem columns={columns}>
    <SquareBox image={product.PS_PATH_IMAGEM_250} />
    <Product.ProductTitle>{product.PS_PRODUTO}</Product.ProductTitle>
    <ShowPrice>
      <Product.ProductPrice>
        <Product.ProductCurrency>R$</Product.ProductCurrency>
        <Product.ProductAmount>{StringToReal(product.PS_VALOR_DE_VENDA)}</Product.ProductAmount>
      </Product.ProductPrice>
      {/* parcelado(product.PS_VL_VENDA_CCCREDITO3X) */}
      <Product.Status red green={parseInt(product.PS_FLAG_DISPONIBILIDADE, 10)}>
        {product.PS_DISPONIBILIDADE}
      </Product.Status>
    </ShowPrice>
    <Product.ProductButtons>
      <Link route={`/product/${product.PS_PATH_PAGE}`}>
        <Product.ProductBtnDetails
          href={`/product/${product.PS_PATH_PAGE}`}
        >
          Ver Detalhes
        </Product.ProductBtnDetails>
      </Link>
      <ShowCart>
        <Link route="/product">
          <Product.ProductBtnBuy>Comprar</Product.ProductBtnBuy>
        </Link>
      </ShowCart>
    </Product.ProductButtons>
  </Product.ProductItem >
)


ProductBox.propTypes = {
  product: PropTypes.object.isRequired,
  columns: PropTypes.number.isRequired,
}

export default ProductBox
