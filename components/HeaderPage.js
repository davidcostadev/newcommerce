import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'
import styled from 'styled-components'
import theme from '../layout/theme'
import { Link } from '../routes'
import SearchForm from './SearchForm'
import CategoriasContainer from '../containers/Categorias'
import ButtonCart from '../components/ButtonCart'
import { Container } from '../layout/Pages'
import { setAuthentication } from '../flux/user/actions'

import {
  HeaderPageOne,
  Header,
  Brand,
  ColSearch,
  Menu,
  MenuItem,
  MenuLink,
  MenuButton,
} from '../layout/Header'
import Logo from '../layout/Logo'
import BtnNavigation from './ButtonNavigation'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const DescriptionLogo = styled.p`
  margin-bottom: 0;
  color: ${theme.gray700};

  @media(max-width: ${theme.maxMd}) {
    display: none;
  }
`

const SubTitle = () => {
  if (!process.env.BUSSNESS_LOGO_DESCRIPTION.length) {
    return null
  }

  return (
    <DescriptionLogo>{process.env.BUSSNESS_LOGO_DESCRIPTION}</DescriptionLogo>
  )
}

const HeaderPage = ({ query, authentication, Logout }) => (
  <HeaderPageOne>
    <Header className="navbar-top">
      <Container>
        <div className="row align-items-center">
          <Brand className="col col-md-4">
            <Link route="/">
              <a>
                <Logo />
              </a>
            </Link>
            <SubTitle />
          </Brand>
          <ColSearch className="col">
            <SearchForm query={query} />
          </ColSearch>
          <div className="col col-md-8 col-lg-3">
            <Menu right>
              {
                process.env.BUSSNESS_ENABLE_CART === 'true' ? (
                  <MenuItem onlyDesktop>
                    <Link route="/dashboard/orders">
                      <MenuLink>Meus Pedidos</MenuLink>
                    </Link>
                  </MenuItem>
                ) : ''
              }
              <MenuItem onlyDesktop>
                {
                  authentication ? (
                    <MenuLink onClick={() => Logout(false)}>Sair</MenuLink>
                  ) : (
                    <Link route="/login">
                      <MenuLink>Entrar</MenuLink>
                    </Link>
                  )
                }
              </MenuItem>
              <MenuItem onlyMobile>
                <MenuButton>
                  <i className="ion-ios-search" />
                </MenuButton>
              </MenuItem>
              {
                process.env.BUSSNESS_ENABLE_CART === 'true' ? (
                  <MenuItem onlyDesktop>
                    <ButtonCart />
                  </MenuItem>
                ) : ''
              }
              <MenuItem onlyMobile>
                <BtnNavigation />
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
  authentication: PropTypes.bool.isRequired,
  Logout: PropTypes.func.isRequired,
}

const mapStateToProps = ({ authentication }) => ({
  authentication,
})

const mapDispatchToProps = dispatch => ({
  Logout(payload) {
    dispatch(setAuthentication(payload))
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage)
