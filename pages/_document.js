import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
// import { initStore, setCategories } from '../store'
// import withRedux from 'next-redux-wrapper'
import flush from 'styled-jsx/server'
// import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    // console.log('MyDocument')

    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()

    return { html, head, errorHtml, chunks, styles }
  }


  render() {
    // console.log(this.props)
    return (
      <html>
        <Head>
          <title>My page</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.css" />
          <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
          <link rel="stylesheet" href="/static/css/bundle.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
