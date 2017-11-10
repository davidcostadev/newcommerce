/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';
// import './assets/scss/App.scss';


import Homepage from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';

import HeaderPage from './components/HeaderPage';
import FooterPage from './components/FooterPage';
import Sitemap from './components/Sitemap';
import Copy from './components/Copy';

const App = () => (
  <div id="page" style={{ height: '100%' }}>
    <Helmet
      htmlAttributes={{ lang: 'pt-br', amp: undefined }} // amp takes no value
      titleTemplate="%s - Atacado Ribeirão"
      titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
      meta={[
        { name: 'description', content: 'Agilize sua vida Comprando Online e receba na comodidade do seu endereço produtos eletrônicos, Informática, celulares, notebooks, perfumes importados, relógios e etc. Tudo o que você precisa para estar conectado com o mundo.' },
        { charset: 'utf-8' }
      ]}
    />
    <HeaderPage />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/product" component={Product} />
      <Route path="/category" component={Category} />
    </Switch>
    <FooterPage>
      <Sitemap />
      <Copy />
    </FooterPage>
  </div>
);

App.propTypes = {};
App.defaultProps = {};

export default App;
