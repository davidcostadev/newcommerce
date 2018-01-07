import shortid from 'shortid'
import { ADD_FLASH_MESSAGE } from '../type'

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: payload.type,
          message: payload.message,
        },
      ]
    default: return state
  }
}
