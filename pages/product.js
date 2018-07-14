import React from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { initStore } from '../store'
import Page from '../containers/PageHOF'
import { Container } from '../layout/Pages'
import ApiOffers from '../api/Offers'
import ApiOfferContent from '../api/OfferContent'
import ApiProductImages from '../api/ProductImages'
import { setCart, setCartItens } from '../flux/cart/cartActions'
import ProductDetails from '../components/ProductDetails'
import GalleryBox from '../components/GalleryBox'
import ProductsCarrocel from '../components/ProductsCarrocel'
import ProductDescription from '../components/ProductDescription'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductUtil from '../utils/product'


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
    let productPage
    let productContent
    let productImages = []
    let urlMeta

    if (query.slug) {
      productPage = await ApiOffers({ slug: query.slug, limit: 1 })
      productContent = await ApiOfferContent(productPage.idOffer)
      productImages = await ApiProductImages(productPage.idProductMain)

      urlMeta = {
        PS_TITLE: productPage.metaTitle,
        PS_DESCRIPTION: productPage.metaDescription,
      }
    }


    const cartId = await Page.getCartId(store, req, isServer)

    return {
      sessionId,
      cartId,
      urlMeta,
      product: productPage,
      content: productContent,
      images: productImages,
      products: [],
    }
  }

  constructor(props) {
    super(props)

    this.addProductCart = this.addProductCart.bind(this)

    this.state = {
      cartId: props.cartId,
      addingOnCart: 0,
    }
  }

  // breadCrumbsProps() {
  //   const itens = []

  //   console.log(this.props.product)

  //   const family = this.props.categories
  //     .find(element => element.ID_FAMILIA === parseInt(this.props.product.idFamily, 10))

  //   const group = family.TABLE_GRUPO
  //     .find(element => element.ID_GRUPO === parseInt(this.props.product.idGroup, 10))

  //   const subgroup = group.TABLE_SUBGRUPO
  //     .find(element => element.ID_SUBGRUPO === parseInt(this.props.product.idSubgroup1, 10))


  //   itens.push({
  //     route: `/category/${family.PATH_PAGE_FAMILIA}`,
  //     title: family.FAMILIA,
  //   })
  //   itens.push({
  //     route: `/category/${group.PATH_PAGE_GRUPO}`,
  //     title: group.GRUPO,
  //   })
  //   itens.push({
  //     route: `/category/${subgroup.PATH_PAGE_SUBGRUPO}`,
  //     title: subgroup.SUBGRUPO,
  //   })
  //   itens.push({
  //     route: `/product/${this.props.product.PS_PATH_PAGE}`,
  //     title: this.props.product.PS_PRODUTO,
  //   })

  //   return itens
  // }

  async addProductCart(productId) {
    const cartId = this.state.cartId || null

    this.setState({ addingOnCart: productId })

    const newCartId = await ProductUtil.addProductCart(
      productId,
      cartId,
      this.props.setCart,
      this.props.setCartItens,
    )

    this.setState({
      cartId: newCartId,
    })
  }

  render() {
    return (
      <Page {...this.props}>
        <Container>
          {/* <Breadcrumbs itens={this.breadCrumbsProps()} /> */}
          <ProductPageBox>
            <div className="row">
              <div className="col-lg-4">
                <GalleryBox
                  image={this.props.product.urlImage}
                  images={this.props.images}
                  urlMeta={this.props.urlMeta}
                />
              </div>
              <div className="col-lg-8">
                <ProductDetails
                  cartId={parseInt(this.props.cartId, 10)}
                  product={this.props.product}
                  content={this.props.content}
                  // bredcrumbs={this.breadCrumbsProps()}
                  addProductCart={this.addProductCart}
                  addingOnCart={this.state.addingOnCart}
                />
              </div>

            </div>
          </ProductPageBox>

          <ProductDescription content={this.props.content} />
          {/* <ProductsCarrocel title="Relacionados" products={this.props.products.slice(0, 4)} /> */}
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
    idFamily: PropTypes.string.isRequired,
    idGroup: PropTypes.string.isRequired,
    idSubgroup1: PropTypes.string.isRequired,
    PS_PRODUTO: PropTypes.string.isRequired,
    PS_PATH_PAGE: PropTypes.string.isRequired,
  }).isRequired,
  images: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  cartId: PropTypes.number,
  sessionId: PropTypes.string.isRequired,
  setCart: PropTypes.func.isRequired,
  setCartItens: PropTypes.func.isRequired,
}

Product.defaultProps = {
  cartId: 0,
}

const mapState = state => state

const mapDispatchToProps = dispatch => ({
  setCart: bindActionCreators(setCart, dispatch),
  setCartItens: bindActionCreators(setCartItens, dispatch),
})

export default withRedux(initStore, mapState, mapDispatchToProps)(Product)

