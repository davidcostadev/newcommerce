import styled from 'styled-components'
import theme from './theme'

export const SiteMapTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.gray700};
`

export const SiteMap = styled.div`
  a {
    color: ${theme.colorSecond} !important;
    &:hover {
      color: ${theme.colorSecond} !important;
    }
    &:active {
      color: ${theme.colorSecond} !important;
    }
  }
`

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const SocialIcon = styled.div`
  color: ${theme.gray100};
  border: 1px solid ${theme.gray100};
  border-radius: 50%;
  width: 50px;
  text-align: center;

  &:hover {
    border-color: ${theme.colorPrimary};
    background-color: ${theme.colorPrimary};
    color: $color-gray900;
  }
  &:active {
    border-color: ${theme.colorPrimary};
    background-color: ${theme.colorPrimary};
    color: $color-gray900;
  }

  i {
    font-size: 32px;
  }
`
