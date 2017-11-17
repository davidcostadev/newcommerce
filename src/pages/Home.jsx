import React from 'react';
// import { Container, Header } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import styles from '../assets/scss/App.scss';

import ProdutosEmDestaque from '../containers/ProdutosEmDestaque';
import ProdutosNovos from '../containers/ProdutosNovos';
import ProdutosVendidos from '../containers/ProdutosVendidos';
import ProdutosVisitatos from '../containers/ProdutosVisitatos';
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
      <ProdutosNovos />
      <BannerSeparate />
      <ProdutosVisitatos />
      <ProdutosVendidos />
      <InfoBlocks />
    </div>
  </div>
);

export default Homepage;
