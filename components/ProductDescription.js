import React from 'react'
import PropTypes from 'prop-types'
import BlockInfo from './BlockInfo'

const ProductDescription = ({ content }) => (
  <div>
    <BlockInfo content={content.features} />
    <BlockInfo content={content.images} />
    <BlockInfo content={content.pot} />
  </div>
)


ProductDescription.propTypes = {
  content: PropTypes.object.isRequired,
}

export default ProductDescription
