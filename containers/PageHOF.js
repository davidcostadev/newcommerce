import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Head from 'next/head'
import jsCookie from 'js-cookie'
import { withRouter } from 'next/router'
import { getCart } from '../api/Cart'
import { setCart, setCartItens } from '../flux/cart/cartActions'
import { setCategories } from '../store'
import { setSessionId, setAuthentication, setUser } from '../flux/user/actions'
import ApiCategories from '../api/Categories'
import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import Sitemap from '../components/Sitemap'
import Copy from '../components/Copy'
import ToolbarMobile from '../components/ToolbarMobile'
import NavbarMobile from '../components/NavbarMobile'
import SearchMobile from '../components/SearchMobile'
import cookie from '../utils/cookie'

class Page extends React.Component {
  static async getInitialProps(store, req, isServer) {
    Page.initialStore({ store, req, isServer })
    await Page.getCategories(store)

    const session = Page.getSession(store, req, isServer)
    const cartId = await Page.getCartId(store, req, isServer, session.sessionId)

    return {
      ...session,
      cartId,
    }
  }

  static initialStore(context) {
    const logged = cookie('logged', context)
    const user = cookie('user', context)

    if (logged === 'true') {
      context.store.dispatch(setAuthentication(true))
      context.store.dispatch(setUser(JSON.parse(user)))
    }
  }

  static async getCategories(store) {
    const state = store.getState()

    if (!state.categories.length) {
      try {
        const categories = await ApiCategories()
        store.dispatch(setCategories(categories))
      } catch (err) {
        console.error(err)
      }
    }
  }

  static getSession(store, req, isServer) {
    const state = store.getState()

    if (isServer) {
      req.session.userSessionId = req.session.id

      store.dispatch(setSessionId(req.session.id))

      return {
        sessionId: req.session.id,
        user: state.user,
        authentication: state.authentication,
      }
    }

    return {
      session: state.sessionId,
      authentication: state.authentication,
      user: state.user,
    }
  }

  static async getCartId(store, req, isServer, sessionId) {
    let cartId = null

    if (isServer) {
      cartId = req.cookies.cartId || null
    } else {
      cartId = jsCookie.get('cartId') || null
    }

    cartId = parseInt(cartId, 10)

    if (cartId) {
      await Page.getCart(store, cartId, sessionId)
    }

    return cartId
  }

  static async getCart(store, cartId, sessionId) {
    const state = store.getState()

    if (state.cartItens.length) {
      return {
        cart: state.cart,
        cartItens: state.cartItens,
      }
    }

    try {
      const env = {
        PASSKEY: process.env.PASSKEY,
        DOMAIN_API: process.env.DOMAIN_API,
      }
      const data = {
        cartId,
        sessionId,
      }

      const { cart, cartItens } = await getCart(env, axios.post, data)

      store.dispatch(setCart(cart))
      store.dispatch(setCartItens(cartItens))
    } catch (err) {
      console.error(err)
    }

    return cartId
  }

  render() {
    return (
      <div id="page">
        <Head>
          <title>{this.props.urlMeta.PS_TITLE}</title>
          <meta name="description" content={this.props.urlMeta.PS_DESCRIPTION} />
        </Head>
        <HeaderPage query={this.props.router.query.q} />
        <NavbarMobile query={this.props.router.query.q} />
        <main id="page-content">
          {this.props.children}
        </main>
        <FooterPage>
          <Sitemap />
          <Copy />
        </FooterPage>
        <SearchMobile />
        <ToolbarMobile />
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


export default withRouter(Page)

// const mapToState = state => ({
//   categories: state.categories,
// })

// const mapDispatchToProps = dispatch => ({
//   setCategories: bindActionCreators(setCategories, dispatch),
// })

// export default connect(mapToState, mapDispatchToProps)(Page)
