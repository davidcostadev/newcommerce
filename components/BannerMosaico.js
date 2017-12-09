import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import styles from '../assets/scss/App.scss'
import theme from '../layout/theme'

const BannerMosaicoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const BannerMosaicoCol = styled.div`
  flex: 1 1 100%;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;

  @media(min-width: 768px) {
    flex: 1 1 50%;
    max-width: 50%;
  }
`
const BannerMosaicoRow = styled.div`
  flex: 1 1 auto;
  display: flex;
  width: 100%;
  overflow: hidden;
`

const BannerText1 = styled.div`
  flex-basis: auto;
  color: ${theme.colorPrimary};
  font-size: 18px;
  margin-bottom: 20px;
  transition: transform 0.6s ease;
`
const BannerText2 = styled.div`
  flex-basis: auto;
  color: ${theme.white};
  font-size: 35px;
  margin-bottom: 20px;
  transition: transform 0.6s ease;
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
  transition: transform 0.6s ease;

  &:hover {
    background-color: ${theme.colorPrimary}
  }
`

const BannerToCenter = `
  align-items: center;
  justify-content: center;
  ${BannerText1},
  ${BannerText2},
  ${BannerBtn} {
    text-align: center;
  }
`

const BannerToRight = `
  align-items: flex-end;
  ${BannerText1},
  ${BannerText2},
  ${BannerBtn} {
    text-align: right;
  }
`
const BannerToLeft = `
  align-items: flex-start;
  ${BannerText1},
  ${BannerText2},
  ${BannerBtn} {
    text-align: left;
  }
`

const BannerMosaicoItem = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  padding: 40px 60px;
  transition: transform 0.4s ease;

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


const BannerMosaico = () => (
  <BannerMosaicoGrid>
    <BannerMosaicoCol>
      <BannerMosaicoRow>
        <BannerMosaicoItem center style={{ backgroundImage: 'url(\'/static/img/phone.jpg\')' }}>
          <BannerText1>Celulares</BannerText1>
          <BannerText2>Tecnologia de Ponta</BannerText2>
          <Link href="/product">
            <BannerBtn>Ver Ofertas</BannerBtn>
          </Link>
        </BannerMosaicoItem>
      </BannerMosaicoRow>
    </BannerMosaicoCol>
    <BannerMosaicoCol>
      <BannerMosaicoRow>
        <BannerMosaicoItem left style={{ backgroundImage: 'url(\'/static/img/notebook.jpg\')' }}>
          <BannerText1>Notebook</BannerText1>
          <BannerText2>Ultima Geração</BannerText2>
          <Link href="/product">
            <BannerBtn>Ver Ofertas</BannerBtn>
          </Link>
        </BannerMosaicoItem>
      </BannerMosaicoRow>
      <BannerMosaicoRow>
        <BannerMosaicoItem right style={{ backgroundImage: 'url(\'/static/img/perfume.jpg\')' }}>
          <BannerText1>Perfumes</BannerText1>
          <BannerText2>Melhores Marcas</BannerText2>
          <Link href="/product">
            <BannerBtn>Ver Ofertas</BannerBtn>
          </Link>
        </BannerMosaicoItem>
      </BannerMosaicoRow>
    </BannerMosaicoCol>
  </BannerMosaicoGrid>
)

export default BannerMosaico
