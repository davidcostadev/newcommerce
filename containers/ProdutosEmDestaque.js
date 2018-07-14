import React from 'react'
import ProductsCarrocel from '../components/ProductsCarrocel'
import ApiOffers from '../api/Offers'

class ProdutosEmDestaqueContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    return ApiOffers({ limit: 8, page: 1 }).then((offers) => {
      this.setState({
        products: offers,
      })
    })
  }

  render() {
    const { products } = this.state

    if (!products.length) {
      return null
    }

    return (
      <ProductsCarrocel
        title="Em Destaque"
        products={products}
      />
    )
  }
}


export default ProdutosEmDestaqueContainer
