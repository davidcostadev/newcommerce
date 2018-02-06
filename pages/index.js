import React from 'react'
import withRedux from 'next-redux-wrapper'
import Page from '../containers/PageHOF'
import { initStore } from '../store'
import ProdutosEmDestaque from '../containers/ProdutosEmDestaque'
import ProdutosNovos from '../containers/ProdutosNovos'
import ProdutosVendidos from '../containers/ProdutosVendidos'
import ProdutosVisitatos from '../containers/ProdutosVisitatos'
import InfoBlocks from '../components/InfoBlocks'
import { Container } from '../layout/Pages'

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
        {/* <BannerMosaico /> */}
        <Container>
          <ProdutosEmDestaque />
          <ProdutosNovos />
          {/* <BannerSeparate /> */}
          <ProdutosVisitatos />
          <ProdutosVendidos />
          <InfoBlocks />
        </Container>
      </Page>
    )
  }
}

const mapState = state => state

export default withRedux(initStore, mapState)(Home)
