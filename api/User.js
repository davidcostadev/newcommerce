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

    return response.data.result[0].PS_TABELA_INFO[0]
  } catch (e) {
    throw e
  }
}

const env = {
  PASSKEY: 'f13f8b23c630b4c00737fcafe70a489c',
  DOMAIN_API: 'http://186.202.64.106:8881/datasnap/rest',
}

get(env, require('axios').post, 7202)
  .then(response => console.log(response))
  .catch(error => console.log(error))


// ​​​​​{"PE_PASSKEY":"f13f8b23c630b4c00737fcafe70a489c","PE_IP":"127.0.0.1","PE_SESSAO":"asdfgh","PE_ID_CLIENTE":7202}​​​​​

// ​​​​​{ PS_ID_PESSOA: '7202',
// ​​​​​  PS_NOME: 'CSTHOST WEB BUILDER - GILVAN3',​​​​​
// ​​​​​  PS_ID_TIPO: '2',​​​​​
// ​​​​​  PS_ID_IMAGEM: '11739',​​​​​
// ​​​​​  PS_PATH_PAGE: '',​​​​​
// ​​​​​  PS_FONE_PRINCIPAL: '36633255',​​​​​
// ​​​​​  PS_FONE_MOVEL: '23232',​​​​​
// ​​​​​  PS_FONE_FIXO: '3333',​​​​​
// ​​​​​  PS_TIPO_DE_PESSOA: 'PESSOA JURÍDICA',​​​​​
// ​​​​​  PS_STATUS: 'NÃO É REVENDA',​​​​​
// ​​​​​  PS_ID_TBL_PRODUTO_TAXA: '1',​​​​​
// ​​​​​  PS_ID_STATUS_CLIENTE: '49',​​​​​
// ​​​​​  PS_ID_STATUS_REVENDA: '43',​​​​​
// ​​​​​  PS_ID_VENDEDOR: '0',​​​​​
// ​​​​​  PS_FLAG_EMAIL_MKT: '0',​​​​​
// ​​​​​  PS_FLAG_ENDERECO: '0',​​​​​
// ​​​​​  PS_ANOTACOES: '',​​​​​
// ​​​​​  PS_PRIMEIRO_NOME: '',​​​​​
// ​​​​​  PS_NOME_DO_MEIO: '',​​​​​
// ​​​​​  PS_SOBRENOME: '',​​​​​
// ​​​​​  PS_GENERO: 'M',​​​​​
// ​​​​​  PS_TRATAMENTO: '',​​​​​
// ​​​​​  PS_CPF: '67315968415',​​​​​
// ​​​​​  PS_RG: '',​​​​​
// ​​​​​  PS_TRABALHANAEMPRESA: 'CSTHOST WEB BUILDER',​​​​​
// ​​​​​  PS_CARGO: 'SEO',​​​​​
// ​​​​​  PS_FORMACAOACADEMICA: '',​​​​​
// ​​​​​  PS_DATADONASCIMENTO: '',​​​​​
// ​​​​​  PS_RAZAO_SOCIAL: 'CSTHOST WEB BUILDER',​​​​​
// ​​​​​  PS_NOME_FANTASIA: '',​​​​​
// ​​​​​  PS_CNPJ: '17354936000113',​​​​​
// ​​​​​  PS_DATA_CNPJ: '',​​​​​
// ​​​​​  PS_INSC_ESTADUAL: '',​​​​​
// ​​​​​  PS_INSC_MUNICIPAL: '',​​​​​
// ​​​​​  PS_NOME_RESPONSAVEL: 'CSTHOST WEB BUILDER - GILVAN3',​​​​​
// ​​​​​  PS_CARGO_RESPONSAVEL: '',​​​​​
// ​​​​​  PS_ATIVIDADE_PRINCIPAL: '',​​​​​
// ​​​​​  PS_MISSAO_VISAO: '',​​​​​
// ​​​​​  PS_CEP: '59132020',​​​​​
// ​​​​​  PS_ENDERECO: 'Rua dos Jesuítas (Conj. Vila Verde I)',​​​​​
// ​​​​​  PS_ENDERECO_NUMERO: '114',​​​​​
// ​​​​​  PS_COMPLEMENTO: 'oajuçara',​​​​​
// ​​​​​  PS_BAIRRO: 'Pajuçara',​​​​​
// ​​​​​  PS_CIDADE: 'Natal',​​​​​
// ​​​​​  PS_UF: 'RN',​​​​​
// ​​​​​  PS_REGIAO_PAIS: 'Rio Grande do Norte',​​​​​
// ​​​​​  PS_PAIS: 'Brasil',​​​​​
// ​​​​​  PS_CEP_ENTREGA: '0',​​​​​
// ​​​​​  PS_ENDERECO_ENTREGA: '',​​​​​
// ​​​​​  PS_ENDERECO_NUMERO_ENTREGA: '',​​​​​
// ​​​​​  PS_COMPLEMENTO_ENTREGA: '',​​​​​
// ​​​​​  PS_BAIRRO_ENTREGA: '',​​​​​
// ​​​​​  PS_CIDADE_ENTREGA: '',​​​​​
// ​​​​​  PS_UF_ENTREGA: '',​​​​​
// ​​​​​  PS_REGIAO_ENTREGA: '',​​​​​
// ​​​​​  PS_PAIS_ENTREGA: '',​​​​​
// ​​​​​  PS_WEBSITES: 'www.csthost.com.br',​​​​​
// ​​​​​  PS_SKYPE: 'sdasdas',​​​​​
// ​​​​​  PS_FACEBOOK: '',​​​​​
// ​​​​​  PS_TWITTER: '',​​​​​
// ​​​​​  PS_GOOGLEPLUS: '',​​​​​
// ​​​​​  PS_LINKEDIN: '',​​​​​
// ​​​​​  PS_EMAIL_DE_LOGIN: 'gilvancosta2010@gmail.com',​​​​​
// ​​​​​  PS_ID_LINKEDIN: '',​​​​​
// ​​​​​  PS_ID_TWITTER: '',​​​​​
// ​​​​​  PS_ID_GOOGLE: '',​​​​​
// ​​​​​  PS_ID_FACEBOOK: '',​​​​​
// ​​​​​  PS_ACESSOWEB: '1',​​​​​
// ​​​​​  PS_NIVEL: '1' }​​​​​

export default {
  login,
  get,
}
