import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '../routes'
import styles from '../assets/scss/App.scss'


class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = { query: props.query ? props.query : '' }
  }
  handleSubmit(event) {
    event.preventDefault()
    if (this.state.query.length > 1) {
      Router.pushRoute('search', { q: this.state.query })
    }
  }

  handleChange(event) {
    this.setState({ query: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.field}>
          <input type="text" className={`input ${styles.input} is-large`} value={this.state.query} onChange={this.handleChange} placeholder="O que você está produrando?" />
          <button type="submit" className={`button ${styles.button} is-info`}><i className="ion-ios-search" /></button>
        </div>
      </form>
    )
  }
}


SearchForm.defaultProps = {
  query: '',
}

SearchForm.propTypes = {
  query: PropTypes.string,
}


export default SearchForm
