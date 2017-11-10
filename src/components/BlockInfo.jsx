import React from 'react';
// import classNames from 'classnames';

import styles from '../assets/scss/App.scss';

const BlockInfo = () => (
  <section className={styles.blockInfo}>
    <header className={styles.blockInfoHeader}>
      <h2>Informações do Produto</h2>
    </header>
    <div className={styles.blockInfoContent}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos veniam id, sunt dicta reiciendis</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos veniam id, sunt dicta reiciendis</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos veniam id, sunt dicta reiciendis</p>
    </div>
  </section>
);

export default BlockInfo;
