import React from 'react'
import withRedux from 'next-redux-wrapper'
import Page from '../containers/PageHOF'
import { initStore } from '../store'
import ProdutosEmDestaque from '../containers/ProdutosEmDestaque'
import ProdutosNovos from '../containers/ProdutosNovos'
import ProdutosVendidos from '../containers/ProdutosVendidos'
import ProdutosVisitatos from '../containers/ProdutosVisitatos'
import BannerMosaico from '../components/BannerMosaico'
import BannerSeparate from '../components/BannerSeparate'
import InfoBlocks from '../components/InfoBlocks'
import { Container } from '../layout/Pages'

class Home extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const urlMeta = {
      PS_TITLE: 'Mundial Megastore é a Maior Loja de Informática e Importados de Ribeirão Preto',
      PS_DESCRIPTION: 'Agilize sua vida Comprando Online e receba na comodidade do seu endereço produtos eletrônicos, Informática, celulares, notebooks, perfumes importados, relógios e etc. Tudo o que você precisa para estar conectado com o mundo.',
    }

    return {
      sessionId,
      urlMeta,
    }
  }

  render() {
    return (
      <Page {...this.props}>
        <BannerMosaico />
        <Container>
          <ProdutosEmDestaque />
          <ProdutosNovos />
          <BannerSeparate />
          <ProdutosVisitatos />
          <ProdutosVendidos />
          <InfoBlocks />
        </div>
      </Page>
    )
  }
}

const mapState = state => state

export default withRedux(initStore, mapState)(Home)
