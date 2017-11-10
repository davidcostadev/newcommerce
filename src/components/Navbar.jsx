import React from 'react';
import classNames from 'classnames';
import styles from '../assets/scss/App.scss';

const Navbar = () => (
  <nav className={classNames([styles.navbar, 'navbar', 'navbar-light', 'navbar-toggleable-md', 'bg-faded', 'navbar-expand-lg'])}>
    <div className={`container ${styles.container}`}>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/category/name-of-category" className={classNames([styles.navLink, 'nav-link'])}>Telefonia</a></li>
        <li className="nav-item"><a href="/category/name-of-category" className={classNames([styles.navLink, 'nav-link'])}>Informática</a></li>
        <li className="nav-item"><a href="/category/name-of-category" className={classNames([styles.navLink, 'nav-link'])}>Eletrodomésticos</a></li>
        <li className="nav-item"><a href="/category/name-of-category" className={classNames([styles.navLink, 'nav-link'])}>Móveis</a></li>
        <li className="nav-item"><a href="/category/name-of-category" className={classNames([styles.navLink, 'nav-link'])}>Importados</a></li>
        <li className="nav-item"><a href="/category/name-of-category" className={classNames([styles.navLink, 'nav-link'])}>Alimentos</a></li>
        <li className="nav-item"><a href="/category/name-of-category" className={classNames([styles.navLink, 'nav-link'])}>Serviços</a></li>
      </ul>
      <ul className="navbar-nav ml-auto onlyDesktopBig">
        <li className="nav-item"><a href="/" className={classNames([styles.navLink, 'nav-link'])}>Minha Conta</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
