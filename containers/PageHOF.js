import React from 'react'
import Head from 'next/head'
import { setCategories } from '../store'
import { setSessionId } from '../flux/user/actions'
import ApiCategories from '../api/Categories'
import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import Sitemap from '../components/Sitemap'
import Copy from '../components/Copy'

class Page extends React.Component {
  static async getInitialProps(store, req, isServer) {
    await Page.getCategories(store)

    const sessionId = Page.getSession(store, req, isServer)

    return {
      sessionId,
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

  componentWillMount() {
    // console.log(this.props)
  }

  render() {
    console.log('render PAGEHOF')
    return (
      <div id="page">
        <Head>
          <title>{this.props.urlMeta.PS_TITLE}</title>
          <meta name="description" content={this.props.urlMeta.PS_DESCRIPTION} />
        </Head>
        <HeaderPage query={this.props.url.query.q}/>
        <main id="page-content">
          <h1>{this.props.sessionId}</h1>
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

export default Page

// const mapToState = state => ({
//   categories: state.categories,
// })

// const mapDispatchToProps = dispatch => ({
//   setCategories: bindActionCreators(setCategories, dispatch),
// })

// export default connect(mapToState, mapDispatchToProps)(Page)
