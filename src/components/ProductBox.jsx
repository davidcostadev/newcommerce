import React from 'react';
// import PropTypes from 'prop-types';

const ProductBox = () => (
  <div className="product">
    <picture className="product-image">
      <img src="" alt="" />
    </picture>
    <div className="product-title">Quadros De Distribuição Embutir 5 Din/3 Nema Tramontina 56300/001</div>
    <div className="product-price">
      <span className="currency">R$</span> <span className="amount">16,80</span>
    </div>
    <div className="product-buttons">
      <button type="button" className="btn btn-detail">Ver Detalhes</button>
      <button type="button" className="btn btn-buy">Comprar</button>
    </div>
  </div>
);

// ProductBox.propTypes = {
//   title: PropTypes.string.isRequired
// };

export default ProductBox;
