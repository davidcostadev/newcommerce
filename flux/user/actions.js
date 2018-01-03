import { SET_SESSION, SET_AUTHENTICATION } from '../type'


export const setSessionId = sessionId => ({
  type: SET_SESSION,
  payload: sessionId,
})
export const setAuthentication = payload => ({
  type: SET_AUTHENTICATION,
  payload,
})

export default setSessionId
