import React from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import jsCookie from 'js-cookie'
import styled from 'styled-components'
import { initStore } from '../store'
import Page from '../containers/PageHOF'
import { Container } from '../layout/Pages'
import ApiUrl from '../api/Url'
import ApiProduct from '../api/Product'
import { AddProduct } from '../api/Cart'
import { setCart, setCartItens } from '../flux/cart/cartActions'
import ProductDetails from '../components/ProductDetails'
import Gallery from '../components/Gallery'
import ProductsCarrocel from '../components/ProductsCarrocel'
import ProductDescription from '../components/ProductDescription'
import Breadcrumbs from '../components/Breadcrumbs'

const ProductPageBox = styled.div`
  margin-bottom: 20px;
`

class Product extends React.Component {
  static async getInitialProps(props) {
    const {
      req,
      query,
      store,
      isServer,
    } = props
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const urlMeta = await ApiUrl(query)
    const productPage = await ApiProduct(urlMeta.PS_ID_PRODUTO)

    const cartId = await Page.getCartId(store, req, isServer)

    return {
      sessionId,
      cartId,
      urlMeta,
      product: productPage.product,
      images: productPage.images,
      products: productPage.products,
    }
  }

  constructor(props) {
    super(props)

    this.addProductCart = this.addProductCart.bind(this)

    this.state = {
      cartId: props.cartId,
    }
  }

  breadCrumbsProps() {
    const itens = []

    const family = this.props.categories
      .find(element => element.ID_FAMILIA === parseInt(this.props.product.PS_ID_FAMILIA, 10))

    const group = family.TABLE_GRUPO
      .find(element => element.ID_GRUPO === parseInt(this.props.product.PS_ID_GRUPO, 10))

    const subgroup = group.TABLE_SUBGRUPO
      .find(element => element.ID_SUBGRUPO === parseInt(this.props.product.PS_ID_SUBGRUPO, 10))


    itens.push({
      route: `/category/${family.PATH_PAGE_FAMILIA}`,
      title: family.FAMILIA,
    })
    itens.push({
      route: `/category/${group.PATH_PAGE_GRUPO}`,
      title: group.GRUPO,
    })
    itens.push({
      route: `/category/${subgroup.PATH_PAGE_SUBGRUPO}`,
      title: subgroup.SUBGRUPO,
    })
    itens.push({
      route: `/product/${this.props.product.PS_PATH_PAGE}`,
      title: this.props.product.PS_PRODUTO,
    })
    // console.log(itens)
    return itens
  }

  async addProductCart(productId) {
    const cartId = this.state.cartId || null
    // console.log(cartId)

    try {
      const { cart, cartItens } = await AddProduct({
        productId,
        cartId,
        sessionId: this.props.sessionId,
      })
      jsCookie.set('cartId', cart.PS_ID_CARRINHO, { expires: 7 })

      this.setState({ cartId: cart.PS_ID_CARRINHO })

      this.props.setCart(cart)
      this.props.setCartItens(cartItens)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <Page {...this.props}>
        <Container>
          <Breadcrumbs itens={this.breadCrumbsProps()} />
          <ProductPageBox>
            <div className="row">
              <div className="col-lg-4">
                <Gallery
                  image={this.props.product.PS_PATH_IMAGEM_400}
                  images={this.props.images}
                  urlMeta={this.props.urlMeta}
                />
              </div>
              <div className="col-lg-8">
                <ProductDetails
                  product={this.props.product}
                  bredcrumbs={this.breadCrumbsProps()}
                  addProductCart={this.addProductCart}
                />
              </div>

            </div>
          </ProductPageBox>

          <ProductDescription product={this.props.product} />
          <ProductsCarrocel title="Relacionados" products={this.props.products.slice(0, 4)} />
        </Container>
      </Page>
    )
  }
}

Product.propTypes = {
  urlMeta: PropTypes.shape({
    PS_TITLE: PropTypes.string.isRequired,
    PS_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
  product: PropTypes.shape({
    PS_PATH_IMAGEM_400: PropTypes.string.isRequired,
    PS_ID_FAMILIA: PropTypes.string.isRequired,
    PS_ID_GRUPO: PropTypes.string.isRequired,
    PS_ID_SUBGRUPO: PropTypes.string.isRequired,
    PS_PRODUTO: PropTypes.string.isRequired,
    PS_PATH_PAGE: PropTypes.string.isRequired,
  }).isRequired,
  images: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  cartId: PropTypes.any,
  sessionId: PropTypes.string.isRequired,
  setCart: PropTypes.func.isRequired,
  setCartItens: PropTypes.func.isRequired,
}

Product.defaultProps = {
  cartId: null,
}

const mapState = state => state

const mapDispatchToProps = dispatch => ({
  setCart: bindActionCreators(setCart, dispatch),
  setCartItens: bindActionCreators(setCartItens, dispatch),
})

export default withRedux(initStore, mapState, mapDispatchToProps)(Product)

