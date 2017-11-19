import React from 'react'
import axios from 'axios'
import ProductsCarrocel from '../components/ProductsCarrocel'


class ProdutosNovosContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    const data = JSON.stringify({
      PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
      PE_IP: '127.0.0.1',
      PE_SESSAO: 'asdfgh',
      PE_ID_CLIENTE: 0,
      PE_QUANT_REGISTROS: 4,
      PE_PAGINA_ID: 1,
      PE_COLUNA_ID: 2,
      PE_COLUNA_ORDER: 2,
    })

    axios.post('http://186.202.64.106:8000/datasnap/rest/Tsvmwebsite/sp_web_busca_maisvisitados_sel', data).then((response) => {
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
      <ProductsCarrocel title="Mais Visitados" products={this.state.products} />
    )
  }
}


export default ProdutosNovosContainer
