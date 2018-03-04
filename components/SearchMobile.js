import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SearchFrom from '../components/SearchForm'
import * as Search from '../layout/SearchModal'

const SearchMobile = ({ showSearchMobile }) => (
  <Search.Modal hide={showSearchMobile}>
    <SearchFrom />
  </Search.Modal>
)


SearchMobile.propTypes = {
  showSearchMobile: PropTypes.bool.isRequired,
}


export default connect(state => state)(SearchMobile)
