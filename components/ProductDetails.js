import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '../routes'
import theme from '../layout/theme'
import { toFloat, floatToReal, StringToReal, stringToDesconto } from '../utils/money'


function parcelado(number) {
  const float = toFloat(number)

  let currentParcel = 0
  let currentAmount = 0
  const limitSemJuros = 3
  const minimoParcela = 5

  if (float < minimoParcela) {
    return <ParcelBox parcel={currentParcel} amount={floatToReal(float)} />
  }

  for (let i = 1; i <= limitSemJuros; i += 1) {
    const current = float / i
    if (current < minimoParcela) {
      break
    }
    currentParcel = i
    currentAmount = current
  }

  return <ParcelBox parcel={currentParcel} amount={floatToReal(currentAmount)} />
}


const productComplement = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  span+span {
    margin-left: 6px
  }

  a {
    font-size: 12px;
    margin-left: 10px
  }

  @media(min-width: ${theme.minLg}) {
    font-size: 18px;
  }
`

const productComplementCurrent = styled.span``
const productComplementAmount = styled.span`
  margin-left: 0;
`

const ParcelBox = ({ parcel, amount }) => (
  <productComplement>
    <span>ou {parcel}x de</span>
    <productComplementCurrent>R$</productComplementCurrent>
    <productComplementAmount>{amount}</productComplementAmount>
    <span>Sem Juros</span>
  </productComplement>
)

ParcelBox.propTypes = {
  parcel: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
}

const ProductDetailBox = styled.div`
  background: white;
  padding: 0 15px 20px;
`
const ProductTitle = styled.h1`
  font-size: 28px;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 30px;
`
const ProductHeader = styled.p`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid ${theme.gray400};
  padding-bottom: 10px;

  & > span {
    padding-right: 30px ;
    padding-bottom: 5px;
  }
`
const ProductSku = styled.span`
  i {
    color: ${theme.colorSecond};
  }
  span {
    padding-left: 5px;
  }
`
const ProductTags = styled.span`
  i {
    color: ${theme.colorSecond};
    margin-right: 5px;
  }
`
const ProductBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media(min-width: ${theme.minMd}) {
    flex-direction: row;
  }

  p {
    margin-bottom: 0;
  }
`
const ProductPriceCol = styled.div`
  margin-bottom: 15px;
`

const BtnFavorite = styled.button`
  font-size: 2.00rem;
  padding: 0.35rem 0.9rem;
`

const ProducPrice = styled.p`
`

const ProducText = styled.span`
  color: ${theme.gray700};
  font-size: 22px;
`

const ProducCurrency = styled.span`
  font-size: 22px;
  margin-left: 5px;
  margin-right: 5px;
  color: ${theme.colorPrimary};
  font-weight: 600;
`

const ProducAmount = styled.span`
  font-size: 50px;
  color: ${theme.colorPrimary};
  font-weight: 600;
`

const ProductPriceBoleto = styled.p`
  background: ${theme.gray300};
  margin-bottom: 0;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  margin: 0 -15px 15px;

  @media(min-width: ${theme.minSm}) {
    font-size: 18px;
    margin-left: 0;
    margin-right: 0;
  }
`

const ProductPriceBoletoCurrency = styled.span``
const ProductPriceBoletoAmount = styled.span`
  font-size: 26px;
  color: ${theme.colorPrimary};
`
const ProductPriceBoletoText = styled.span`
  margin: 10px;
`

const ProductMore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media(min-width: ${theme.minSm}) {
    flex-direction: row;
  }
`

const ProductCorreioCalc = styled.div`
  display: flex;
  align-items: end;
  padding: 15px 0;
  margin-bottom: 20px;
  flex-direction: column;

  i {
    color: ${theme.colorPrimary};
    font-size: 20px;
    margin-right: 20px;
  }
  span {
    flex: 1;
  }
  & > sProductMorepan {
    margin-bottom: 15px
  }
`

const InputGroup = styled.div`
  max-width: 290px;
`

const ProductDetail = ({ product, bredcrumbs, addProductCart }) => (
  <ProductDetailBox>
    <ProductTitle>{product.PS_PRODUTO}</ProductTitle>
    <ProductHeader>
      <ProductSku>
        <i className="ion-ios-grid-view-outline" />
        <span>{product.PS_ID_PRODUTO}</span>
      </ProductSku>
      <ProductTags>
        <i className="ion-ios-pricetag-outline" />
        <Link route={bredcrumbs[2].route}><a>{bredcrumbs[2].title}</a></Link>
      </ProductTags>
    </ProductHeader>
    <p>{product.PS_DESCRICAO_VENDA}</p>
    <ProductBlock>
      <ProductPriceCol>
        <ProducPrice>
          <ProducText>Por</ProducText>
          <ProducCurrency>R$</ProducCurrency>
          <ProducAmount>{StringToReal(product.PS_VALOR_DE_VENDA)}</ProducAmount>
        </ProducPrice>
        {parcelado(product.PS_VL_VENDA_CCCREDITO3X)}
      </ProductPriceCol>
      <div>
        <div>
          <button className="btn btn-lg btn-primary btn-buy" onClick={() => addProductCart(product.PS_ID_PRODUTO)}> Comprar</button>
          <BtnFavorite className="btn btn-lg btn-danger btn-favorite">
            <i className="ion-ios-heart" />
          </BtnFavorite>
        </div>
      </div>
    </ProductBlock>
    <ProductPriceBoleto>
      <ProductPriceBoletoCurrency>R$</ProductPriceBoletoCurrency>
      <ProductPriceBoletoAmount>{stringToDesconto(product.PS_VALOR_DE_VENDA, 6)}</ProductPriceBoletoAmount>
      <ProductPriceBoletoText>7% de Desconco no Boleto ou Transferencia</ProductPriceBoletoText>
    </ProductPriceBoleto>
    <ProductMore>
      <ProductCorreioCalc>
        <span>
          <i className="ion-ios-location" />
          <span>Digite seu CEP para calcular o frete</span>
        </span>
        <InputGroup className="input-group">
          <input type="text" className="form-control" placeholder="00000-000" />
          <span className="input-group-btn">
            <button className="btn btn-primary">Calcular</button>
          </span>
        </InputGroup>
      </ProductCorreioCalc>
      <div>
        <button className="btn btn-default">Achou preço melhor?</button>
      </div>
    </ProductMore>
  </ProductDetailBox>
)

export default ProductDetail
