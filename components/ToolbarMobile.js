import React from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from '../routes'
import * as Toolbar from '../layout/Toolbar'
import ShowToGuest from './permissions/ShowToGuest'
import ShowToUser from './permissions/ShowToUser'
import { toggleSearch } from '../flux/config/configActions'


const ToolbarMobile = ({ onToggleSearch, showSearchMobile }) => (
  <Toolbar.Toolbar>
    <Toolbar.Menu>
      <Link route="/">
        <Toolbar.Item href="/">
          <i className="ion-ios-home" />
        </Toolbar.Item>
      </Link>
      <ShowToGuest>
        <Link route="login">
          <Toolbar.Item href="login">
            <i className="ion-ios-person" />
          </Toolbar.Item>
        </Link>
      </ShowToGuest>
      <ShowToUser>
        <Link route="dashboard">
          <Toolbar.Item href="login">
            Meus Pedidos
          </Toolbar.Item >
        </Link>
      </ShowToUser>
      <Link route="cart">
        <Toolbar.Item href="cart">
          <i className="ion-ios-cart" />
        </Toolbar.Item>
      </Link>
      <Toolbar.Item onClick={onToggleSearch}>
        {
          showSearchMobile ?
          (
            <i className="ion-ios-search" />
          ) : (
            <i className="ion-ios-close-empty" />
          )
        }
      </Toolbar.Item>
      <Link route="categories">
        <Toolbar.Item href="categories">
          <i className="ion-navicon" />
        </Toolbar.Item>
      </Link>
    </Toolbar.Menu>
  </Toolbar.Toolbar>
)

ToolbarMobile.propTypes = {
  onToggleSearch: PropTypes.func.isRequired,
  showSearchMobile: PropTypes.bool.isRequired,
}

const mapDispatchToProps = dispatch => ({
  onToggleSearch: bindActionCreators(toggleSearch, dispatch),
})

export default connect(state => state, mapDispatchToProps)(ToolbarMobile)
