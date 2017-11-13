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
      PE_PASSKEY: '71c3cc4f6b6da2e78e2332d75a4177c2',
      PE_IP: '127.0.0.1',
      PE_SESSAO: 'asdfgh',
      PE_ID_CLIENTE: 0,
      PE_QUANT_REGISTROS: 4,
      PE_PAGINA_ID: 1,
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
      <ProductsCarrocel title="Os mais Vendidos" products={this.state.products} />
    );
  }
}


export default ProdutosEmDestaqueContainer;
