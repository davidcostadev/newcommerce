import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import classNames from 'classnames'
import Page from '../containers/PageHOF'
import { initStore, setFamilyIds } from '../store'
import ApiUrl from '../api/Url'
import ApiCategory from '../api/Category'
import { CategoriesPage, Container } from '../layout/Pages'
import ProdutosCategoriaContainer from '../containers/ProdutosCategoria'
import WidgetCategoryFeature from '../containers/WidgetCategoryFeature'
import WidgetCategoryContainer from '../containers/WidgetCategoryContainer'
import TitleSection from '../components/TitleSection'
import FilterOrderProducts from '../components/FilterOrderProducts'
import Pagination from '../components/Pagination'
import { redirect } from '../utils/user'

class Category extends React.Component {
  static async getInitialProps(props) {
    const {
      req,
      store,
      isServer,
      query,
    } = props
    const { sessionId } = Page.getInitialProps(store, req, isServer)
    let urlMeta = null

    try {
      urlMeta = await ApiUrl(query)
    } catch (e) {
      redirect(props, 'categories')
    }


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


    store.dispatch(setFamilyIds(familyId))

    return {
      sessionId,
      urlMeta,
      products,
      pagination,
    }
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
      <Page {...this.props}>
        <Container>
          <CategoriesPage>
            <div className="row">
              <div className={classNames('col-md-3')}>
                <WidgetCategoryFeature />
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
                <div>
                  <div>
                    <ProdutosCategoriaContainer products={this.props.products} />
                  </div>
                </div>
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

Category.propTypes = {
  products: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired,
  urlMeta: PropTypes.shape({
    PS_TITLE: PropTypes.string.isRequired,
  }).isRequired,
}

const mapState = state => state

const mapDispatchToProps = dispatch => ({
  setFamilyIds: bindActionCreators(setFamilyIds, dispatch),
})

export default withRedux(initStore, mapState, mapDispatchToProps)(Category)
