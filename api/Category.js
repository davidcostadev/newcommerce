import axios from 'axios'


const parsePagination = (page, total, quant) => {
  const pages = Math.ceil(total / quant)
  const current = page > 0 ? page + 1 : 1
  const show = 5
  const listPages = []


  const oldLimit = (current - show) > 1 ? (current - show) : 2



  if (current > 1) {
  //   console.log('inicio', 1)
    listPages.push({
      page: 1,
      begin: true,
      current: false,
      end: false
    })
  }

  for(let i = oldLimit; i < current; i++) {
  //   console.log(`for old ${i}`)
    listPages.push({
      page: i,
      begin: false,
      current: false,
      end: false
    })
  }


  listPages.push({
    page: current,
    begin: false,
    current: true,
    end: false
  })

  // console.log(`current ${current}`)

  const maxLimit = current + (show + 1) < pages ? current + (show + 1) : pages


  for(let i = current + 1; i < maxLimit; i++) {
  //   console.log(`for new ${i}`)
    listPages.push({
      page: i,
      begin: false,
      current: false,
      end: false
    })
  }

  if (current < pages) {
    //   console.log('fim', pages)
    listPages.push({
      page: pages,
      begin: false,
      current: false,
      end: true
    })
  }

  return {
    list: listPages,
    total,
    current,
    pages,
    quant
  }
}

async function Category (props) {
  console.log(new Date(), 'Api Category');
  const quant = props.quant ? props.quant : 21
  const page = props.page ? props.page - 1 : 0

  const data = JSON.stringify({
    PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: null,
    PE_ID_FAMILIA: props.familyId,
    PE_ID_GRUPO: props.groupId ? props.groupId : null,
    PE_ID_SUBGRUPO: props.subGroupId ? props.subGroupId : null,
    PE_QUANT_REGISTROS: quant,
    PE_PAGINA_ID: page,
    PE_COLUNA_ID: 2,
    PE_COLUNA_ORDER: 2
  })


  const response = await axios.post('http://186.202.64.106:8000/datasnap/rest/Tsvmwebsite/sp_web_busca_vertical_sel', data);

  return {
    products: response.data.result[0].PS_TABELA_INFO,
    pagination: parsePagination(page, response.data.result[0].PS_QUANT_TOTAL_REGISTRO, quant)
  }
}

export default Category
