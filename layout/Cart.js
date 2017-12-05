import styled from 'styled-components'
import theme from '../layout/theme'

export const Page = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
`

export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`


export const CheckoutRow = styled.div`
  display: flex;
  justify-content: space-between;

  .card {
    width: 100%;
    max-width: 250px;
  }
  .card-text {
    display: flex;
    justify-content: space-between;
  }
  button {
    width: 100%;
  }

`

export const CalcShipping = styled.div`
  background: white;
  border: 1px solid ${theme.border};
  padding: 15px 20px;
  border-radius: 4px;
  max-width: 500px;

`
