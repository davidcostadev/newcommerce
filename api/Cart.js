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

  const response = await axios.post('http://186.202.64.106:8000/datasnap/rest/TSvmCarrinho/sp_web_carrinho_produto_ins', data)

  return {
    cart: response.data.result[0].PS_TABELA_CARRINHO[0],
    cartItens: response.data.result[0].PS_TABELA_ITENS,
  }
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

  console.log('data', data)

  const response = await axios.post('http://186.202.64.106:8000/datasnap/rest/TSvmCarrinho/sp_web_carrinho_sel', data)

  console.log('data', response)
  // return {
  //   product: response.data.result[0].PS_TABELA_INFO[0],
  //   images: response.data.result[0].PS_IMAGENS_PRODUTO,
  //   products: response.data.result[0].PS_PRODUTOS_RELACIONADOS,
  // }
}
