import React from 'react'
import * as Navbar from '../layout/Navbar'
import { Link } from '../routes'
import Logo from '../layout/Logo'

const NavbarMobile = () => (
  <Navbar.Navbar>
    <Link route="/">
      <Navbar.Item href="/">
        <Logo />
      </Navbar.Item>
    </Link>
  </Navbar.Navbar>
)

export default NavbarMobile
