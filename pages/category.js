import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import classNames from 'classnames'
import Head from 'next/head'

import { initStore, setCategories, setFamilyIds } from '../store'
// import { Link } from '../routes'

import ApiCategories from '../api/Categories'
import ApiUrl from '../api/Url'
import ApiCategory from '../api/Category'

import styles from '../assets/scss/App.scss'

import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import Sitemap from '../components/Sitemap'
import Copy from '../components/Copy'


import ProdutosCategoriaContainer from '../containers/ProdutosCategoria'
import WidgetCategoryFeature from '../containers/WidgetCategoryFeature'
import WidgetCategoryContainer from '../containers/WidgetCategoryContainer'

import TitleSection from '../components/TitleSection'
import FilterOrderProducts from '../components/FilterOrderProducts'
import Pagination from '../components/Pagination'

class Category extends React.Component {
  static async getInitialProps({ store, query }) {
    const urlMeta = await ApiUrl(query)
    const page = query.page ? query.page : 1

    const resultCategory = await ApiCategory({
      familyId: urlMeta.PS_ID_FAMILIA,
      groupId: urlMeta.PS_ID_GRUPO,
      subGroupId: urlMeta.PS_ID_SUBGRUPO,
      sort: query.sort,
      page,
    })

    const { products } = resultCategory
    const { pagination } = resultCategory
    const familyId = urlMeta.PS_ID_FAMILIA

    const state = store.getState()

    if (!state.categories.length) {
      const categories = await ApiCategories()
      store.dispatch(setCategories(categories))
    }

    store.dispatch(setFamilyIds(familyId))

    return { products, pagination, urlMeta }
  }

  prefixGerate() {
    const prefix = [this.props.url.pathname]

    if (this.props.url.query.family) {
      prefix.push(this.props.url.query.family)
    }
    if (this.props.url.query.group) {
      prefix.push(this.props.url.query.group)
    }
    if (this.props.url.query.subGroup) {
      prefix.push(this.props.url.query.subGroup)
    }

    return prefix.join('/')
  }

  render() {
    return (
      <div id="page">
        <Head>
          <title>{this.props.urlMeta.PS_TITLE}</title>
          <meta name="description" content={this.props.urlMeta.PS_DESCRIPTION} />
        </Head>
        <HeaderPage />
        <div className="page-home">
          <div className={`container ${styles.container}`}>
            <div className={styles.categoryPage}>
              <div className="row">
                <div className={classNames(styles.sidebar, 'col-md-3')}>
                  <WidgetCategoryFeature />
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

export default withRedux(initStore, mapState, mapDispatchToProps)(Category)
