import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import TopMenu from '../components/TopMenu';

import styles from '../App.scss';

const About = () => (
  <div className={styles.mainContainer}>
    <Helmet
      title="About us"
    />
    <TopMenu activeItem="about" />
    <Container>
      <Header as="h2">
        About
      </Header>
      <p>
        Write to: <pre>github at malix.com</pre>
      </p>
    </Container>
  </div>
);

export default About;
