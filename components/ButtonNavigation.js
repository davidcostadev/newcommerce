import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import PropsTypes from 'prop-types'
import { toggleMenu } from '../flux/config/configActions'

import {
  MenuButton,
} from '../layout/Header'

const ButtonNavigation = ({ menuMobile, toogleMenu }) => {
  const classList = {
    'ion-navicon': !menuMobile,
    'ion-ios-close-empty': menuMobile,
  }

  return (
    <MenuButton onClick={toogleMenu}>
      <i className={classNames(classList)} />
    </MenuButton>
  )
}

ButtonNavigation.propTypes = {
  menuMobile: PropsTypes.bool.isRequired,
  toogleMenu: PropsTypes.func.isRequired,
}

const mapState = state => state

const mapDispatchToProps = dispatch => ({
  toogleMenu: () => dispatch(toggleMenu()),
})

export default connect(mapState, mapDispatchToProps)(ButtonNavigation)
