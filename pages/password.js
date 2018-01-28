import React from 'react'
import withRedux from 'next-redux-wrapper'
import Page from '../containers/PageHOF'
import { initStore } from '../store'
import { Container, PageContent } from '../layout/Pages'
import FormChangePasswordGuest from '../components/form/FormChangePasswordGuest'

class Password extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const urlMeta = {
      PS_TITLE: 'password',
      PS_DESCRIPTION: 'If you dont remember anymore of your password, you can reset it in this page',
    }

    return {
      sessionId,
      urlMeta,
    }
  }

  render() {
    return (
      <Page {...this.props}>
        <Container>
          <PageContent>
            <div className="row justify-content-sm-center">
              <div className="col-sm-8">
                <h1>Resetar Senha</h1>
                <p>Seguida os passos abaixo:</p>
                <ul>
                  <li>Digite seu email</li>
                  <li>Uma mensagem será enviada</li>
                  <li>Siga a instruções contidas na mensagem</li>
                </ul>
                <FormChangePasswordGuest />
              </div>
            </div>
          </PageContent>
        </Container>
      </Page>
    )
  }
}

const mapState = state => state

export default withRedux(initStore, mapState)(Password)
