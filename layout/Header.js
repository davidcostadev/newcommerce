import styled from 'styled-components'
import theme from './theme'

export const HeaderPageOne = styled.div`
  background-color: white;

  @media(max-width: ${theme.maxMd}) {
    display: none;
  }
`

export const Header = styled.header`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  @media (max-width: 991px) {
    background-color: ${theme.navbarInverse};
    padding-top: 0;
    padding-bottom: 0;
    transition: background-color 0.4s ease;
  }
`


export const Brand = styled.div`
  flex-grow: 2;
  a {
    display: inline-flex;
    &:hover {
      opacity: 0.7
    }
  }
  img {
    max-width: 100%;
    max-height: 24px
  }

  @media (max-width: ${theme.minMd}) {
    svg {
      width: 100%;
    }
  }
`

export const ColSearch = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`

export const ColSearchMobile = styled.div`
  display: none;

  ${props => (props.open ? 'display: block;' : '')}
`


export const OnlyMobile = `
  display: none !important;

  @media (max-width: 991px) {
    display: flex !important;
  }
`

export const OnlyDesktop = `
  display: none !important;

  @media (min-width: 991px) {
    display: flex !important;
  }
`

export const MenuItem = styled.div`
  display: flex;
  align-items: stretch;
  margin-top: 4px;
  margin-bottom: 4px;


  ${props => (props.onlyMobile ? OnlyMobile : '')}
  ${props => (props.onlyDesktop ? OnlyDesktop : '')}
`


export const MenuRight = `
  justify-content: flex-end;

  ${MenuItem}+${MenuItem} {
    margin-left: 4px;
  }
`

const MenuVertical = `
  flex-direction: column;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  display: flex;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;

  ${props => (props.right ? MenuRight : '')}
  ${props => (props.vertical ? MenuVertical : '')}
`

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  color: ${theme.colorPrimary} !important;
  background-color: white;
  border-radius: 3px;
  border-width: 0;
  padding: 0 10px;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${theme.buttonDefault} !important;
    color: green;
  }
  &:active {
    background-color: ${theme.buttonDefaultHover} !important;
  }
  i {
    font-size: 32px;
    vertical-align: middle;
  }
  /* max-md */
  @media (max-width: 991px) {
    background-color: transparent;
    color: white !important;
    transition: background-color 0.4s ease;


    &:focus,
    &:hover {
      background-color: ${theme.linkHoverInverse};
      color: black !important;
    }

    &:active {
      background-color: ${theme.linkActiveInverse};
    }
  }
`

export const MenuButton = MenuLink.withComponent('button')

export const BrandImage = styled.img`
  ${props => (props.onlyMobile ? OnlyMobile : '')}
  ${props => (props.onlyDesktop ? OnlyDesktop : '')}
`

export const DescriptionLogo = styled.p`
  margin-bottom: 0;
  color: ${theme.gray700};

  @media(max-width: ${theme.maxMd}) {
    display: none;
  }
`
