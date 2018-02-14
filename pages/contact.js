import React from 'react'
import axios from 'axios'
import withRedux from 'next-redux-wrapper'
import { Link } from '../routes'
import { initStore } from '../store'
import User from '../api/User'
import FormContact from '../components/form/FormContact'
import { FlashMessages } from '../components/page/FlashMessage'
import Page from '../containers/PageHOF'
import { Container, PageContent } from '../layout/Pages'
import { RouterLink } from '../layout/Html'

class Contact extends React.Component {
  static async getInitialProps(props) {
    const {
      req,
      store,
      isServer,
    } = props

    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const urlMeta = {
      PS_TITLE: 'Fale Conosco',
      PS_DESCRIPTION: 'Está com dúvidas? fale conosco e resolva suas questões.',
    }

    return {
      sessionId,
      urlMeta,
    }
  }

  constructor() {
    super()

    this.send = this.send.bind(this)

    this.state = {
      success: false,
    }
  }

  async send(params) {
    console.log(params)
    console.log(this)

    try {
      const env = {
        PASSKEY: process.env.PASSKEY,
        DOMAIN_API: process.env.DOMAIN_API,
      }

      await User.sendEmail(env, axios.post, params)

      this.setState({
        success: true,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { success } = this.state
    let Content = null

    if (success) {
      const msgs = [
        {
          id: 1,
          type: 'success',
          message: 'Seu email foi enviado com sucesso, em breve entraremos em contato',
        },
      ]

      Content = (
        <div>
          <FlashMessages msgs={msgs} />
          <p>
            <Link route="/">
              <RouterLink className="btn btn-primary">Voltar para Home</RouterLink>
            </Link>
          </p>
        </div>
      )
    } else {
      Content = (
        <div>
          <h1>Fale Conosco</h1>
          <FormContact onChange={this.send} />
        </div>
      )
    }


    return (
      <Page {...this.props}>
        <Container>
          <PageContent>
            <div className="row justify-content-sm-center">
              <div className="col-sm-8">
                {Content}
              </div>
            </div>
          </PageContent>
        </Container>
      </Page>
    )
  }
}

const mapState = state => state

export default withRedux(initStore, mapState)(Contact)
