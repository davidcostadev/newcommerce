import styled from 'styled-components'

export const Thumb = styled.picture`
  flex: 1;
  max-width: 100px;
  cursor: pointer;

  ${props => (props.featured ? `
    border: 1px solid orange;
  ` : '')}
`

export const Box = styled.div`
  background-color: white;
  margin-bottom: 20px;
  img {
    width: 100%;
    max-width: 400px;
  }
`

export const Feature = styled.picture`
  display: block;
  text-align: center;
`
export const Thumbs = styled.div`
 display: flex;
`
