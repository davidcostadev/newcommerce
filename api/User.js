import md5 from 'md5'

async function login(env, fetch, { email, password }) {
  const data = JSON.stringify({
    PE_PASSKEY: env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_EMAIL_DE_LOGIN: email,
    PE_SENHA: md5(password),
  })

  try {
    const response = await fetch(`${env.DOMAIN_API}/Tsvmwebsite/sp_web_login_frontend_sel`, data)

    if (response.data.result[0].PS_ALERTA !== 7) {
      throw new Error(response.data.result[0].PS_TABELA_INFO[0].PS_FEEDBACK)
    }

    return response.data.result[0].PS_TABELA_INFO[0]
  } catch (e) {
    throw e
  }
}

export default {
  login,
}
