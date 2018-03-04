import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
// import { initStore, setCategories } from '../store'
// import withRedux from 'next-redux-wrapper'
import { ServerStyleSheet } from 'styled-components'
// import { ServerStyleSheet } from 'styled-components'
import style from '../layout/reset'

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }


  render() {
    const urlBootstrap = 'maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css'
    const integrity = 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb'
    const urlIonicons = 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.css'


    return (
      <html lang="pt-BR">
        <Head>
          <title>{process.env.BUSSNESS_NAME || 'newcommerce'}</title>
          <link rel="stylesheet" href={urlIonicons} />
          <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" />
          <link rel="icon" type="image/png" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link
            rel="stylesheet"
            href={`https://${urlBootstrap}`}
            integrity={integrity}
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
          {style()}
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
