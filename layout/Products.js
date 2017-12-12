import styled from 'styled-components'
import theme from '../layout/theme'

export const ProductsSection = styled.div`
  padding-top: 30px;

  &+& {
    border-top: 1px solid ${theme.gray300};
  }
`
export const ProductsSectionTitle = styled.h2`
  color: ${theme.colorSecond};
  font-size: 2.2rem;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 20px;
  margin-bottom: 20px;
`


export const ProductsSectionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-right: -5px;
`
