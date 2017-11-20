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

const familyFeatureMount = (categories, familyId) => {
  const categoryFind = categories.find(category => category.ID_FAMILIA === familyId)

  return {
    path: `/category/${categoryFind.PATH_PAGE_FAMILIA}`,
    title: categoryFind.FAMILIA,
    children: organizeGroup(categoryFind.TABLE_GRUPO),
    ...categoryFind,
  }
}


const WidgetCategoryFeature = (props) => {
  const familyFeature = familyFeatureMount(this.props.categories, this.props.familyId)

  if (!familyFeature) {
    return <div>vazio</div>
  }

  return (
    <WidgetCategory title={familyFeature.title} menu={familyFeature.children} />
  )
}


const mapState = state => state

export default connect(mapState)(WidgetCategoryFeature)

