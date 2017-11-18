import React from 'react';
import axios from 'axios';
import ProductsCarrocel from '../components/ProductsCarrocel';


// import { Container, Header } from 'semantic-ui-react';
// import Helmet from 'react-helmet';

// import styles from '../assets/scss/App.scss';
// // import TopMenu from '../components/TopMenu';
// import ProductsCarrocel from '../components/ProductsCarrocel';
// import BannerMosaico from '../components/BannerMosaico';
// import BannerSeparate from '../components/BannerSeparate';
// import InfoBlocks from '../components/InfoBlocks';


class ProdutosEmDestaqueContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const data = JSON.stringify({
      PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
      PE_IP: '127.0.0.1',
      PE_SESSAO: 'asdfgh',
      PE_ID_CLIENTE: 0,
      PE_QUANT_REGISTROS: 4,
      PE_PAGINA_ID: 0,
      PE_COLUNA_ID: 2,
      PE_COLUNA_ORDER: 2
    });
    axios.post('http://186.202.64.106:8000/datasnap/rest/Tsvmwebsite/sp_web_busca_home_sel', data).then((response) => {
      this.setState({
        products: response.data.result[0].PS_TABELA_INFO
      });
    });

    // setTimeout(() => {
    //   this.setState({
    //     info: 'depois'
    //   });
    // }, 5000
    // );
  }

  render() {
    if (this.state.products.length === 0) {
      return null;
    }

    return (
      <ProductsCarrocel title="Produtos em Destaque" products={this.state.products} />
    );
  }
}


export default ProdutosEmDestaqueContainer;
