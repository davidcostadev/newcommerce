import React from 'react'
import ApiProducts from '../api/Products'
import ProductsCarrocel from '../components/ProductsCarrocel'

class ProdutosEmDestaqueContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    ApiProducts().then((products) => {
      this.setState({
        products,
      })
    })
  }

  render() {
    if (this.state.products.length === 0) {
      return null
    }

    return (
      <ProductsCarrocel title="Produtos em Destaque" products={this.state.products} />
    )
  }
}


export default ProdutosEmDestaqueContainer
