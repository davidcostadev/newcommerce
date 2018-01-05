import styled from 'styled-components'
import theme from './theme'


const Column4 = (media) => {
  switch (media) {
    case 992:
    case 767:
      return `
      flex: 1 1 calc(25% - 10px);
      max-width: calc(25% - 10px);
      `
    case 540:
    default:
      return `
        flex: 1 1 calc(50% - 10px);
        max-width: calc(50% - 10px);
      `
  }
}
const Column3 = (media) => {
  switch (media) {
    case 992:
      return `
      flex: 1 1 calc(33.3333% - 10px);
      max-width: calc(33.3333% - 10px);
      `
    case 767:
      return `
      flex: 1 1 calc(50% - 10px);
      max-width: calc(50% - 10px);
      `
    case 540:
    default:
      return `
        flex: 1 1 calc(50% - 10px);
        max-width: calc(50% - 10px);
      `
  }
}

const Columns = (number = 4, media) => {
  switch (number) {
    case 3:
      return Column3(media)
    case 4:
    default:
      return Column4(media)
  }
}


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
    ${props => Columns(props.columns, 540)}
  }
  @media (min-width: 767px) {
    ${props => Columns(props.columns, 767)}
  }
  @media (min-width: 992px) {
    ${props => Columns(props.columns, 992)}
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

export const Status = styled.div`
  font-size: 14px;
  text-align: center;

  ${prop => (prop.red ? 'color: red;' : '')}
  ${prop => (prop.green ? 'color: green;' : '')}
`
