import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import TopMenu from '../components/TopMenu';

const Login = () => (
  <div>
    <Helmet
      title="Login"
    />
    <TopMenu activeItem="login" />
    <Container>
      <Header as="h2">
        Login
      </Header>
      <p>
        [ Form ]
      </p>
    </Container>
  </div>
);

export default Login;
