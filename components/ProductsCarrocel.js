import React from 'react'
import PropTypes from 'prop-types'
import { ProductsSection, ProductsSectionTitle, ProductsSectionRow } from '../layout/Products'
import Product from './ProductBox'

const CarrocelTitle = ({ title }) => {
  if (!title.length) return null

  return (
    <ProductsSectionTitle>{title}</ProductsSectionTitle>
  )
}

const ProductsCarrocel = ({ products, columns, title }) => (
  <ProductsSection>
    <CarrocelTitle title={title} />
    <ProductsSectionRow columns4>
      {products.map(product => (
        <Product product={product} key={product.PS_ID_PRODUTO} columns={columns} />
      ))}
    </ProductsSectionRow>
  </ProductsSection>
)

ProductsCarrocel.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
  columns: PropTypes.number,
}

ProductsCarrocel.defaultProps = {
  title: '',
  products: [],
  columns: 4,
}

export default ProductsCarrocel
