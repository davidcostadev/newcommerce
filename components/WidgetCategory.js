import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../layout/theme'

export const LinkItem = ({ item }) => (
  <li>
    <a href={item.path}>{item.title}</a>
  </li>
)

LinkItem.propTypes = {
  item: PropTypes.object.isRequired,
}


const Widget = styled.div`
  &+& {
    margin-top: 30px;
  }
`
const WidgetTitle = styled.h3`
  font-size: 14px;
  text-align: center;
  padding: 5px 0;
  margin-bottom: 0;
  background: ${theme.gray300};
  color: ${theme.gray500}
  `
// const WidgetContent = styled.div`
//   background: ${theme.white};
//   padding: 15px;
// `
const WidgetCategories = styled.ul`
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    display: flex;
  }
  a {
    flex: 1;
    padding: 8px 16px;
    background-color: ${theme.white};

    &:hover {
      background-color: ${theme.colorPrimary};
      color: ${theme.white};
    }

    &:active {
      background-color: ${theme.colorPrimary};
      color: ${theme.white};
    }
  }
`


export const WidgetCategory = ({ title, menu }) => (
  <Widget>
    <WidgetTitle>{title}</WidgetTitle>
    <WidgetCategories>
      {menu.map(item => (
        <LinkItem key={item.path} item={item} />
      ))}
    </WidgetCategories>
  </Widget>
)

WidgetCategory.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
}

export default WidgetCategory
