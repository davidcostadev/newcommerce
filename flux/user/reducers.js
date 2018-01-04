import jsCookie from 'js-cookie'
import { SET_SESSION, SET_AUTHENTICATION } from '../type'

export const initialState = ''

export const sessionId = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SESSION:
      return payload
    default:
      return state
  }
}

export const authentication = (state = false, { type, payload }) => {
  switch (type) {
    case SET_AUTHENTICATION:
      if (!payload) {
        jsCookie.remove('logged')
      }
      return payload
    default:
      return state
  }
}

