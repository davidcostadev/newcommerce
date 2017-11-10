import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import styles from '../assets/scss/App.scss';

import ProductBox from '../components/ProductBox';
import TitleSection from '../components/TitleSection';

const Category = () => (
  <div>
    <Helmet
      title="Category"
    />
    <div className={`container ${styles.container}`}>
      <div className={styles.categoryPage}>
        <div className="row">
          <div className="sidebar col-md-3">
            sidebar
          </div>
          <div className="col col-lg-9">
            <div id="example-content">
              <TitleSection />
              <div className="row row-block align-items-center">
                <div className="col">
                  1066 Produtos
                </div>
                <div className="col">
                  <form className="form-inline justify-content-end">
                    <label htmlFor="order" className="col-sm-2 col-form-label">Filtrar</label>
                    <select id="order" className="form-control">
                      <option>Mais Vendidos</option>
                      <option>Mais Visitados</option>
                      <option>Maior Preço</option>
                      <option>Menor Preço</option>
                      <option>Nome A-Z</option>
                      <option>Nome Z-A</option>
                    </select>
                  </form>
                </div>
              </div>
              <div className={styles.productsSection}>
                <div className={classNames([styles.productsSectionRow, styles.products, styles.columns3])}>
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                </div>
              </div>

              <div className="row-block">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Anterior</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Próximo</a></li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Category;
