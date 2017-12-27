import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '../routes'
import theme from '../layout/theme'
import { Container } from '../layout/Pages'

const CategoriesFirst = ({ categories }) => {
  const links = []

  for (let i = 0; i < 7; i += 1) {
    links.push({
      id: categories[i].ID_FAMILIA,
      to: `/category/${categories[i].PATH_PAGE_FAMILIA}`,
      // to: `category`,
      // family: categories[i].PATH_PAGE_FAMILIA,
      title: categories[i].FAMILIA,
    })
  }

  return (
    <Menu links={links} />
  )
}

CategoriesFirst.propTypes = {
  categories: PropTypes.array.isRequired,
}

const NavbarNav = styled.ul`
  width: 100%;
  justify-content: space-between;
`

const NavbarNavItem = styled.li`
  text-align: center;
`

const Menu = ({ links }) => (
  <NavbarNav className="navbar-nav">
    {links.map(link => (
      <NavbarNavItem key={link.id} className="nav-item">
        <Link route={link.to}>
          <NavBarLink className={classNames(['nav-link'])} title={link.title}>{link.title}</NavBarLink>
        </Link>
      </NavbarNavItem>
    ))}
  </NavbarNav>
)

Menu.propTypes = {
  links: PropTypes.array.isRequired,
}

const NavbarBlock = styled.nav`
  padding: 0;
  background-color: ${theme.gray200};
`

const NavBarLink = styled.a`
  font-size: 18px;
  text-transform: capitalize;
  transition: all .4s cubic-bezier(0.39, 0.575, 0.565, 1);
  padding: .5rem 1.5rem;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colorPrimary};
    color: ${theme.white} !important;
  }
`

const Navbar = ({ categories }) => (
  <NavbarBlock className={classNames(['navbar', 'navbar-light', 'navbar-toggleable-md', 'bg-faded', 'navbar-expand-lg'])}>
    <Container className="container">
      <CategoriesFirst categories={categories} />
      {/* <ul className="navbar-nav ml-auto onlyDesktopBig">
        <li className="nav-item">
          <Link href="/">
            <NavBarLink className={classNames(['nav-link'])}>Minha Conta</NavBarLink>
          </Link>
        </li>
      </ul> */}
    </Container>
  </NavbarBlock>
)

Navbar.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default Navbar
