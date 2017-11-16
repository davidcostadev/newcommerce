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
  // static async getInitialProps() {
  //   console.log('oi')
  // }



  render() {
    return (<div>{JSON.stringify(this.state.categories)}</div>)
    // if (this.state.categories.length === 0) {
    //  return <div>vazio</div>;
    //}

    //return (
    //  <NavBar categories={this.state.categories} />
    //  // <ProductsCarrocel title="Produtos em Destaque" categories={this.state.categories} />
    //);
  }
}


export default CategoriasContainer;
