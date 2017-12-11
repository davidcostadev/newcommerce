import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.div`
  background-image: url('https://images.unsplash.com/photo-1497171156029-51dfc973e5f9?dpr=1&auto=format&fit=crop&w=1500&q=60&cs=tinysrgb');
  background-size: cover;
  background-position: center;
  padding: 30px 60px;
  margin-bottom: 20px;

`
const Title = styled.h1`
  color: rgb(0, 255, 255);
  mix-blend-mode: difference;
`

const TitleSection = ({ title }) => (
  <Section>
    <Title>{title}</Title>
  </Section>
)

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TitleSection
