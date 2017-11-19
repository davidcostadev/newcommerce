import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'

import { initStore, setCategories } from '../store'

import styles from '../assets/scss/App.scss'

import ApiCategories from '../api/Categories'

import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import Sitemap from '../components/Sitemap'
import Copy from '../components/Copy'

import ProdutosEmDestaque from '../containers/ProdutosEmDestaque'
import ProdutosNovos from '../containers/ProdutosNovos'
import ProdutosVendidos from '../containers/ProdutosVendidos'
import ProdutosVisitatos from '../containers/ProdutosVisitatos'
import BannerMosaico from '../components/BannerMosaico'
import BannerSeparate from '../components/BannerSeparate'
import InfoBlocks from '../components/InfoBlocks'

class Home extends React.Component {
  static async getInitialProps({ store }) {
    const state = store.getState()

    if (!state.categories.length) {
      const categories = await ApiCategories()
      store.dispatch(setCategories(categories))
    }
    return { }
  }

  render() {
    return (
      <div id="page">
        <Head>
          <title>Mundial Megastore é a Maior Loja de Informática e Importados de Ribeirão Preto</title>
          <meta name="description" content="Agilize sua vida Comprando Online e receba na comodidade do seu endereço produtos eletrônicos, Informática, celulares, notebooks, perfumes importados, relógios e etc. Tudo o que você precisa para estar conectado com o mundo." />
        </Head>
        <HeaderPage />
        <main className="page-home">
          <BannerMosaico />
          <div className={`container ${styles.container}`}>
            <ProdutosEmDestaque />
            <ProdutosNovos />
            <BannerSeparate />
            <ProdutosVisitatos />
            <ProdutosVendidos />
            <InfoBlocks />
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

export default withRedux(initStore, mapState, mapDispatchToProps)(Home)
