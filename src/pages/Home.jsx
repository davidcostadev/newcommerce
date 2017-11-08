import React from 'react';
// import { Container, Header } from 'semantic-ui-react';
import Helmet from 'react-helmet';


// import TopMenu from '../components/TopMenu';
import ProductsCarrocel from '../components/ProductsCarrocel';

const Homepage = () => (
  <div className="page-home">
    <Helmet
      title="Inicio"
    />
    <div className="container">
      <ProductsCarrocel title="Informática" />
    </div>
  </div>
);

export default Homepage;
