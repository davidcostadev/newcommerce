import React from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';

class CategoriasContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    const data = JSON.stringify({
      PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
      PE_IP: '127.0.0.1',
      PE_SESSAO: 'asdfgh'
      // PE_ID_CLIENTE: 0,
      // PE_QUANT_REGISTROS: 4,
      // PE_PAGINA_ID: 0,
      // PE_COLUNA_ID: 2,
      // PE_COLUNA_ORDER: 2
    });
    axios.post('http://186.202.64.106:8000/datasnap/rest/Tsvmwebsite/sp_web_website_menu_sel', data).then((response) => {
      console.log(response.data.result[0].PS_TABELA_INFO[0].TABLE_FAMILIA);
      this.setState({
        categories: response.data.result[0].PS_TABELA_INFO[0].TABLE_FAMILIA
      });
    });
  }

  render() {
    if (this.state.categories.length === 0) {
      return null;
    }

    return (
      <NavBar categories={this.state.categories} />
      // <ProductsCarrocel title="Produtos em Destaque" categories={this.state.categories} />
    );
  }
}


export default CategoriasContainer;
