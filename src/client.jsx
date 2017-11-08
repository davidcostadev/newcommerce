import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import Redbox from 'redbox-react';
import { BrowserRouter as Router } from 'react-router-dom';

const App = require('./App').default;

const consoleErrorReporter = ({ error }) => {
// eslint-disable-next-line no-console
  console.error(error);
  return <Redbox error={error} />;
};

consoleErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

const render = (AppRoot) => {
  ReactDOM.render(
    <AppContainer errorReporter={consoleErrorReporter}>
      <Router>
        <AppRoot />
      </Router>
    </AppContainer>,
    document.getElementById('root')
  );
};

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./App.jsx', () => {
    // eslint-disable-next-line global-require
    const app = require('./App').default;
    render(app);
  });
}

render(App);
