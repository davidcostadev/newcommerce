import { SET_SESSION, SET_AUTHENTICATION, SET_USER } from '../type'


export const setSessionId = sessionId => ({
  type: SET_SESSION,
  payload: sessionId,
})

export const setAuthentication = payload => ({
  type: SET_AUTHENTICATION,
  payload,
})

export const setUser = payload => ({
  type: SET_USER,
  payload,
})

