import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Head from 'next/head'

import { initStore, setCategories, setFamilyIds } from '../store'

import ApiCategories from '../api/Categories'

import styles from '../assets/scss/App.scss'

import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import Sitemap from '../components/Sitemap'
import Copy from '../components/Copy'
import ContentCart from '../components/ContentCart'


class Search extends React.Component {
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
          <title>Carrinho</title>
          <meta name="description" content="carrinho de compra" />
        </Head>
        <HeaderPage />
        <div className="page-cart">
          <div className={`container ${styles.container}`}>
            <ContentCart />
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

export default withRedux(initStore, mapState, mapDispatchToProps)(Search)
