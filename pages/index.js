import React from 'react'
import { bindActionCreators} from 'redux'
import { initStore, setCategories } from '../store'
import withRedux from 'next-redux-wrapper'

import styles from '../src/assets/scss/App.scss';

import ApiCategories from '../api/Categories'

import HeaderPage from '../src/components/HeaderPage';
import FooterPage from '../src/components/FooterPage';
import Sitemap from '../src/components/Sitemap';
import Copy from '../src/components/Copy';

import ProdutosEmDestaque from '../src/containers/ProdutosEmDestaque';
import ProdutosNovos from '../src/containers/ProdutosNovos';
import ProdutosVendidos from '../src/containers/ProdutosVendidos';
import ProdutosVisitatos from '../src/containers/ProdutosVisitatos';
import BannerMosaico from '../src/components/BannerMosaico';
import BannerSeparate from '../src/components/BannerSeparate';
import InfoBlocks from '../src/components/InfoBlocks';

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
