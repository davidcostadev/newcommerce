import axios from 'axios'

export async function AddProduct(params) {
  window.console.log(new Date(), 'Api Cart AddProduct')

  const {
    sessionId,
    cartId,
    productId,
    quant,
    cep,
    payMethods,
  } = params


  const data = JSON.stringify({
    PE_PASSKEY: process.env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: sessionId,
    PE_ID_CARRINHO: cartId || null,
    PE_ID_CLIENTE: null,
    PE_ID_PG_FORMA: payMethods || 1,
    PE_ID_PRODUTO: parseInt(productId, 10),
    PE_ID_TIPO_FRETE: 41068,
    PE_QT: quant || 1,
    PE_CEP: cep || null,
  })

  const url = `${process.env.DOMAIN_API}/TSvmCarrinho/sp_web_carrinho_produto_ins`

  const resultData = axios.post(url, data)
    .then((response) => {
      if (response.data.result[0].PS_ALERTA === 206) {
        throw new Error(response.data.result[0].PS_FEEDBACK)
      }
      return {
        cart: response.data.result[0].PS_TABELA_CARRINHO[0],
        cartItens: response.data.result[0].PS_TABELA_ITENS,
      }
    })

  return resultData
}

export async function getCart(params) {
  window.console.log(new Date(), 'Api Cart getCart')

  const {
    sessionId,
    cartId,
  } = params

  const data = JSON.stringify({
    PE_PASSKEY: process.env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: sessionId,
    PE_ID_CARRINHO: cartId || null,
    PE_ID_CLIENTE: null,
  })

  const url = `${process.env.DOMAIN_API}/TSvmCarrinho/sp_web_carrinho_sel`

  const resultData = await axios.post(url, data)
    .then((response) => {
      if (response.data.result[0].PS_ALERTA === 206) {
        switch (response.data.result[0].PS_ID_ERRO) {
          case 0:
            return {
              cart: {},
              cartItens: [],
            }
          default:
            throw new Error(response.data.result[0].PS_FEEDBACK)
        }
      }

      return {
        cart: response.data.result[0].PS_TABELA_CARRINHO[0],
        cartItens: response.data.result[0].PS_TABELA_ITENS,
      }
    })

  return resultData
}

export async function changeQuant(params) {
  window.console.log(new Date(), 'Api Cart changeQuant')

  const {
    sessionId,
    cartId,
    movimentCartId,
    productId,
    quant,
    payMethods,
  } = params

  const data = JSON.stringify({
    PE_PASSKEY: process.env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: sessionId,
    PE_ID_CARRINHO: cartId || null,
    PE_ID_CLIENTE: null,
    PE_ID_MOVIMENTO_CAR: movimentCartId,
    PE_ID_PG_FORMA: payMethods || 1,
    PE_ID_PRODUTO: productId,
    PE_QT: quant,
  })
  const url = `${process.env.DOMAIN_API}/TSvmCarrinho/sp_web_carrinho_produto_qtd`
  const resultData = await axios.post(url, data)
    .then((response) => {
      if (response.data.result[0].PS_ALERTA === 206) {
        throw new Error(response.data.result[0].PS_FEEDBACK)
      }
      return {
        cart: response.data.result[0].PS_TABELA_CARRINHO[0],
        cartItens: response.data.result[0].PS_TABELA_ITENS,
      }
    })

  return resultData
}

export async function closeCart(params) {
  window.console.log(new Date(), 'Api Cart closeCart')

  const {
    sessionId,
    paymentId,
    cartId,
    deliveryId,
    userId,
    // cep,
  } = params

  const data = JSON.stringify({
    PE_PASSKEY: process.env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: sessionId || 'asdfg',
    PE_ID_CARRINHO: parseInt(cartId, 10) || null,
    PE_ID_CLIENTE: parseInt(userId, 10) || null,
    PE_ID_VENDEDOR: null,
    PE_ID_PG_FORMA: paymentId || 1,
    PE_ID_TIPO_FRETE: deliveryId || 1,
    PE_QT_VOLUME: 1,
    PE_VL_FRETE: 0,
    PE_PRAZO_ENTREGA_DIA: 0,
    PE_CODIGOP: null,
    PE_VL_DESCONTO: null,
    PE_TX_DESCONTO_CODP: null,
    PE_QT_PARCELA: null,
    PE_VL_PARCELA: null,
    PE_VL_TOTAL_PARCELADO: null,
    PE_ANOTACOES: null,
  })

  const url = `${process.env.DOMAIN_API}/TSvmCarrinho/sp_web_carrinho_fcr`

  const resultData = await axios.post(url, data)
    .then((response) => {
      if (response.data.result[0].PS_ALERTA === 206) {
        throw new Error(response.data.result[0].PS_FEEDBACK)
      }

      return response.data.result[0].PS_TABELA_INFO[0]
    })

  return resultData
}

