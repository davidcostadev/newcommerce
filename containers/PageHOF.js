import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import jsCookie from 'js-cookie'
import { setCategories } from '../store'
import { setSessionId, setAuthentication } from '../flux/user/actions'
import ApiCategories from '../api/Categories'
import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import Sitemap from '../components/Sitemap'
import Copy from '../components/Copy'
import cookie from '../utils/cookie'

class Page extends React.Component {
  static async getInitialProps(store, req, isServer) {
    console.log('getInitialProps', 'Page')
    Page.initialStore({ store, req, isServer })
    await Page.getCategories(store)

    const sessionId = Page.getSession(store, req, isServer)

    return {
      sessionId,
    }
  }

  static initialStore(context) {
    const logged = cookie('logged', context)

    if (logged === 'true') {
      context.store.dispatch(setAuthentication(true))
    }
  }

  static async getCategories(store) {
    const state = store.getState()

    if (!state.categories.length) {
      const categories = await ApiCategories()
      store.dispatch(setCategories(categories))
    }
  }

  static getSession(store, req, isServer) {
    const state = store.getState()

    if (isServer) {
      req.session.userSessionId = req.session.id

      store.dispatch(setSessionId(req.session.id))
    }

    return state.sessionId
  }

  static getCartId(store, req, isServer) {
    if (isServer) {
      return req.cookies.cartId || null
    }

    return jsCookie.get('cartId') || null


    // const state = store.getState()

    // return state.cart.PS_ID_CARRINHO || null
  }

  componentWillMount() {
    // console.log(this.props)
  }

  render() {
    return (
      <div id="page">
        <Head>
          <title>{this.props.urlMeta.PS_TITLE}</title>
          <meta name="description" content={this.props.urlMeta.PS_DESCRIPTION} />
        </Head>
        <HeaderPage query={this.props.url.query.q}/>
        <main id="page-content">
          {this.props.children}
        </main>
        <FooterPage>
          <Sitemap />
          <Copy />
        </FooterPage>
      </div>
    )
  }
}

Page.propTypes = {
  urlMeta: PropTypes.shape({
    PS_TITLE: PropTypes.string.isRequired,
    PS_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.shape({
    query: PropTypes.shape({
      q: PropTypes.string,
    }),
  }),
  children: PropTypes.any.isRequired,
}

Page.defaultProps = {
  url: PropTypes.shape({
    query: {
      q: '',
    },
  }),
}


export default Page

// const mapToState = state => ({
//   categories: state.categories,
// })

// const mapDispatchToProps = dispatch => ({
//   setCategories: bindActionCreators(setCategories, dispatch),
// })

// export default connect(mapToState, mapDispatchToProps)(Page)
