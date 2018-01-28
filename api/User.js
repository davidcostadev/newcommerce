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
      throw response.data.result[0]
    }

    return response.data.result[0].PS_TABELA_INFO[0]
  } catch (e) {
    throw e
  }
}

async function get(env, fetch, userId) {
  const data = JSON.stringify({
    PE_PASSKEY: env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: userId,
  })

  try {
    const response = await fetch(`${env.DOMAIN_API}/Tsvmwebsite/sp_web_cliente_cadastro_sel`, data)

    if (response.data.result[0].PS_ALERTA !== 7) {
      throw response.data.result[0]
    }

    const dataApi = response.data.result[0].PS_TABELA_INFO[0]

    const user = {
      user_id: dataApi.PS_ID_PESSOA,
      name: dataApi.PS_NOME,
      type_id: dataApi.PS_ID_TIPO,
      image_id: dataApi.PS_ID_IMAGEM,
      path_page: dataApi.PS_PATH_PAGE,
      phone_main: dataApi.PS_FONE_PRINCIPAL,
      phone_mobile: dataApi.PS_FONE_MOVEL,
      landline: dataApi.PS_FONE_FIXO,
      user_type: dataApi.PS_TIPO_DE_PESSOA,
      status: dataApi.PS_STATUS,
      tbl_product_taxt_id: dataApi.PS_ID_TBL_PRODUTO_TAXA,
      client_status_id: dataApi.PS_ID_STATUS_CLIENTE,
      resale_status_id: dataApi.PS_ID_STATUS_REVENDA,
      seller_id: dataApi.PS_ID_VENDEDOR,
      flag_email_mkt: dataApi.PS_FLAG_EMAIL_MKT,
      flag_address: dataApi.PS_FLAG_ENDERECO,
      notes: dataApi.PS_ANOTACOES,
      first_name: dataApi.PS_PRIMEIRO_NOME,
      middle_name: dataApi.PS_NOME_DO_MEIO,
      last_name: dataApi.PS_SOBRENOME,
      gender: dataApi.PS_GENERO,
      treatment: dataApi.PS_TRATAMENTO,
      cpf: dataApi.PS_CPF,
      rg: dataApi.PS_RG,
      bussness: dataApi.PS_TRABALHANAEMPRESA,
      office: dataApi.PS_CARGO,
      acadamic_formation: dataApi.PS_FORMACAOACADEMICA,
      date_birth: dataApi.PS_DATADONASCIMENTO,
      social_name: dataApi.PS_RAZAO_SOCIAL,
      fantasy_name: dataApi.PS_NOME_FANTASIA,
      cnpj: dataApi.PS_CNPJ,
      date_cnpj: dataApi.PS_DATA_CNPJ,
      insc_state: dataApi.PS_INSC_ESTADUAL,
      insc_municipal: dataApi.PS_INSC_MUNICIPAL,
      name_responsible: dataApi.PS_NOME_RESPONSAVEL,
      office_responsible: dataApi.PS_CARGO_RESPONSAVEL,
      main_office: dataApi.PS_ATIVIDADE_PRINCIPAL,
      vision_mission: dataApi.PS_MISSAO_VISAO,
      cep: dataApi.PS_CEP,
      address: dataApi.PS_ENDERECO,
      address_number: dataApi.PS_ENDERECO_NUMERO,
      address_complement: dataApi.PS_COMPLEMENTO,
      address_neighborhood: dataApi.PS_BAIRRO,
      address_city: dataApi.PS_CIDADE,
      address_state: dataApi.PS_UF,
      address_region: dataApi.PS_REGIAO_PAIS,
      address_country: dataApi.PS_PAIS,
      delivery_address: dataApi.PS_CEP_ENTREGA,
      delivery_address_name: dataApi.PS_ENDERECO_ENTREGA,
      delivery_address_number: dataApi.PS_ENDERECO_NUMERO_ENTREGA,
      delivery_address_complement: dataApi.PS_COMPLEMENTO_ENTREGA,
      delivery_address_neighborhood: dataApi.PS_BAIRRO_ENTREGA,
      delivery_address_city: dataApi.PS_CIDADE_ENTREGA,
      delivery_address_state: dataApi.PS_UF_ENTREGA,
      delivery_address_region: dataApi.PS_REGIAO_ENTREGA,
      delivery_address_country: dataApi.PS_PAIS_ENTREGA,
      website: dataApi.PS_WEBSITES,
      skype: dataApi.PS_SKYPE,
      facebook: dataApi.PS_FACEBOOK,
      twitter: dataApi.PS_TWITTER,
      googleplus: dataApi.PS_GOOGLEPLUS,
      linkedin: dataApi.PS_LINKEDIN,
      email: dataApi.PS_EMAIL_DE_LOGIN,
      linkedin_id: dataApi.PS_ID_LINKEDIN,
      twitter_id: dataApi.PS_ID_TWITTER,
      google_id: dataApi.PS_ID_GOOGLE,
      facebook_id: dataApi.PS_ID_FACEBOOK,
      accessweb: dataApi.PS_ACESSOWEB,
      level: dataApi.PS_NIVEL,
    }

    return user
  } catch (e) {
    throw e
  }
}

async function update(env, fetch, dataApi) {
  const data = JSON.stringify({
    PE_PASSKEY: env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_TIPO: dataApi.type_id,
    PE_ID_PESSOA: dataApi.user_id,
    PE_ID_FACEBOOK: dataApi.facebook_id,
    PE_ID_GOOGLE: dataApi.google_id,
    PE_ID_TWITTER: dataApi.twitter_id,
    PE_ID_LINKEDIN: dataApi.linkedin_id,
    PE_NOME: dataApi.name,
    PE_FONE_PRINCIPAL: dataApi.phone_main,
    PE_FONE_MOVEL: dataApi.phone_mobile,
    PE_FONE_FIXO: dataApi.landline,
    PE_ID_VENDEDOR: dataApi.seller_id,
    PE_FLAG_EMAIL_MKT: dataApi.flag_email_mkt,
    PE_FLAG_ENDERECO: dataApi.flag_address,
    PE_ANOTACOES: dataApi.notes,
    PE_PRIMEIRO_NOME: dataApi.first_name,
    PE_NOME_DO_MEIO: dataApi.middle_name,
    PE_SOBRENOME: dataApi.last_name,
    PE_GENERO: dataApi.gender,
    PE_TRATAMENTO: dataApi.treatment,
    PE_CPF: dataApi.cpf,
    PE_RG: dataApi.rg,
    PE_TRABALHANAEMPRESA: dataApi.bussness,
    PE_CARGO: dataApi.office,
    PE_FORMACAOACADEMICA: dataApi.acadamic_formation,
    PE_DATADONASCIMENTO: dataApi.date_birth,
    PE_RAZAO_SOCIAL: dataApi.social_name,
    PE_NOME_FANTASIA: dataApi.fantasy_name,
    PE_CNPJ: dataApi.cnpj,
    PE_DATA_CNPJ: dataApi.date_cnpj,
    PE_INSC_ESTADUAL: dataApi.insc_state,
    PE_INSC_MUNICIPAL: dataApi.insc_municipal,
    PE_NOME_RESPONSAVEL: dataApi.name_responsible,
    PE_CARGO_RESPONSAVEL: dataApi.office_responsible,
    PE_ATIVIDADE_PRINCIPAL: dataApi.main_office,
    PE_MISSAO_VISAO: dataApi.vision_mission,
    PE_CEP: dataApi.cep,
    PE_ENDERECO: dataApi.address,
    PE_ENDERECO_NUMERO: dataApi.address_number,
    PE_COMPLEMENTO: dataApi.address_complement,
    PE_BAIRRO: dataApi.address_neighborhood,
    PE_CIDADE: dataApi.address_city,
    PE_UF: dataApi.address_state,
    PE_REGIAO_PAIS: dataApi.address_region,
    PE_PAIS: dataApi.address_country,
    PE_CEP_ENTREGA: dataApi.delivery_address,
    PE_ENDERECO_ENTREGA: dataApi.delivery_address_name,
    PE_ENDERECO_NUMERO_ENTREGA: dataApi.delivery_address_number,
    PE_COMPLEMENTO_ENTREGA: dataApi.delivery_address_complement,
    PE_BAIRRO_ENTREGA: dataApi.delivery_address_neighborhood,
    PE_CIDADE_ENTREGA: dataApi.delivery_address_city,
    PE_UF_ENTREGA: dataApi.delivery_address_state,
    PE_REGIAO_ENTREGA: dataApi.delivery_address_region,
    PE_PAIS_ENTREGA: dataApi.delivery_address_country,
    PE_WEBSITES: dataApi.website,
    PE_SKYPE: dataApi.skype,
    PE_FACEBOOK: dataApi.facebook,
    PE_TWITTER: dataApi.twitter,
    PE_GOOGLEPLUS: dataApi.googleplus,
    PE_LINKEDIN: dataApi.linkedin,
    PE_EMAIL_DE_LOGIN: dataApi.email,
    PE_SENHA: null,
  })

  try {
    const response = await fetch(`${env.DOMAIN_API}/Tsvmwebsite/sp_web_cliente_cadastro_upd`, data)

    if (response.data.result[0].PS_ALERTA !== 7) {
      throw response.data.result[0]
    }

    return response.data.result[0].PS_TABELA_INFO[0]
  } catch (e) {
    throw e
  }
}

async function resetPassword(env, fetch, email) {
  const data = JSON.stringify({
    PE_PASSKEY: env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_EMAIL: email,
  })

  try {
    const response = await fetch(`${env.DOMAIN_API}/TSvmLogin/sp_login_web_rstpsw_upd`, data)

    if (response.data.result[0].PS_ALERTA !== 7) {
      throw response.data.result[0]
    }

    return response.data.result[0].PS_TABELA_INFO[0]
  } catch (e) {
    throw e
  }
}


export default {
  login,
  get,
  update,
  resetPassword,
}
