import React from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import jsCookie from 'js-cookie'
import { initStore } from '../store'
import Page from '../containers/PageHOF'
import styles from '../assets/scss/App.scss'
import ApiUrl from '../api/Url'
import ApiProduct from '../api/Product'
import { AddProduct } from '../api/Cart'
import { setCart, setCartItens } from '../flux/cart/cartActions'
import ProductDetails from '../components/ProductDetails'
import Gallery from '../components/Gallery'
import ProductsCarrocel from '../components/ProductsCarrocel'
import ProductDescription from '../components/ProductDescription'
import Breadcrumbs from '../components/Breadcrumbs'

class Product extends React.Component {
  static async getInitialProps({ req, query, store, isServer }) {
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const urlMeta = await ApiUrl(query)
    const productPage = await ApiProduct(urlMeta.PS_ID_PRODUTO)

    const cartId = Page.getCartId(store, req, isServer)

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

    this.state = {
      cartId: props.cartId,
    }
  }

  breadCrumbsProps() {
    const itens = []

    const family = this.props.categories.find(element => element.ID_FAMILIA === parseInt(this.props.product.PS_ID_FAMILIA, 10))
    const group = family.TABLE_GRUPO.find(element => element.ID_GRUPO === parseInt(this.props.product.PS_ID_GRUPO, 10))
    const subgroup = group.TABLE_SUBGRUPO.find(element => element.ID_SUBGRUPO === parseInt(this.props.product.PS_ID_SUBGRUPO, 10))


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
    console.log('addProductCart')
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
        <div className={`container ${styles.container}`}>
          <Breadcrumbs itens={this.breadCrumbsProps()} />
          <div className={styles.productLanding}>
            <div className="row">
              <div className="col-lg-4">
                <Gallery image={this.props.product.PS_PATH_IMAGEM_400} images={this.props.images} urlMeta={this.props.urlMeta} />
              </div>
              <div className="col-lg-8">
                <ProductDetails product={this.props.product} bredcrumbs={this.breadCrumbsProps()} addProductCart={this.addProductCart.bind(this)} />
              </div>

            </div>
          </div>

          <ProductDescription product={this.props.product} />
          <ProductsCarrocel title="Relacionados" products={this.props.products.slice(0, 4)} />
        </div>
      </Page>
    )
  }
}

const mapState = state => state


const mapDispatchToProps = dispatch => ({
  setCart: bindActionCreators(setCart, dispatch),
  setCartItens: bindActionCreators(setCartItens, dispatch),
})

export default withRedux(initStore, mapState, mapDispatchToProps)(Product)

