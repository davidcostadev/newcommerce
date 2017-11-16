import React from 'react'
import ApiCategories from '../api/Categories'

// console.log(ApiCategories)

export default class Home extends React.Component {
  constructor(props, a, b, c, d) {
    super(props)

    console.log(props, a, b, c, d)
  }
  // static async getInitialProps () {
  //   // eslint-disable-next-line no-undef

  //   const result = await ApiCategories()
  //   console.log(result);
  //   return { categories: result }
  // }

  render () {
    return (
      <div>
        <p>Next.js has {this.props.stars} ⭐️</p>
      </div>
    )
  }
}
