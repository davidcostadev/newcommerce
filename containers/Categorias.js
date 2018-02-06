import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from '../components/Navbar'

const CategoriasContainer = ({ categories }) => {
  if (categories.length === 0) {
    return <div>vazio</div>
  }

  return <NavBar categories={categories} />
}

CategoriasContainer.propTypes = {
  categories: PropTypes.array.isRequired,
}


const mapState = state => state

export default connect(mapState)(CategoriasContainer)
