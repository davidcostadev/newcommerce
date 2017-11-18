import React from 'react';
import { bindActionCreators} from 'redux'
import { initStore, setCategories } from '../store'
import withRedux from 'next-redux-wrapper'


import { Link } from '../routes'
import ApiCategories from '../api/Categories'
import ApiUrl from '../api/Url'

import classNames from 'classnames';
import styles from '../assets/scss/App.scss';

import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';
import Sitemap from '../components/Sitemap';
import Copy from '../components/Copy';


import ProdutosCategoriaContainer from '../containers/ProdutosCategoria';
import ProductBox from '../components/ProductBox';
import TitleSection from '../components/TitleSection';
import WidgetFilter from '../components/WidgetFilter';
import WidgetCategory from '../components/WidgetCategory';

class Category extends React.Component {
  static async getInitialProps ({ store, query }) {

    await ApiUrl(query)

    const state = store.getState()

    if (!state.categories.length) {
      const categories = await ApiCategories()
      store.dispatch(setCategories(categories))
    }
    return { }
  }

  render() {
    // console.log(this.props.url.query.slug)
    return (
      <div id="page">
        <HeaderPage />
        <div className="page-home">
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
                        {/* <ProdutosCategoriaContainer slug={match.params.slug} /> */}
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
          <FooterPage>
            <Sitemap />
            <Copy />
          </FooterPage>
        </div>
      </div>
    )
  }
}

// const Category = ({ match }) => (
//   <div>
//     <Helmet
//       title="Category"
//     />
//     <div className={`container ${styles.container}`}>
//       <div className={styles.categoryPage}>
//         <div className="row">
//           <div className={classNames(styles.sidebar, 'col-md-3')}>
//             <WidgetFilter />
//             <WidgetCategory />
//           </div>
//           <div className="col col-lg-9">
//             <div id="example-content">
//               <TitleSection />
//               <div className={classNames('row', styles.rowBlock, 'align-items-center')}>
//                 <div className="col">
//                   1066 Produtos
//                 </div>
//                 <div className="col">
//                   <form className="form-inline justify-content-end">
//                     <label htmlFor="order" className="col-sm-2 col-form-label">Filtrar</label>
//                     <select id="order" className="form-control">
//                       <option>Mais Vendidos</option>
//                       <option>Mais Visitados</option>
//                       <option>Maior Preço</option>
//                       <option>Menor Preço</option>
//                       <option>Nome A-Z</option>
//                       <option>Nome Z-A</option>
//                     </select>
//                   </form>
//                 </div>
//               </div>
//               <div className={styles.productsSection}>
//                 <div className={classNames([styles.productsSectionRow, styles.products, styles.columns3])}>
//                   <ProdutosCategoriaContainer slug={match.params.slug} />
//                 </div>
//               </div>

//               <div className="row-block">
//                 <nav aria-label="Page navigation example">
//                   <ul className="pagination justify-content-center">
//                     <li className="page-item"><Link to="/category" className="page-link">Anterior</Link></li>
//                     <li className="page-item"><Link to="/category" className="page-link">1</Link></li>
//                     <li className="page-item"><Link to="/category" className="page-link">2</Link></li>
//                     <li className="page-item"><Link to="/category" className="page-link">3</Link></li>
//                     <li className="page-item"><Link to="/category" className="page-link">Próximo</Link></li>
//                   </ul>
//                 </nav>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   </div>
// );

// Category.propTypes = {
//   match: PropTypes.object.isRequired
// };

const mapState = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCategories: bindActionCreators(setCategories, dispatch),
  }
}

export default withRedux(initStore, mapState, mapDispatchToProps)(Category)