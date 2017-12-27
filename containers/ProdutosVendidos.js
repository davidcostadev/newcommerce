import React from 'react'
import axios from 'axios'
import ProductsCarrocel from '../components/ProductsCarrocel'


class ProdutosEmDestaqueContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    const data = JSON.stringify({
      PE_PASSKEY: process.env.PASSKEY,
      PE_IP: '127.0.0.1',
      PE_SESSAO: 'asdfgh',
      PE_ID_FAMILIA: null,
      PE_ID_PERIODO: 1,
      PE_QUANT_REGISTROS: 4,
      PE_PAGINA_ID: 0,
      PE_COLUNA_ID: 2,
      PE_COLUNA_ORDER: 2,
    })

    axios.post(`${process.env.DOMAIN_API}/Tsvmwebsite/sp_web_busca_maisvendidos_sel`, data).then((response) => {
      this.setState({
        products: response.data.result[0].PS_TABELA_PRODUTO,
      })
    })
  }

  render() {
    if (this.state.products.length === 0) {
      return null
    }

    return (
      <ProductsCarrocel title="Os mais Vendidos" products={this.state.products} />
    )
  }
}


export default ProdutosEmDestaqueContainer
