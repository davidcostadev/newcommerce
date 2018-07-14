import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../layout/theme'
import { floatToReal } from '../utils/money'
import ButtonToStore from './product/ButtonToStore'
import { contentEscape } from './BlockInfo'

const ProductComplement = styled.p`
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

const ProductComplementCurrent = styled.span``
const ProductComplementAmount = styled.span`
  margin-left: 0;
`

const ParcelBox = ({ parcel, amount }) => (
  <ProductComplement>
    <span>ou {parcel}x de</span>
    <ProductComplementCurrent>R$</ProductComplementCurrent>
    <ProductComplementAmount>{amount}</ProductComplementAmount>
  </ProductComplement>
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
// const ProductTags = styled.span`
//   i {
//     color: ${theme.colorSecond};
//     margin-right: 5px;
//   }
// `
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

// const ProductPriceBoleto = styled.p`
//   background: ${theme.gray300};
//   margin-bottom: 0;
//   font-size: 12px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px 15px;
//   margin: 0 -15px 15px;

//   @media(min-width: ${theme.minSm}) {
//     font-size: 18px;
//     margin-left: 0;
//     margin-right: 0;
//   }
// `

// const ProductPriceBoletoCurrency = styled.span``
// const ProductPriceBoletoAmount = styled.span`
//   font-size: 26px;
//   color: ${theme.colorPrimary};
// `
// const ProductPriceBoletoText = styled.span`
//   margin: 10px;
// `

// const ProductMore = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;

//   @media(min-width: ${theme.minSm}) {
//     flex-direction: row;
//   }
// `

// const ProductCorreioCalc = styled.div`
//   display: flex;
//   align-items: end;
//   padding: 15px 0;
//   margin-bottom: 20px;
//   flex-direction: column;

//   i {
//     color: ${theme.colorPrimary};
//     font-size: 20px;
//     margin-right: 20px;
//   }
//   span {
//     flex: 1;
//   }
//   & > sProductMorepan {
//     margin-bottom: 15px
//   }
// `

// const InputGroup = styled.div`
//   max-width: 290px;
// `

const ProductDetail = ({ product, content }) => (
  <ProductDetailBox>
    <ProductTitle>{product.name}</ProductTitle>
    <ProductHeader>
      <ProductSku>
        <i className="ion-ios-grid-view-outline" />
        <span>{product.idOffer}</span>
      </ProductSku>
      {/* <ProductTags>
        <i className="ion-ios-pricetag-outline" />
        <Link route={bredcrumbs[2].route}><a>{bredcrumbs[2].title}</a></Link>
      </ProductTags> */}
    </ProductHeader>
    <div dangerouslySetInnerHTML={contentEscape(content.call1)} />
    <ProductBlock>
      <ProductPriceCol>
        <ProducPrice>
          <ProducText>Por</ProducText>
          <ProducCurrency>R$</ProducCurrency>
          <ProducAmount>{floatToReal(product.regularPriceReal)}</ProducAmount>
        </ProducPrice>
      </ProductPriceCol>

      <div>
        <ButtonToStore
          to={product.urlAffiliate}
        />
      </div>
    </ProductBlock>
  </ProductDetailBox>
)

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired,
}

export default ProductDetail
