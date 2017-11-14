import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


async function getIdsBySlug(slug) {
  return new Promise((resolve) => {
    const data = JSON.stringify({
      PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
      PE_IP: '127.0.0.1',
      PE_SESSAO: 'asdfgh',
      PE_ID_CLIENTE: null,
      PE_PAGENAME: slug
    });
    axios.post('http://186.202.64.106:8000/datasnap/rest/Tsvmwebsite/sp_website_url_sel', data).then((response) => {
      console.log(response.data);
      resolve(response.data);
      // this.setState({
      //   products: response.data.result[0].PS_TABELA_INFO
      // });
    });
  });
}

class ProdutosCategoriaContainer extends React.Component {
  constructor(props) {
    super(props);
    this.slug = props.slug;

    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    const info = await getIdsBySlug(this.slug);
    console.log(info);
    // const data = JSON.stringify({
    //   PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
    //   PE_IP: '127.0.0.1',
    //   PE_SESSAO: 'asdfgh',
    //   PE_ID_CLIENTE: null,
    //   PE_ID_FAMILIA: null,
    //   PE_ID_GRUPO: null,
    //   PE_ID_SUBGRUPO: null,
    //   PE_ESTOQUE: 0,
    //   PE_QUANT_REGISTROS: 21,
    //   PE_PAGINA_ID: null,
    //   PE_COLUNA_ID: 2,
    //   PE_COLUNA_ORDER: 2
    // });
    // axios.post('http://186.202.64.106:8000/datasnap/rest/Tsvmwebsite/sp_web_busca_vertical_sel', data)
    // .then((response) => {
    //   this.setState({
    //     products: response.data.result[0].PS_TABELA_INFO
    //   });
    // });
  }

  render() {
    if (this.state.products.length === 0) {
      return null;
    }

    return (
      <div>listagem</div>
    );
  }
}

ProdutosCategoriaContainer.propTypes = {
  slug: PropTypes.string.isRequired
};

export default ProdutosCategoriaContainer;
