import React from 'react';
// import styles from '../assets/scss/App.scss';

const Navbar = () => (
  <nav className="navbar navbar-light navbar-toggleable-md bg-faded navbar-expand-lg">
    <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item"><router-link to="/category/name-of-category" className="nav-link">Telefonia</router-link></li>
        <li className="nav-item"><router-link to="/category/name-of-category" className="nav-link">Informática</router-link></li>
        <li className="nav-item"><router-link to="/category/name-of-category" className="nav-link">Eletrodomésticos</router-link></li>
        <li className="nav-item"><router-link to="/category/name-of-category" className="nav-link">Móveis</router-link></li>
        <li className="nav-item"><router-link to="/category/name-of-category" className="nav-link">Importados</router-link></li>
        <li className="nav-item"><router-link to="/category/name-of-category" className="nav-link">Alimentos</router-link></li>
        <li className="nav-item"><router-link to="/category/name-of-category" className="nav-link">Serviços</router-link></li>
      </ul>
      <ul v-if="detect.isXl" className="navbar-nav ml-auto">
        <li className="nav-item"><a href="/" className="nav-link">Minha Conta</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
