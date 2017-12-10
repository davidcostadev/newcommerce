import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import theme from '../layout/theme'
import ProductBox from './ProductBox'
import * as Product from '../layout/Product'
// import * as Product from './ProductBox'


const ProductsSection = styled.div`
  padding-bottom: 60px;

  &+& {
    border-top: 1px solid ${theme.gray300};
    padding-top: 20px;
    margin-top: 20px;
  }
`
const ProductsSectionTitle = styled.h2`
  color: ${theme.colorSecond};
  font-size: 2.2rem;
  margin-top: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
`


const ProductsSectionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-right: -5px;
`

// ${props => props.columns3 ? `
//   @media (min-width: 767px) {
//     ${Product.ProductItem} {
//       flex: 1 1 calc(33.3333% - 10px);
//       max-width: calc(33.3333% - 10px);
//     }
//   }
// ` : ''}

const ProductsCarrocel = props => (
  <ProductsSection>
    <ProductsSectionTitle>{props.title}</ProductsSectionTitle>
    <ProductsSectionRow columns4>
      {props.products.map(product => (
        <ProductBox product={product} key={product.PS_ID_PRODUTO} />
      ))}
    </ProductsSectionRow>
  </ProductsSection>
)

ProductsCarrocel.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array,
}

ProductsCarrocel.defaultProps = {
  products: [],
}

export default ProductsCarrocel
