import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'
// import styled from 'styled-components'
// import theme from '../layout/theme'
import { Link } from '../routes'
import SearchForm from './SearchForm'
import CategoriasContainer from '../containers/Categorias'
import ButtonCart from '../components/ButtonCart'
import { Container } from '../layout/Pages'
import { setAuthentication } from '../flux/user/actions'
import SubTitle from './page/Subtitle'
import ShowCart from './permissions/ShowCart'
import ShowToGuest from './permissions/ShowToGuest'
import ShowToUser from './permissions/ShowToUser'
import {
  HeaderPageOne,
  Header,
  Brand,
  ColSearch,
  ColSearchMobile,
  Menu,
  MenuItem,
  MenuLink,
  MenuButton,
} from '../layout/Header'
import Logo from '../layout/Logo'
import BtnNavigation from './ButtonNavigation'

Router.onRouteChangeStart = () => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


class HeaderPage extends React.Component {
  constructor(props) {
    super(props)

    this.toggleSearch = this.toggleSearch.bind(this)

    this.state = {
      openSearch: false,
    }
  }

  toggleSearch() {
    this.setState({ openSearch: !this.state.openSearch })
  }
  /* eslint no-debugger: "off" */
  render() {
    // debugger

    const { query, Logout } = this.props
    // const { query } = this.props
    const { openSearch } = this.state

    return (
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
                    <ShowToGuest>
                      <Link route="login">
                        <MenuLink>Entrar</MenuLink>
                      </Link>
                      <Link route="signup">
                        <MenuLink>Cadastrar</MenuLink>
                      </Link>
                    </ShowToGuest>
                    <ShowToUser>
                      <MenuLink onClick={() => Logout(false)}>Sair</MenuLink>
                      <Link route="dashboard">
                        <MenuLink>Meus Pedidos</MenuLink>
                      </Link>
                    </ShowToUser>
                  </MenuItem>
                  <MenuItem onlyMobile>
                    <ShowToGuest>
                      <Link route="/login">
                        <MenuButton>
                          <i className="ion-ios-person" />
                        </MenuButton>
                      </Link>
                    </ShowToGuest>
                    <ShowToUser>
                      <MenuLink onClick={() => Logout(false)}>
                        <i className="ion-ios-upload-outline" />
                      </MenuLink>
                      <Link route="dashboard">
                        <MenuButton>
                          <i className="ion-ios-person" />
                        </MenuButton>
                      </Link>
                    </ShowToUser>
                  </MenuItem>
                  <MenuItem onlyMobile>
                    <MenuButton onClick={this.toggleSearch}>
                      <i className={`ion-ios-${openSearch ? 'close-empty' : 'search'}`} />
                    </MenuButton>
                  </MenuItem>
                  <ShowCart>
                    <MenuItem onlyDesktop>
                      <ButtonCart />
                    </MenuItem>
                  </ShowCart>
                  <MenuItem onlyMobile>
                    <BtnNavigation />
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </Container>
        </Header>
        <ColSearchMobile open={openSearch}>
          <SearchForm query={query} />
        </ColSearchMobile>
        <CategoriasContainer />
      </HeaderPageOne >
    )
  }
}

HeaderPage.defaultProps = {
  query: '',
}

HeaderPage.propTypes = {
  query: PropTypes.string,
  // authentication: PropTypes.bool.isRequired,
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
