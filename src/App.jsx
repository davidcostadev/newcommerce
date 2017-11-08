/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import Homepage from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';


const App = () => (
  <Segment padded="very" style={{ height: '100%' }}>
    <Helmet
      htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
      titleTemplate="%s | APP_TITLE"
      titleAttributes={{ itemprop: 'name', lang: 'en' }}
      meta={[
        { name: 'description', content: 'An example of hot reloading universal React/Express App' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
    />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Switch>
  </Segment>
);

App.propTypes = {};
App.defaultProps = {};

export default App;
