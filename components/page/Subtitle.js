import React from 'react'
import {
  DescriptionLogo,
} from '../../layout/Header'

const SubTitle = () => {
  if (!process.env.BUSSNESS_LOGO_DESCRIPTION.length) {
    return null
  }

  return (
    <DescriptionLogo>{process.env.BUSSNESS_LOGO_DESCRIPTION}</DescriptionLogo>
  )
}

export default SubTitle
