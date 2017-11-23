import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import classNames from 'classnames'
import Head from 'next/head'

import { initStore, setCategories, setFamilyIds } from '../store'

import ApiCategories from '../api/Categories'
import ApiSearch from '../api/Search'

import styles from '../assets/scss/App.scss'

import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import Sitemap from '../components/Sitemap'
import Copy from '../components/Copy'


import ProdutosCategoriaContainer from '../containers/ProdutosCategoria'
import WidgetCategoryContainer from '../containers/WidgetCategoryContainer'

import TitleSection from '../components/TitleSection'
import Pagination from '../components/Pagination'

class Search extends React.Component {
  static async getInitialProps({ store, query }) {
    const page = query.page ? query.page : 1

    const resultCategory = await ApiSearch({
      search: query.q,
      page,
    })

    const { products } = resultCategory
    const { pagination } = resultCategory

    const urlMeta = {}
    urlMeta.PS_TITLE = `Pesquisa de produto "${query.q}"`
    urlMeta.PS_DESCRIPTION = `Pesquisa de produto "${query.q}"`

    const state = store.getState()

    if (!state.categories.length) {
      const categories = await ApiCategories()
      store.dispatch(setCategories(categories))
    }

    // console.log(products)

    return { products, pagination, urlMeta }
  }

  suffixGerate() {
    const sufix = []

    if (this.props.url.query.q) {
      sufix.push(`q=${this.props.url.query.q}`)
    }

    return sufix
  }

  render() {
    return (
      <div id="page">
        <Head>
          <title>{this.props.urlMeta.PS_TITLE}</title>
          <meta name="description" content={this.props.urlMeta.PS_DESCRIPTION} />
        </Head>
        <HeaderPage query={this.props.url.query.q} />
        <div className="page-home">
          <div className={`container ${styles.container}`}>
            <div className={styles.categoryPage}>
              <div className="row">
                <div className={classNames(styles.sidebar, 'col-md-3')}>
                  <WidgetCategoryContainer />
                </div>
                <div className="col col-lg-9">
                  <div id="example-content">
                    <TitleSection title={this.props.urlMeta.PS_TITLE} />
                    <div className={classNames('row', styles.rowBlock, 'align-items-center')}>
                      <div className="col">
                        {this.props.pagination.total} Produtos
                      </div>
                      <div className="col">
                        <form className="form-inline justify-content-end">
                          <label htmlFor="order" className="col-sm-2 col-form-label">Filtrar</label>
                          <select id="order" className="form-control">
                            <option>Mais Vendidos</option>
                            <option>Mais Visitados</option>
                            <option>Maior Preço</option>
                            <option>Menor Preço</option>
                            <option>Nome A-Z</option>
                            <option>Nome Z-A</option>
                          </select>
                        </form>
                      </div>
                    </div>
                    <div className={styles.productsSection}>
                      <div className={classNames([styles.productsSectionRow, styles.products, styles.columns3])}>
                        <ProdutosCategoriaContainer products={this.props.products} />
                      </div>
                    </div>

                    <div className="row-block">
                      <Pagination prefix={[]} suffix={this.suffixGerate()} {...this.props.pagination} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterPage>
            <Sitemap />
            <Copy />
          </FooterPage>
        </div>
      </div>
    )
  }
}


const mapState = state => ({
  categories: state.categories,
  familyId: state.familyId,
})

const mapDispatchToProps = dispatch => ({
  setCategories: bindActionCreators(setCategories, dispatch),
  setFamilyIds: bindActionCreators(setFamilyIds, dispatch),
})

export default withRedux(initStore, mapState, mapDispatchToProps)(Search)
