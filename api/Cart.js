export async function Request(env, fetch, url, params) {
  const body = {
    PE_PASSKEY: env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfg',
    ...params,
  }

  try {
    const response = await fetch(
      `${env.DOMAIN_API}/${url}`,
      JSON.stringify(body),
    )

    return response
  } catch (error) {
    throw error
  }
}

export async function AddProduct(env, fetch, params) {
  const {
    cartId,
    productId,
    quant,
    // cep,
    // payMethods,
  } = params

  const data = {
    PE_ID_CARRINHO: cartId,
    PE_ID_CLIENTE: null,
    PE_ID_PG_FORMA: 1,
    PE_ID_PRODUTO: parseInt(productId, 10),
    PE_ID_TIPO_FRETE: 41068,
    PE_QT: quant || 1,
    PE_CEP: null,
  }

  try {
    const response = await Request(env, fetch, 'TSvmCarrinho/sp_web_carrinho_produto_ins', data)

    if (response.data.result[0].PS_ALERTA === 206) {
      throw new Error(response.data.result[0].PS_FEEDBACK)
    }
    return {
      cart: response.data.result[0].PS_TABELA_CARRINHO[0],
      cartItens: response.data.result[0].PS_TABELA_ITENS,
    }
  } catch (error) {
    throw error
  }
}

export async function getCart(env, fetch, params) {
  const {
    cartId,
  } = params

  const data = {
    PE_ID_CARRINHO: cartId,
    PE_ID_CLIENTE: null,
  }

  try {
    const response = await Request(env, fetch, 'TSvmCarrinho/sp_web_carrinho_sel', data)

    if (response.data.result[0].PS_ALERTA === 206) {
      throw new Error(response.data.result[0].PS_FEEDBACK)
    }

    return {
      cart: response.data.result[0].PS_TABELA_CARRINHO[0],
      cartItens: response.data.result[0].PS_TABELA_ITENS,
    }
  } catch (error) {
    throw error
  }
}

export async function changeQuant(env, fetch, params) {
  const {
    cartId,
    movimentCartId,
    productId,
    quant,
    payMethods,
  } = params

  const data = {
    PE_ID_CARRINHO: cartId,
    PE_ID_CLIENTE: null,
    PE_ID_MOVIMENTO_CAR: movimentCartId,
    PE_ID_PG_FORMA: payMethods || 1,
    PE_ID_PRODUTO: productId,
    PE_QT: quant,
  }

  try {
    const response = await Request(env, fetch, 'TSvmCarrinho/sp_web_carrinho_produto_qtd', data)

    if (response.data.result[0].PS_ALERTA === 206) {
      throw new Error(response.data.result[0].PS_FEEDBACK)
    }

    return {
      cart: response.data.result[0].PS_TABELA_CARRINHO[0],
      cartItens: response.data.result[0].PS_TABELA_ITENS,
    }
  } catch (err) {
    throw err
  }
}

export async function deleteProduct(env, fetch, productId) {
  const data = {
    PE_ID_CADASTRO: productId,
  }

  try {
    const response = await Request(env, fetch, 'TSvmCarrinho/sp_web_carrinho_produto_del', data)

    if (response.data.result[0].PS_ALERTA === 206) {
      throw new Error(response.data.result[0].PS_FEEDBACK)
    }
    return {
      cart: response.data.result[0].PS_TABELA_CARRINHO[0],
      cartItens: response.data.result[0].PS_TABELA_ITENS,
    }
  } catch (e) {
    throw e
  }
}

export async function closeCart(env, fetch, params) {
  const {
    paymentId,
    cartId,
    deliveryId,
    userId,
  } = params

  const data = {
    PE_ID_CARRINHO: parseInt(cartId, 10),
    PE_ID_CLIENTE: parseInt(userId, 10),
    PE_ID_VENDEDOR: null,
    PE_ID_PG_FORMA: paymentId,
    PE_ID_TIPO_FRETE: deliveryId,
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
  }

  try {
    const response = await Request(env, fetch, 'TSvmCarrinho/sp_web_carrinho_fcr', data)

    if (response.data.result[0].PS_ALERTA === 206) {
      throw new Error(response.data.result[0].PS_FEEDBACK)
    }

    return response.data.result[0].PS_TABELA_INFO[0]
  } catch (error) {
    throw error
  }
}

