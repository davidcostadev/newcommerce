import React from 'react'
import PropTypes from 'prop-types'
import ProductsCarrocel from '../components/ProductsCarrocel'

const ProductsContainer = ({ products }) => {
  if (products.length === 0) {
    return <p>Nenhum produto encontrado.</p>
  }

  return <ProductsCarrocel products={products} columns={3} />
}

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
}


export default ProductsContainer
