import { ADD_FLASH_MESSAGE } from '../type'

export const addFlashMessage = message => ({
  type: ADD_FLASH_MESSAGE,
  payload: message,
})

export default addFlashMessage
