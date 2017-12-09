import React from 'react'
import styled from 'styled-components'
import theme from '../layout/theme'
import { Container } from '../layout/Header'
import { Link } from '../layout/Html'

const CopyWrapper = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid ${theme.gray700};
  font-size: 14px;

  & ${Container} {
    display: flex;
    justify-content: space-between;
  }
`


const Copy = () => (
  <CopyWrapper>
    <Container>
      <div>
        2017 Todos os Direitos Reservados
      </div>
      <div>
        <Link href="#">newCommerce</Link> Os produtos que você curte e o melhor serviço da internet.
      </div>
      <div>
        Desenvolvidor por<Link href="#"> davidcosta.com.br</Link>
      </div>
    </Container>
  </CopyWrapper>
)

export default Copy
