import React from 'react'
import { bindActionCreators} from 'redux'
import { initStore, setCategories } from '../store'
import withRedux from 'next-redux-wrapper'

import styles from '../src/assets/scss/App.scss';

import ProdutosEmDestaque from '../src/containers/ProdutosEmDestaque';
import ProdutosNovos from '../src/containers/ProdutosNovos';
import ProdutosVendidos from '../src/containers/ProdutosVendidos';
import ProdutosVisitatos from '../src/containers/ProdutosVisitatos';
import BannerMosaico from '../src/components/BannerMosaico';
import BannerSeparate from '../src/components/BannerSeparate';
import InfoBlocks from '../src/components/InfoBlocks';

class Counter extends React.Component {

  render () {
    return (
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
    </div>
    )
  }
}

// const mapStateTodos = state => {
//   return state
// }

const mapDispatchToProps = (dispatch) => {
  return {
    // addCount: bindActionCreators(addCount, dispatch),
    // startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
