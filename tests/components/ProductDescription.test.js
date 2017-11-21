/* eslint no-undef: "off" */
import React from 'react'
import renderer from 'react-test-renderer'
import ProductDescription from '../../components/ProductDescription'

const product = {
  PS_ID_PRODUTO: '45093',
  PS_FEEDBACK: 'As informações foram CARREGADAS com sucesso',
  PS_ID_ERRO: '0',
  PS_PRODUTO: 'Gabinete Slim DT-100BK C/Fonte PS-200 FX C3TECH S/Cabo',
  PS_FABRICANTE: 'NONE',
  PS_MARCA: 'NONE',
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
  PS_ID_FAMILIA: '187',
  PS_ID_GRUPO: '217',
  PS_ID_SUBGRUPO: '2413',
  PS_FAMILIA: 'Informática',
  PS_GRUPO: 'Gabinete',
  PS_SUBGRUPO: 'Gamer',
  PS_PESO_GR: '3000',
  PS_COMPRIMENTO_MM: '0',
  PS_LARGURA_MM: '0',
  PS_ALTURA_MM: '0',
  PS_DIAMETRO_MM: '1',
  PS_ID_FORMATO_ENVIO: '0',
  PS_FLAG_IMPORTADO: '2',
  PS_FLAG_PROMOCAO: '0',
  PS_FLAG_DISPONIBILIDADE: '1',
  PS_FLAG_LANCAMENTO: '1',
  PS_IMPORTADO: 'NÃO',
  PS_PROMOCAO: '',
  PS_LANCAMENTO: '',
  PS_UNIDADE: 'PC',
  PS_QT_UNITVENDA: '1',
  PS_TEMPODEGARANTIA_MES: '12',
  PS_FLAG_SLIDE: '0',
  PS_FLAG_DESTAQUE: '1',
  PS_GARANTIA: '12 MESES',
  PS_PATH_PAGE: 'gabinete-slim-dt-100bk-c-fonte-ps-200-fx-c3tech',
  PS_ID_IMAGEM: '193420',
  PS_PATH_IMAGEM_400: 'http://www.winerp.com.br/images/mundial/products/gabinete-slim-dt-100bk-c-fonte-ps-200-fx-c3tech---45093-400-193420.jpg',
  PS_PATH_IMAGEM_ZOOM: 'http://www.winerp.com.br/images/mundial/products/gabinete-slim-dt-100bk-c-fonte-ps-200-fx-c3tech---45093-2000-193420.jpg',
  PS_IMAGEM_TXT_ALT: '',
  PS_IMAGEM_TXT_TITLE: '',
  PS_PATH_VIDEO_WEB1: '',
  PS_PATH_VIDEO_WEB2: '',
  PS_PATH_VIDEO_LOCAL: '',
  PS_DESCRICAO_VENDA: 'Característica:\r\n\r\nMarca: C3 Tech\r\nModelo: DT-100BK',
  PS_DETALHES_PRODUTO: '<p>Especifica&ccedil;&otilde;es T&eacute;cnicas<br />Caracter&iacute;sticas:<br />Gabinete em formato SLIM<br />Fonte SFX 200W inclusa<br />1 entrada USB 2.0<br />1 entrada USB 3.0<br />Entrada de &Aacute;udio HD<br />Suporta Placa Micro ATX<br />Cabo de For&ccedil;a n&atilde;o incluso</p>\r\n<p>Outros<br />Descri&ccedil;&atilde;o: GAB DESKTOP DT-100BK C/FTE PS-200SFX C3T<br />Altura: 30,00 cm<br />Largura: 10,00 cm<br />Comprimento: 41,50 cm<br />Peso: 2,98 g</p>',
}

describe('Component <ProductDescription />', () => {
  it('<ProductDescription />', () => {
    const tree = renderer.create((
      <ProductDescription
        product={product}
      />
    )).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
