import React from 'react'
import { connect } from 'react-redux'
import WidgetCategory from '../components/WidgetCategory'

const organizeSubGroup = (subGroups) => {
  if (subGroups && !subGroups.length) return []

  return subGroups.map(subGroup => ({
    path: `/category/${subGroup.PATH_PAGE_SUBGRUPO}`,
    title: subGroup.SUBGRUPO,
    ...subGroup,
  }))
}

const organizeGroup = (groups) => {
  if (groups && !groups.length) return []

  return groups.map(group => ({
    path: `/category/${group.PATH_PAGE_GRUPO}`,
    title: group.GRUPO,
    children: organizeSubGroup(group.TABLE_SUBGRUPO),
    ...group,
  }))
}
const organizeFamily = (families) => {
  if (families && !families.length) return []

  return families.map(family => ({
    path: `/category/${family.PATH_PAGE_FAMILIA}`,
    title: family.FAMILIA,
    children: organizeGroup(family.TABLE_GRUPO),
    ...family,
  }))
}

const familyFeature = (categories, familyId) => {
  const categoryFind = categories.find(category => category.ID_FAMILIA === familyId)

  return {
    path: `/category/${categoryFind.PATH_PAGE_FAMILIA}`,
    title: categoryFind.FAMILIA,
    children: organizeGroup(categoryFind.TABLE_GRUPO),
    ...categoryFind,
  }
}


class WidgetCategoryFeature extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      familyFeature: familyFeature(props.categories, props.familyId),
    }
  }

  componentWillReceiveProps() {
    this.setState({
      familyFeature: familyFeature(this.props.categories, this.props.familyId),
    })
  }


  render() {
    if (!this.state.familyFeature) {
      return <div>vazio</div>
    }

    return (
      <WidgetCategory title={this.state.familyFeature.title} menu={this.state.familyFeature.children} />
    )
  }
}

const mapState = state => {
  console.log('widget', state)
  return state
}

export default connect(mapState)(WidgetCategoryFeature)

