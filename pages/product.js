import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import classNames from 'classnames'

import { initStore, setCategories } from '../store'

import styles from '../assets/scss/App.scss'

import ApiCategories from '../api/Categories'
import ApiUrl from '../api/Url'
import ApiProduct from '../api/Product'

import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import Sitemap from '../components/Sitemap'
import Copy from '../components/Copy'

import ProductDetails from '../components/ProductDetails'
import ProductsCarrocel from '../components/ProductsCarrocel'
import ProductDescription from '../components/ProductDescription'
import Breadcrumbs from '../components/Breadcrumbs'

// const data = {
//   name: 'Gabinete Raidmax Gamer EXO Pto/Verde S/Fonte 108bg',
//   price: 170.40,
//   description: '<h2>Descrição</h2><p>Características:</p><p>– Marca: Raidmax</p><p>– Modelo: EXO 108BG</p><p>Especificações:</p><p>– Unidades externas (baias): 2x 5.25″</p><p>– Unidades internas (baias): 3x 3.5″ HD / 3x 2.5″ SSD</p><p>– Sistema Board: Micro ATX / ATX / Mini-ITX</p><p>– Slots de expansão: 7 Slots</p><p>– I/O Ports: 1x USB 3.0 + 1x USB 2.0 / 2x HD Áudio</p><p>– Dimensões: 445 x 185 x 420 mm</p><p>Sistema de resfriamento:</p><p>– Frontal: 1x 120mm LED fan</p><p>– Lateral: 2x 120mm fan (não incluso)</p><p>– Traseiro: 1x 80mm (não incluso)</p><p>Conteúdo da embalagem:</p><p>– 01 Gabinete Raidmax</p>',
//   description_short: 'Lorem inpur amet doin',
//   sky: '10968',
//   images: [
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1-150x150.jpg'
//     },
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1-150x150.jpg'
//     },
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1-150x150.jpg'
//     },
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1-150x150.jpg'
//     },
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1-150x150.jpg'
//     },
//     {
//       original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1.jpg',
//       thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1-150x150.jpg'
//     }
//   ]
// }

class Product extends React.Component {
  static async getInitialProps({ store, query }) {
    const urlMeta = await ApiUrl(query)
    // console.log(urlMeta)

    const productPage = await ApiProduct(urlMeta.PS_ID_PRODUTO)

    const state = store.getState()

    if (!state.categories.length) {
      const categories = await ApiCategories()
      store.dispatch(setCategories(categories))
    }
    return {
      urlMeta,
      product: productPage.product,
      images: productPage.images,
      products: productPage.products,
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

  render() {
    // console.log(this.props.product)
    console.log(this.props.images)
    return (
      <div id="page">
        <Head>
          <title>{this.props.urlMeta.PS_TITLE}</title>
          <meta name="description" content={this.props.urlMeta.PS_DESCRIPTION} />
        </Head>
        <HeaderPage />
        <main id="product-page">
          <div className={`container ${styles.container}`}>
            <Breadcrumbs itens={this.breadCrumbsProps()} />
            <div className={styles.productLanding}>
              <div className="row">
                <div className="col-lg-4">
                  <div className={styles.gallery}>
                    <picture className={classNames([styles.galleryFeature, 'galleryImage'])}>
                      <img src={this.props.images[0].PS_PATH_IMAGEM_400} alt={this.props.urlMeta.PS_TITLE} />
                    </picture>
                    <div className={styles.galleryThumbs}>
                      {this.props.images.map(image => (
                        <picture className={styles.galleryThumb}>
                          <img src={image.PS_PATH_IMAGEM_400} alt={this.props.urlMeta.PS_TITLE} />
                        </picture>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <ProductDetails product={this.props.product} bredcrumbs={this.breadCrumbsProps()} />
                </div>

              </div>
            </div>

            <ProductDescription product={this.props.product} />
            <ProductsCarrocel title="Relacionados" products={this.props.products.slice(0, 4)} />
          </div>
        </main>
        <FooterPage>
          <Sitemap />
          <Copy />
        </FooterPage>
      </div>
    )
  }
}

const mapState = state => ({
  categories: state.categories,
})


const mapDispatchToProps = dispatch => ({
  setCategories: bindActionCreators(setCategories, dispatch),
})

export default withRedux(initStore, mapState, mapDispatchToProps)(Product)

