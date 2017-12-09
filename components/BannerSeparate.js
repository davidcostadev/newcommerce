import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import theme from '../layout/theme'
import styles from '../assets/scss/App.scss'


const BannerSeparateGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const BannerSeparateCol = styled.div`
    flex: 1 1 auto;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    flex-direction: column;
  `
const BannerSeparateRow = styled.div`
    flex: 1 1 auto;
    display: flex;
    width: 100%;
    overflow: hidden;
`
const BannerText1 = styled.span`
  flex-basis: auto;
  color: ${theme.colorPrimary};
  font-size: 18px;
  margin-bottom: 20px;
`
const BannerText2 = styled.span`
  flex-basis: auto;
  color: ${theme.black};
  font-size: 35px;
  margin-bottom: 20px;
`
const BannerBtn = styled.a`
  flex-basis: auto;
  background-color: ${theme.colorPrimary};
  padding: 8px 12px;
  font-size: 18px;
  color: ${theme.white} !important;
  margin-bottom: 20px;
  border-width: 0;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${theme.colorPrimary};
  }
`

const BannerToCenter = styled.div`
  align-items: center;
  justify-content: center;
  ${BannerText1},
  ${BannerText2},
  ${BannerBtn} {
    text-align: center;
  }
`
const BannerToRight = styled.div`
  align-items: flex-end;
  ${BannerText1},
  ${BannerText2},
  ${BannerBtn} {
    text-align: right;
  }
`
const BannerToLeft = styled.div`
  align-items: flex-start;
  ${BannerText1},
  ${BannerText2},
  ${BannerBtn} {
    text-align: left;
  }
`

const BannerSeparateItem = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  padding: 40px 60px;
  transition: transform 0.4s ease;

  ${BannerText1},
  ${BannerText2},
  ${BannerBtn} {
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: scale(1.1);

    ${BannerText1},
    ${BannerText2},
    ${BannerBtn} {
      transform: scale(1.05)
    }
  }

  ${props => props.center ? BannerToCenter : ''}
  ${props => props.right ? BannerToRight : ''}
  ${props => props.left ? BannerToLeft : ''}
`


const BannerSeparate = () => (
  <BannerSeparateGrid>
    <BannerSeparateCol>
      <BannerSeparateRow>
        <BannerSeparateItem right style={{ backgroundImage: 'url(\'/static/img/camera.jpg\')' }}>
          <BannerText1>Limpador de Tela</BannerText1>
          <BannerText2>R$ 17,90</BannerText2>
          <Link href="/product">
            <div>
              <BannerBtn>Ver Detalhes</BannerBtn>
            </div>
          </Link>
        </BannerSeparateItem>
      </BannerSeparateRow>
    </BannerSeparateCol>
    <BannerSeparateCol>
      <BannerSeparateRow>
        <BannerSeparateItem right style={{ backgroundImage: 'url(\'/static/img/mouse.jpg\')' }}>
          <BannerText1>Mouse Mac</BannerText1>
          <BannerText2>R$ 227,90</BannerText2>
          <Link href="/product">
            <div>
              <BannerBtn>Ver Detalhes</BannerBtn>
            </div>
          </Link>
        </BannerSeparateItem>
      </BannerSeparateRow>
    </BannerSeparateCol>
  </BannerSeparateGrid>
)

export default BannerSeparate
