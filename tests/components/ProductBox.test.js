/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import { ParcelBox, ProductBox } from '../../components/ProductBox'

const product = {
  PS_REGISTROS_COUNT: '5027',
  PS_ID_PRODUTO: '45093',
  PS_PRODUTO: 'Gabinete Slim DT-100BK C/Fonte PS-200 FX C3TECH S/Cabo',
  PS_VALOR_DE_VENDA: '284',
  PS_PRECO_SEMDESC: '284',
  PS_VL_VENDA_DESCDINH: '284',
  PS_VL_VENDA_CCDEBITO: '284',
  PS_VL_VENDA_CCREDITO: '284',
  PS_VL_VENDA_CCCREDITO1X: '284',
  PS_VL_VENDA_CCCREDITO3X: '284',
  PS_VL_VENDA_CCCREDITO6X: '314,4',
  PS_VL_VENDA_DESCONTO: '301',
  PS_TX_DESCONTO_PRODUTO: '0',
  PS_TX_DESCONTO_BOLETO: '6',
  PS_TX_DESCONTO_DINHEIRO: '0',
  PS_ESTOQUE_LOJA: '14',
  PS_ESTOQUE_FILIAL: '0',
  PS_ESTOQUE_DEPOSITO: '0',
  PS_ESTOQUE_TOTAL: '14',
  PS_DISPONIBILIDADE: 'Entrega Imediata',
  PS_FAMILIA: 'Informática',
  PS_GRUPO: 'Gabinete',
  PS_SUBGRUPO: 'Gamer',
  PS_ID_FAMILIA: '187',
  PS_ID_GRUPO: '217',
  PS_ID_SUBGRUPO: '2413',
  PS_FLAG_IMPORTADO: '2',
  PS_FLAG_PROMOCAO: '0',
  PS_FLAG_DISPONIBILIDADE: '1',
  PS_FLAG_LANCAMENTO: '1',
  PS_IMPORTADO: 'NÃO',
  PS_PROMOCAO: '',
  PS_LANCAMENTO: '',
  PS_PESO_GR: '3000',
  PS_COMPRIMENTO_MM: '0',
  PS_LARGURA_MM: '0',
  PS_ALTURA_MM: '0',
  PS_DIAMETRO_MM: '1',
  PS_ID_FORMATO_ENVIO: '0',
  PS_FABRICANTE: 'NONE',
  PS_MARCA: 'NONE',
  PS_UNIDADE: 'PC',
  PS_QT_UNITVENDA: '1',
  PS_TEMPODEGARANTIA_MES: '12',
  PS_DESCRICAO_VENDA: 'Característica:\r\n\r\nMarca: C3 Tech\r\nModelo: DT-100BK',
  PS_GARANTIA: '12 MESES',
  PS_ID_IMAGEM: '193420',
  PS_PATH_IMAGEM_150: 'http://www.winerp.com.br/images/mundial/products/gabinete-slim-dt-100bk-c-fonte-ps-200-fx-c3tech---45093-150-193420.jpg',
  PS_PATH_IMAGEM_250: 'http://www.winerp.com.br/images/mundial/products/gabinete-slim-dt-100bk-c-fonte-ps-200-fx-c3tech---45093-250-193420.jpg',
  PS_IMAGEM_TXT_ALT: '',
  PS_IMAGEM_TXT_TITLE: '',
  PS_PATH_PAGE: 'gabinete-slim-dt-100bk-c-fonte-ps-200-fx-c3tech',
  PS_LINK_TITLE: 'Gabinete Slim DT-100BK C/Fonte PS-200 FX C3TECH em Ribeirão Preto',
}

describe('Test File ProductBox', () => {
  it('<ParcelBox />', () => {
    const tree = renderer.create((
      <ParcelBox
        parcel={3}
        amount="35,01"
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('<ProductBox />', () => {
    const tree = renderer.create((
      <ProductBox
        product={product}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
