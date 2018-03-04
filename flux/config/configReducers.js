import { TOGGLE_MENU, TOGGLE_SEARCH } from '../type'

export const menuMobile = (state = false, { type }) => {
  switch (type) {
    case TOGGLE_MENU:
      return !state
    default:
      return state
  }
}

export const showSearchMobile = (state = true, { type }) => {
  switch (type) {
    case TOGGLE_SEARCH:
      return !state
    default:
      return state
  }
}

