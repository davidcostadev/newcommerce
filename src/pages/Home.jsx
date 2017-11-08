import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import TopMenu from '../components/TopMenu';

import styles from '../App.scss';

const Homepage = () => (
  <div className={styles.mainContainer}>
    <Helmet
      title="Welcome"
    />
    <TopMenu activeItem="home" />
    <Container>
      <Header as="h2">
        Home
      </Header>
      <p>
        Welcome!
      </p>
    </Container>
  </div>
);

export default Homepage;
