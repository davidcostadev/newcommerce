import React from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
// import { changeQuant } from '../api/Cart'
import { setCart, setCartItens } from '../flux/cart/cartActions'
import Page from '../containers/PageHOF'
// import ContentCart from '../components/ContentCart'
import { Container } from '../layout/Pages'

class Dashboard extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId, cartId } = await Page.getInitialProps(store, req, isServer)


    const urlMeta = {
      PS_TITLE: 'Dashboard',
      PS_DESCRIPTION: 'Dashboard',
    }

    return {
      cartId,
      sessionId,
      urlMeta,
    }
  }

  render() {
    return (
      <Page {...this.props}>
        <Container>
          dashboard
        </Container>
      </Page>
    )
  }
}


const mapState = state => state


const mapDispatchToProps = dispatch => ({
  setCart: bindActionCreators(setCart, dispatch),
  setCartItens: bindActionCreators(setCartItens, dispatch),
})


export default withRedux(initStore, mapState, mapDispatchToProps)(Dashboard)
