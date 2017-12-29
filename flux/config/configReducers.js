import { TOGGLE_MENU } from '../type'

export const menuMobile = (state = false, { type }) => {
  switch (type) {
    case TOGGLE_MENU:
      return !state
    default:
      return state
  }
}
