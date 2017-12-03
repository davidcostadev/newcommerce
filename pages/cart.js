import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import Page from '../containers/PageHOF'
import styles from '../assets/scss/App.scss'
import ContentCart from '../components/ContentCart'

class Cart extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const urlMeta = {
      PS_TITLE: 'Carrinho',
      PS_DESCRIPTION: 'Carrinho de Compra',
    }

    return {
      sessionId,
      urlMeta,
    }
  }

  render() {
    return (
      <Page {...this.props}>
        <div className={`container ${styles.container}`}>
          <ContentCart />
        </div>
      </Page>
    )
  }
}


const mapState = state => state

export default withRedux(initStore, mapState)(Cart)
