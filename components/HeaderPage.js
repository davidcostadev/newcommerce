import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Link } from '../routes'
import styles from '../assets/scss/App.scss'
import SearchForm from './SearchForm'
import CategoriasContainer from '../containers/Categorias'


Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const HeaderPage = ({ query }) => (
  <div id={styles.headerPageOne}>
    <header className={`navbar-top ${styles.navbarSpaced} ${styles.navbarInverse}`}>
      <div className={`container ${styles.container}`}>
        <div className="row align-items-center">
          <div className={`col col-md-4 ${styles.brand}`}>
            <Link route="/">
              <a className="brand-link">
                <img className={styles.logoDesktop} src="/static/img/logo-atacadoribeirao.svg" alt="Atacado Ribeirão" />
                <img className={styles.logoMobile} src="/static/img/logo-atacadoribeirao-white.svg" alt="Atacado Ribeirão" />
              </a>
            </Link>
          </div>
          <div className={`col ${styles.colSearch}`}>
            <SearchForm query={query} />
          </div>
          <div className={`col col-md-8 col-lg-3 ${styles.menu} ${styles.menuRight}`}>
            <div className={`${styles.menuItem} ${styles.onlyDesktop}`}>
              <Link route="/dashboard/orders"><a className={styles.menuLink}>Meus Pedidos</a></Link>
            </div>
            <div className={`${styles.menuItem} ${styles.onlyMobile}`}>
              <button className={styles.menuButton}>
                <i className="ion-ios-search" />
              </button>
            </div>
            <div className={`${styles.menuItem} ${styles.cartItem}`}>
              <Link route="/cart">
                <a className={styles.menuLink}><i className="ion-ios-cart-outline" /> <span className={`badge ${styles.badge}`}>1</span></a>
              </Link>
            </div>
            <div className={`${styles.menuItem} ${styles.onlyMobile}`}>
              <button className={styles.menuLink}><i className="ion-navicon" /></button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <CategoriasContainer />
  </div>
)

HeaderPage.defaultProps = {
  query: '',
}

HeaderPage.propTypes = {
  query: PropTypes.string,
}

export default HeaderPage
