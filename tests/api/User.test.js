import User from '../../api/User'
import UserMock from './__mocks__/User.test.mocks'

const fakeProcess = {
  env: {
    PASSKEY: 'key12345',
    DOMAIN_API: 'http://api.domain.com/v1/',
  },
}

const mockDataLogin = {
  PS_ID_CADASTRO: '9529',
  PS_NOME: 'David Santana (testecompra)',
  PS_ID_IMAGEM: '177356',
  PS_PATH_IMAGEM: '2014/8/131886/131890/david-santana-testecompra.jpg',
  PS_NIVEL: '0',
  PS_FEEDBACK: 'SEJA BEM VINDO David Santana (testecompra)',
  PS_ID_ERRO: '0',
  PS_ID_CARRINHO: '2301',
  PS_ID_LINKEDIN: '19372846',
  PS_ID_TWITTER: '19372846',
  PS_ID_GOOGLE: '110772428101918158983',
  PS_ID_FACEBOOK: '862183313826647',
  PS_ID_LOCATION: '9',
  PS_ACESSOWEBADMIN: '1',
}


const fakeFetchLogin = () => Promise.resolve({
  data: {
    result: [
      {
        PS_TABELA_INFO: [mockDataLogin],
        PS_ALERTA: 7,
      },
    ],
  },
})


const fakeFetchLoginError = () => Promise.resolve({
  data: {
    result: [
      {
        PS_TABELA_INFO: [
          {
            PS_FEEDBACK: 'USUÁRIO E SENHA INVÁLIDO ',
            PS_ID_ERRO: '5',
          },
        ],
        PS_ALERTA: 206,
      },
    ],
  },
})

const fakeFetchGetSuccess = () => Promise.resolve({
  data: UserMock.get,
})

const fakeFetchGetFall = () => Promise.resolve({
  data: UserMock.getDontFind,
})

const fakeFetchResetPassword = () => Promise.resolve({
  data: {
    result: [
      {
        PS_TABELA_INFO: [UserMock.getResetPassword],
        PS_ALERTA: 7,
        PS_FEEDBACK: 'Processo de altera\u00e7\u00e3o de senha iniciado',
      },
    ],
  },
})

const fakeFetchResetPasswordFall = () => Promise.resolve({
  data: {
    result: [UserMock.getDontFindResetPassword],
  },
})

const fakeFetchCheckHash = () => Promise.resolve({
  data: {
    result: [
      {
        PS_TABELA_INFO: [UserMock.checkHash],
        PS_ALERTA: 7,
        PS_FEEDBACK: 'Valida\u00e7\u00e3o da chave efetuado com sucesso',
      },
    ],
  },
})

const fakeFetchCheckHashFall = () => Promise.resolve({
  data: {
    result: [UserMock.checkHashFall],
  },
})

const fakeFetchChangePassword = () => Promise.resolve({
  data: {
    result: [
      {
        PS_TABELA_INFO: [UserMock.passwordChange],
        PS_ALERTA: 7,
        PS_FEEDBACK: 'Senha Alterada com sucesso',
      },
    ],
  },
})

const fakeFetchChangePasswordFall = () => Promise.resolve({
  data: {
    result: [UserMock.passwordChangeFallUser],
  },
})


describe('should test all function of user api', () => {
  it('should do login with email and password it\'s corrent', (done) => {
    const data = {
      email: 'usename@email.com',
      password: '1234',
    }
    User.login(fakeProcess.env, fakeFetchLogin, data)
      .then((response) => {
        expect(response)
          .toEqual(mockDataLogin)
        done()
      })
  })

  it('should do login with email and password it\'s wrong', (done) => {
    const data = {
      email: 'usename@email.com',
      password: 'otherfing',
    }
    User.login(fakeProcess.env, fakeFetchLoginError, data)
      .catch((err) => {
        expect(err)
          .toEqual({
            PS_ALERTA: 206,
            PS_TABELA_INFO: [
              {
                PS_FEEDBACK: 'USUÁRIO E SENHA INVÁLIDO ',
                PS_ID_ERRO: '5',
              },
            ],
          })
        done()
      })
  })

  it('should get a user with a id', (done) => {
    const userId = 1

    User.get(fakeProcess.env, fakeFetchGetSuccess, userId)
      .then((response) => {
        expect(response)
          .toEqual(UserMock.getResult)
        done()
      })
  })

  it('should fall when dont find user', (done) => {
    const userId = 99999

    User.get(fakeProcess.env, fakeFetchGetFall, userId)
      .catch((err) => {
        expect(err)
          .toEqual(UserMock.getDontFindResult)
        done()
      })
  })

  it('should get fall on get email', (done) => {
    const userId = 'email@gmail.com'

    User.resetPassword(fakeProcess.env, fakeFetchResetPasswordFall, userId)
      .catch((err) => {
        expect(err)
          .toEqual(UserMock.getDontFindResetPassword)
        done()
      })
  })

  it('should get success on get email', (done) => {
    const userId = 'email@gmail.com'

    User.resetPassword(fakeProcess.env, fakeFetchResetPassword, userId)
      .then((response) => {
        expect(response)
          .toEqual(UserMock.getResetPassword)
        done()
      })
  })

  it('should get success check hash', (done) => {
    const hash = '123456'

    User.checkHash(fakeProcess.env, fakeFetchCheckHash, hash)
      .then((response) => {
        expect(response)
          .toEqual(UserMock.checkHash)
        done()
      })
  })

  it('should get fall check hash', (done) => {
    const hash = '123456'

    User.checkHash(fakeProcess.env, fakeFetchCheckHashFall, hash)
      .catch((response) => {
        expect(response)
          .toEqual(UserMock.checkHashFall)
        done()
      })
  })

  it('should get success in change password user', (done) => {
    const data = {
      userId: 1234,
      password: '1234',
    }

    User.changePassword(fakeProcess.env, fakeFetchChangePassword, data)
      .then((response) => {
        expect(response)
          .toEqual(UserMock.passwordChange)
        done()
      }).catch(err => console.log(err))
  })

  it('should get fall in change password user', (done) => {
    const data = {
      userId: 1234,
      password: '1234',
    }

    User.changePassword(fakeProcess.env, fakeFetchChangePasswordFall, data)
      .catch((response) => {
        expect(response)
          .toEqual(UserMock.passwordChangeFallUser)
        done()
      })
  })
})
