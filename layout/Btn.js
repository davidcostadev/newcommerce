import styled from 'styled-components'


export const Btn = styled.table`
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
  transition: background-color .15s ease-in-out,
    border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export const BtnPrimary = styled.button`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
`


export default Btn
