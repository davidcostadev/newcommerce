import React from 'react';
import classNames from 'classnames';

import styles from '../assets/scss/App.scss';

const Breadcrumbs = () => (
  <ol className={classNames([styles.breadcrumb, 'breadcrumb'])}>
    <li className={classNames([styles.breadcrumbItem, 'breadcrumb-item'])}>
      <a href="#">Informática</a>
    </li>
    <li className={classNames([styles.breadcrumbItem, 'breadcrumb-item'])}>
      <a href="#">Gabinetes</a>
    </li>
    <li className={classNames([styles.breadcrumbItem, 'breadcrumb-item', 'active'])}>Gabinete Raidmax Gamer EXO Pto/verde S/fonte 108bg</li>
  </ol>
);

export default Breadcrumbs;
