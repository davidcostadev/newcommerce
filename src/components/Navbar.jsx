import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../assets/scss/App.scss';

const CategoriesFirst = ({ categories }) => {
  const links = [];

  for (let i = 0; i < 7; i += 1) {
    links.push({
      to: `/category/${categories[i].PATH_PAGE_FAMILIA}`,
      title: categories[i].FAMILIA
    });
  }

  return (
    <Menu links={links} />
  );
};

CategoriesFirst.propTypes = {
  categories: PropTypes.array.isRequired
};

const Menu = ({ links }) => (
  <ul className="navbar-nav">
    {links.map(link => (
      <li className="nav-item">
        <Link
          to={link.to}
          className={classNames([styles.navLink, 'nav-link'])} title={link.title}>{link.title}</Link>
      </li>
    ))}
  </ul>
);

Menu.propTypes = {
  links: PropTypes.array.isRequired
};

const Navbar = ({ categories }) => (
  <nav className={classNames([styles.navbar, 'navbar', 'navbar-light', 'navbar-toggleable-md', 'bg-faded', 'navbar-expand-lg'])}>
    <div className={`container ${styles.container}`}>
      <CategoriesFirst categories={categories} />
      <ul className="navbar-nav ml-auto onlyDesktopBig">
        <li className="nav-item"><Link to="/" className={classNames([styles.navLink, 'nav-link'])}>Minha Conta</Link></li>
      </ul>
    </div>
  </nav>
);

Navbar.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Navbar;
