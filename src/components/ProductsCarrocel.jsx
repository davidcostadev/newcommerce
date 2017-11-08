import React from 'react';
import PropTypes from 'prop-types';

import ProductBox from './ProductBox';
import styles from '../assets/scss/App.scss';

console.log(styles);

const ProductsCarrocel = props => (
  <div className={styles.productsSection}>
    <h2 className="products-section-title">{props.title}</h2>
    <div className="products-section-row products columns-4">
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      {/* <product-box v-for="n in 4" :key="n"></product-box> */}
    </div>
  </div>
);

ProductsCarrocel.propTypes = {
  title: PropTypes.string.isRequired
};

export default ProductsCarrocel;
