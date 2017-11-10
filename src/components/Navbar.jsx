import React from 'react';
import classNames from 'classnames';
import styles from '../assets/scss/App.scss';

const Navbar = () => (
  <nav className={classNames([styles.navbar, 'navbar', 'navbar-light', 'navbar-toggleable-md', 'bg-faded', 'navbar-expand-lg'])}>
    <div className={`container ${styles.container}`}>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/category" className={classNames([styles.navLink, 'nav-link'])}>Informática</a></li>
        <li className="nav-item"><a href="/category" className={classNames([styles.navLink, 'nav-link'])}>Saúde & Beleza</a></li>
        <li className="nav-item"><a href="/category" className={classNames([styles.navLink, 'nav-link'])}>Eletrônicos</a></li>
        <li className="nav-item"><a href="/category" className={classNames([styles.navLink, 'nav-link'])}>Rede & Informática</a></li>
        <li className="nav-item"><a href="/category" className={classNames([styles.navLink, 'nav-link'])}>Games</a></li>
        <li className="nav-item"><a href="/category" className={classNames([styles.navLink, 'nav-link'])}>Últimos Produtos</a></li>
      </ul>
      <ul className="navbar-nav ml-auto onlyDesktopBig">
        <li className="nav-item"><a href="/" className={classNames([styles.navLink, 'nav-link'])}>Minha Conta</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
