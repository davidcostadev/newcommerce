
async function get(env, fetch, params) {
  const data = JSON.stringify({
    PE_PASSKEY: env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: params.userId,
    PE_ID_PEDIDO: null,
    PE_ID_STATUS_PEDIDO: null,
    PE_DATA_INICIAL: null,
    PE_DATA_FINAL: null,
    PE_QT_REGISTROS: 25,
    PE_ID_PAGINA: 0,
    PE_ID_COLUNA: 1,
    PE_ASC_DESC: 1,
  })

  try {
    const response = await fetch(`${env.DOMAIN_API}/Tsvmwebsite/sp_web_pedido_sel`, data)

    if (response.data.result[0].PS_ALERTA !== 7) {
      throw response.data.result[0]
    }

    const dataApi = response.data.result[0].PS_TABELA_INFO

    return dataApi
  } catch (e) {
    throw e
  }
}

export default {
  get,
}
