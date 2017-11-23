import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import themes from './theme'


const BoxSquare = styled.picture`
  background: red;
  display: flex;
  flex-grow: 10;
  border-bottom: 3px solid ${themes.main};

  &:after {
    content: "";
    display: block;
    padding-bottom: 75%;
  }
`

const BoxSquareInner = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  flex-grow: 10;
`

const SquareBox = ({ image }) => (
  <BoxSquare>
    <BoxSquareInner image={image} />
  </BoxSquare>
)


SquareBox.propTypes = {
  image: PropTypes.string.isRequired,
}

export default SquareBox
