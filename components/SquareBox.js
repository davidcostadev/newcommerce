import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../layout/theme'


const BoxSquare = styled.picture`
  background: white;
  border-bottom: 3px solid ${theme.colorPrimary};
  flex: 1;
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const BoxSquareInner = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
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
