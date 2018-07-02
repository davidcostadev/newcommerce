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
// import ButtonCart from '../components/ButtonCart'
import { Container } from '../layout/Pages'
import { setAuthentication } from '../flux/user/actions'
import SubTitle from './page/Subtitle'
// import ShowCart from './permissions/ShowCart'
// import ShowToGuest from './permissions/ShowToGuest'
// import ShowToUser from './permissions/ShowToUser'
import {
  HeaderPageOne,
  Header,
  Brand,
  ColSearch,
  ColSearchMobile,
  // Menu,
  // MenuItem,
  // MenuLink,
  // MenuButton,
} from '../layout/Header'
import Logo from '../layout/Logo'
// import BtnNavigation from './ButtonNavigation'

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

    const { query } = this.props
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
  // Logout: PropTypes.func.isRequired,
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
