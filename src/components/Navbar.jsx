import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../assets/scss/App.scss';

const Navbar = () => (
  <nav className={classNames([styles.navbar, 'navbar', 'navbar-light', 'navbar-toggleable-md', 'bg-faded', 'navbar-expand-lg'])}>
    <div className={`container ${styles.container}`}>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/category" className={classNames([styles.navLink, 'nav-link'])}>Informática</Link></li>
        <li className="nav-item"><Link to="/category" className={classNames([styles.navLink, 'nav-link'])}>Saúde & Beleza</Link></li>
        <li className="nav-item"><Link to="/category" className={classNames([styles.navLink, 'nav-link'])}>Eletrônicos</Link></li>
        <li className="nav-item"><Link to="/category" className={classNames([styles.navLink, 'nav-link'])}>Rede & Informática</Link></li>
        <li className="nav-item"><Link to="/category" className={classNames([styles.navLink, 'nav-link'])}>Games</Link></li>
        <li className="nav-item"><Link to="/category" className={classNames([styles.navLink, 'nav-link'])}>Últimos Produtos</Link></li>
      </ul>
      <ul className="navbar-nav ml-auto onlyDesktopBig">
        <li className="nav-item"><Link to="/" className={classNames([styles.navLink, 'nav-link'])}>Minha Conta</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
