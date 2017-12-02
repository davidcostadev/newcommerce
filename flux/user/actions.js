import { SET_SESSION } from '../type'


export const setSessionId = sessionId => ({
  type: SET_SESSION,
  payload: sessionId,
})
export default setSessionId
