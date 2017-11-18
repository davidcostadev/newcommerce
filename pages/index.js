import React from 'react'
import { bindActionCreators} from 'redux'
import { initStore, setCategories } from '../store'
import withRedux from 'next-redux-wrapper'

import styles from '../assets/scss/App.scss';

import ApiCategories from '../api/Categories'

import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';
import Sitemap from '../components/Sitemap';
import Copy from '../components/Copy';

import ProdutosEmDestaque from '../containers/ProdutosEmDestaque';
import ProdutosNovos from '../containers/ProdutosNovos';
import ProdutosVendidos from '../containers/ProdutosVendidos';
import ProdutosVisitatos from '../containers/ProdutosVisitatos';
import BannerMosaico from '../components/BannerMosaico';
import BannerSeparate from '../components/BannerSeparate';
import InfoBlocks from '../components/InfoBlocks';

class Home extends React.Component {
 static async getInitialProps ({ store }) {
    const state = store.getState()

    if (!state.categories.length) {
      const categories = await ApiCategories()
      store.dispatch(setCategories(categories))
    }
    return { }
 }

  render () {
    return (
      <div id="page">
        <HeaderPage />
        <div className="page-home">
          <BannerMosaico />
          <div className={`container ${styles.container}`}>
            <ProdutosEmDestaque />
            <ProdutosNovos />
            <BannerSeparate />
            <ProdutosVisitatos />
            <ProdutosVendidos />
            <InfoBlocks />
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

const mapState = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCategories: bindActionCreators(setCategories, dispatch),
  }
}

export default withRedux(initStore, mapState, mapDispatchToProps)(Home)
