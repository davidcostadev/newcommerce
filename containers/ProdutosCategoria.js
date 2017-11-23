import React from 'react'
import PropTypes from 'prop-types'
import ProductBox from '../components/ProductBox'


class ProdutosCategoriaContainer extends React.Component {
  render() {
    if (this.props.products.length === 0) {
      return <p>Nenhum produto encontrado.</p>
    }

    return this.props.products.map(product => (
      <ProductBox product={product} key={product.PS_ID_PRODUTO} />
    ))
  }
}

ProdutosCategoriaContainer.propTypes = {
  products: PropTypes.array.isRequired,
}


export default ProdutosCategoriaContainer
