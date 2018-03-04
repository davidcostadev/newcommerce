import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import InfoBlocks from '../components/InfoBlocks'
import Page from '../containers/PageHOF'
import ProdutosEmDestaque from '../containers/ProdutosEmDestaque'
import ProdutosNovos from '../containers/ProdutosNovos'
import ProdutosVendidos from '../containers/ProdutosVendidos'
import ProdutosVisitatos from '../containers/ProdutosVisitatos'
import WidgetCategoryFeature from '../containers/WidgetCategoryFeature'
import WidgetCategoryContainer from '../containers/WidgetCategoryContainer'
import { CategoriesPage, Container } from '../layout/Pages'

class Home extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const urlMeta = {
      PS_TITLE: process.env.BUSSNESS_TITLE,
      PS_DESCRIPTION: process.env.BUSSNESS_DESCRIPTION,
    }

    return {
      sessionId,
      urlMeta,
    }
  }

  render() {
    return (
      <Page {...this.props}>
        <Container>
          <CategoriesPage>
            <div className="row">
              <div className="col-md-3">
                <WidgetCategoryFeature />
                <WidgetCategoryContainer />
              </div>
              <div className="col-md-9">
                <ProdutosEmDestaque />
                <ProdutosNovos />
                <ProdutosVisitatos />
                <ProdutosVendidos />
                <InfoBlocks />
              </div>
            </div>
          </CategoriesPage>
        </Container>
      </Page>
    )
  }
}

const mapState = state => state

export default withRedux(initStore, mapState)(Home)
