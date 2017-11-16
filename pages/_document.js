import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import ApiCategories from '../api/Categories'

import HeaderPage from '../src/components/HeaderPage'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    const categories = await ApiCategories()

    return { ...page, styleTags, categories }
  }


  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          <link rel='stylesheet' href='/static/css/bundle.css' />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.css" />
            <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
          {this.props.styleTags}
        </Head>
        <body>
          <HeaderPage />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
