import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Router } from '../routes'
import theme from '../layout/theme'
import styles from '../assets/scss/App.scss'

const Field = styled.div`
  display: flex;
  border: 1px solid ${theme.borderColor};
  transition: border-color .4s ease;

  &:hover {
    border-color: ${theme.borderColor};
  }
`

const Input = styled.input`
  flex-grow: 5;
  border-width: 0;
  padding: 12px 16px;
  font-size: 16px;
  transition: box-shadow .4s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px ${theme.colorPrimary};
  }

`

const Button = styled.button`
  flex-grow: 1;
  border-width: 0;
  background-color: ${theme.buttonDefault};
  color: ${theme.black};
  transition: all .4s;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${theme.buttonDefaultHover};
    color: ${theme.black}
  }
  &:active {
    background-color: ${theme.buttonDefaultActive};
    color: ${theme.black};
    transition-duration: 0s;
  }

  i {
    font-size: 32px;
  }
`

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
        <Field className={styles.field}>
          <Input type="text" className={`input ${styles.input} is-large`} value={this.state.query} onChange={this.handleChange} placeholder="O que você está produrando?" />
          <Button type="submit" className={`button ${styles.button} is-info`}><i className="ion-ios-search" /></Button>
        </Field>
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
