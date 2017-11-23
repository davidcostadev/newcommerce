import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
// import { initStore, setCategories } from '../store'
// import withRedux from 'next-redux-wrapper'
import { ServerStyleSheet } from 'styled-components'
// import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }


  render() {
    // console.log(this.props)
    return (
      <html lang="pt-BR">
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
