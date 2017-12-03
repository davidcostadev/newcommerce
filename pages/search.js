import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import classNames from 'classnames'
import Page from '../containers/PageHOF'
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
import FilterOrderProducts from '../components/FilterOrderProducts'
import Pagination from '../components/Pagination'

class Search extends React.Component {
  static async getInitialProps({ req, store, isServer, query }) {
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const page = query.page ? query.page : 1

    const resultCategory = await ApiSearch({
      search: query.q,
      sort: query.sort,
      page,
    })

    const { products } = resultCategory
    const { pagination } = resultCategory

    const urlMeta = {}
    urlMeta.PS_TITLE = `Pesquisa de produto "${query.q}"`
    urlMeta.PS_DESCRIPTION = `Pesquisa de produto "${query.q}"`

    return {
      sessionId,
      urlMeta,
      products,
      pagination,
    }
  }

  prefixGerate() {
    return this.props.url.pathname
  }

  render() {
    return (
      <Page {...this.props}>
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
                      <FilterOrderProducts prefix={this.prefixGerate()} query={this.props.url.query} />
                    </div>
                  </div>
                  <div className={styles.productsSection}>
                    <div className={classNames([styles.productsSectionRow, styles.products, styles.columns3])}>
                      <ProdutosCategoriaContainer products={this.props.products} />
                    </div>
                  </div>

                  <div className="row-block">
                    <Pagination prefix={this.prefixGerate()} query={this.props.url.query} {...this.props.pagination} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
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
