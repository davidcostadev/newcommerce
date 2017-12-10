import styled from 'styled-components'
import theme from './theme'

export const ProductItem = styled.div`
  flex: 1 1 calc(100% - 10px);
  max-width: calc(100% - 10px);
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: background-color 0.4s ease-in-out;
  margin-left: 5px;
  margin-right: 5px;
  &:hover {
    background-color: white;
  }

  @media (min-width: 540px) {
    flex: 1 1 calc(50% - 10px);
    max-width: calc(50% - 10px);
  }
  @media (min-width: 767px) {
    flex: 1 1 calc(25% - 10px);
    max-width: calc(25% - 10px);
  }

`


export const ProductTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  font-size: 14px;
`
export const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px 12px;
  color: ${theme.colorSecond};
  align-items: baseline;
`
export const ProductCurrency = styled.span`
  font-size: 16px;
  margin-right: 5px;
`
export const ProductAmount = styled.span`
  font-size: 30px;
`
export const ProductButtons = styled.div`
  display: flex;
`
const Btn = `
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
`

export const ProductBtnDetails = styled.a`
  ${Btn}
  flex: 1 1 auto;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
  background-color: ${theme.gray300};
  color: ${theme.black};
  &:hover {
    background-color: ${theme.gray400};
  }
  &:active {
    background-color: ${theme.gray600};
    color: ${theme.white};
  }
`
export const ProductBtnBuy = styled.button`
  ${Btn}
  flex: 1 1 auto;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
  background-color: ${theme.gray300};
  color: ${theme.colorPrimary};

  &:hover {
    background-color: ${theme.colorPrimary}
    color: ${theme.white};
  }
  &:active {
    background-color: ${theme.colorPrimary}
    color: ${theme.white};
  }
`
