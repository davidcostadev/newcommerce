import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import classNames from 'classnames'
import Page from '../containers/PageHOF'
import { initStore, setCategories, setFamilyIds } from '../store'
import ApiSearch from '../api/Search'
import { CategoriesPage, Container } from '../layout/Pages'
import ProdutosCategoriaContainer from '../containers/ProdutosCategoria'
import WidgetCategoryContainer from '../containers/WidgetCategoryContainer'
import TitleSection from '../components/TitleSection'
import FilterOrderProducts from '../components/FilterOrderProducts'
import Pagination from '../components/Pagination'

class Search extends React.Component {
  static async getInitialProps(props) {
    const {
      req,
      store,
      isServer,
      query,
    } = props

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
        <Container>
          <CategoriesPage>
            <div className="row">
              <div className={classNames('col-md-3')}>
                <WidgetCategoryContainer />
              </div>
              <div className="col col-lg-9">
                <TitleSection title={this.props.urlMeta.PS_TITLE} />
                <div className={classNames('row', 'align-items-center')}>
                  <div className="col">
                    {this.props.pagination.total} Produtos
                  </div>
                  <div className="col">
                    <FilterOrderProducts
                      prefix={this.prefixGerate()}
                      query={this.props.url.query}
                    />
                  </div>
                </div>
                <ProdutosCategoriaContainer products={this.props.products} />

                <div className="row-block">
                  <Pagination
                    prefix={this.prefixGerate()}
                    query={this.props.url.query}
                    {...this.props.pagination}
                  />
                </div>
              </div>
            </div>
          </CategoriesPage>
        </Container>
      </Page>
    )
  }
}

Search.propTypes = {
  products: PropTypes.array.isRequired,
  pagination: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
  urlMeta: PropTypes.shape({
    PS_TITLE: PropTypes.string.isRequired,
    PS_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.shape({
    query: PropTypes.shape({
      q: PropTypes.string,
    }),
    pathname: PropTypes.string,
  }).isRequired,
  children: PropTypes.any.isRequired,
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
