import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../layout/theme'

const contentEscape = content => ({
  __html: content,
})

const BlockInfoBlock = styled.div`
  background-color: ${theme.white};
  margin-top: 20px;
  font-size: 18px;
`

const BlockInfoHeader = styled.h2`
  color: ${theme.gray600};
  border-bottom: 1px solid ${theme.gray200};
  font-size: 22px;
  padding: 10px 60px;
  margin-bottom: 0;
`

const BlockInfoContent = styled.div`
  padding: 20px 60px;
`


const BlockInfo = ({ content }) => (
  <BlockInfoBlock>
    <BlockInfoHeader>Informações do Produto</BlockInfoHeader>
    <BlockInfoContent dangerouslySetInnerHTML={contentEscape(content)} />
  </BlockInfoBlock>
)

BlockInfo.propTypes = {
  content: PropTypes.string.isRequired,
}

export default BlockInfo
