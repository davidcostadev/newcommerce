import React from 'react';
import styles from '../assets/scss/App.scss';

const SearchForm = () => (
  <div className={styles.field}>
    <input className={`input ${styles.input} is-large`} type="text" placeholder="O que você está produrando?" />
    <button className={`button ${styles.button} is-info`}><i className="ion-ios-search" /></button>
  </div>
);

export default SearchForm;

