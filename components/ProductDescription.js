import React from 'react'

import BlockInfo from './BlockInfo'

const ProductDescription = ({ product }) => {
  if (!product.PS_DETALHES_PRODUTO.length) {
    return null
  }

  return (
    <BlockInfo content={product.PS_DETALHES_PRODUTO} />
  )
}

export default ProductDescription
