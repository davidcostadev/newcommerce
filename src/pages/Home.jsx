import React from 'react';
// import { Container, Header } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import styles from '../assets/scss/App.scss';
// import TopMenu from '../components/TopMenu';
import ProdutosEmDestaque from '../containers/ProdutosEmDestaque';
import ProductsCarrocel from '../components/ProductsCarrocel';
import BannerMosaico from '../components/BannerMosaico';
import BannerSeparate from '../components/BannerSeparate';
import InfoBlocks from '../components/InfoBlocks';

const Homepage = () => (
  <div className="page-home">
    <Helmet
      title="Inicio"
    />
    <BannerMosaico />
    <div className={`container ${styles.container}`}>
      <ProdutosEmDestaque />
      <ProductsCarrocel title="Produtos em Destaques" />
      <ProductsCarrocel title="Os últimos que Chegaram" />
      <BannerSeparate />
      <ProductsCarrocel title="Os mais Vendidos" />
      <ProductsCarrocel title="Mais Visitados" />
      <InfoBlocks />
    </div>
  </div>
);

export default Homepage;
