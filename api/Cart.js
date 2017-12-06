import axios from 'axios'

export async function AddProduct(params) {
  console.log(new Date(), 'Api Cart AddProduct')

  const {
    sessionId,
    cartId,
    productId,
    quant,
    cep,
    payMethods,
  } = params


  const data = JSON.stringify({
    PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
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

  const resultData = axios.post('http://186.202.64.106:8000/datasnap/rest/TSvmCarrinho/sp_web_carrinho_produto_ins', data)
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
  console.log(new Date(), 'Api Cart getCart')

  const {
    sessionId,
    cartId,
  } = params

  const data = JSON.stringify({
    PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
    PE_IP: '127.0.0.1',
    PE_SESSAO: sessionId,
    PE_ID_CARRINHO: cartId || null,
    PE_ID_CLIENTE: null,
  })

  const resultData = await axios.post('http://186.202.64.106:8000/datasnap/rest/TSvmCarrinho/sp_web_carrinho_sel', data)
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

export async function changeQuant(params) {
  console.log(new Date(), 'Api Cart changeQuant')

  const {
    sessionId,
    cartId,
    movimentCartId,
    productId,
    quant,
    payMethods,
  } = params

  const data = JSON.stringify({
    PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
    PE_IP: '127.0.0.1',
    PE_SESSAO: sessionId,
    PE_ID_CARRINHO: cartId || null,
    PE_ID_CLIENTE: null,
    PE_ID_MOVIMENTO_CAR: movimentCartId,
    PE_ID_PG_FORMA: payMethods || 1,
    PE_ID_PRODUTO: productId,
    PE_QT: quant,
  })

  const resultData = await axios.post('http://186.202.64.106:8000/datasnap/rest/TSvmCarrinho/sp_web_carrinho_produto_qtd', data)
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

