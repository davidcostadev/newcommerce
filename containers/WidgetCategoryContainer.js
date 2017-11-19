import React from 'react'
import { connect } from 'react-redux'

class WidgetCategoryContainer extends React.Component {
  render() {
    if (this.props.categories.length === 0) {
     return <div>vazio</div>
    }
  }
}

const mapState = state => state

export default connect(mapState)(WidgetCategoryContainer)

