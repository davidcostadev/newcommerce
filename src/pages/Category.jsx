import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../assets/scss/App.scss';

import ProdutosCategoriaContainer from '../containers/ProdutosCategoria';
import ProductBox from '../components/ProductBox';
import TitleSection from '../components/TitleSection';
import WidgetFilter from '../components/WidgetFilter';
import WidgetCategory from '../components/WidgetCategory';

const Category = ({ match }) => (
  <div>
    <Helmet
      title="Category"
    />
    <div className={`container ${styles.container}`}>
      <div className={styles.categoryPage}>
        <div className="row">
          <div className={classNames(styles.sidebar, 'col-md-3')}>
            <WidgetFilter />
            <WidgetCategory />
          </div>
          <div className="col col-lg-9">
            <div id="example-content">
              <TitleSection />
              <div className={classNames('row', styles.rowBlock, 'align-items-center')}>
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
                  <ProdutosCategoriaContainer slug={match.params.slug} />
                </div>
              </div>

              <div className="row-block">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><Link to="/category" className="page-link">Anterior</Link></li>
                    <li className="page-item"><Link to="/category" className="page-link">1</Link></li>
                    <li className="page-item"><Link to="/category" className="page-link">2</Link></li>
                    <li className="page-item"><Link to="/category" className="page-link">3</Link></li>
                    <li className="page-item"><Link to="/category" className="page-link">Próximo</Link></li>
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

Category.propTypes = {
  match: PropTypes.object.isRequired
};

export default Category;
