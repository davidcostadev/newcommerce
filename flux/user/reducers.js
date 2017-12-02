import { SET_SESSION } from '../type'

export const initialState = ''

export const sessionId = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SESSION:
      return payload
    default:
      return state
  }
}

export default sessionId
