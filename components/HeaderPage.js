import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Link } from '../routes'
import SearchForm from './SearchForm'
import CategoriasContainer from '../containers/Categorias'
import ButtonCart from '../components/ButtonCart'
import { Container } from '../layout/Pages'

import {
  HeaderPageOne,
  Header,
  Brand,
  BrandImage,
  ColSearch,
  Menu,
  MenuItem,
  MenuLink,
  MenuButton,
} from '../layout/Header'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


const HeaderPage = ({ query }) => (
  <HeaderPageOne>
    <Header className="navbar-top">
      <Container>
        <div className="row align-items-center">
          <Brand className="col col-md-4">
            <Link route="/">
              <a>
                <BrandImage
                  onlyDesktop
                  src="/static/img/logo-atacadoribeirao.svg"
                  alt="Atacado Ribeirão"
                />
                <BrandImage
                  onlyMobile
                  src="/static/img/logo-atacadoribeirao-white.svg"
                  alt="Atacado Ribeirão"
                />
              </a>
            </Link>
          </Brand>
          <ColSearch className="col">
            <SearchForm query={query} />
          </ColSearch>
          <div className="col col-md-8 col-lg-3">
            <Menu right>
              <MenuItem onlyDesktop>
                <Link route="/dashboard/orders">
                  <MenuLink>Meus Pedidos</MenuLink>
                </Link>
              </MenuItem>
              <MenuItem onlyMobile>
                <MenuButton>
                  <i className="ion-ios-search" />
                </MenuButton>
              </MenuItem>
              <MenuItem onlyDesktop>
                <ButtonCart />
              </MenuItem>
              <MenuItem onlyMobile>
                <MenuButton>
                  <i className="ion-navicon" />
                </MenuButton>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Container>
    </Header>
    <CategoriasContainer />
  </HeaderPageOne>
)

HeaderPage.defaultProps = {
  query: '',
}

HeaderPage.propTypes = {
  query: PropTypes.string,
}

export default HeaderPage
