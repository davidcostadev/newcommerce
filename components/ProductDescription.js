import React from 'react'
import PropTypes from 'prop-types'
import BlockInfo from './BlockInfo'

const ProductDescription = ({ product }) => {
  if (!product.PS_DETALHES_PRODUTO.length) {
    return null
  }

  return (
    <BlockInfo content={product.PS_DETALHES_PRODUTO} />
  )
}

ProductDescription.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductDescription
