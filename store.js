import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { CATEGORIES_FULL, SET_FAMILY_ID } from './flux/type'
import sessionId, { initialStateUser } from './flux/user/reducers'
import * as cart from './flux/cart/cartReducers'
import { menuMobile } from './flux/config/configReducers'

const initialStateAll = {
  categories: [],
  familyId: 0,
  sessionId: initialStateUser,
  cart: cart.initialStateCart,
  cartItens: cart.initialStateItens,
}

export const categories = (state = initialStateAll.categories, { type, payload }) => {
  switch (type) {
    case CATEGORIES_FULL:
      return payload
    default:
      return state
  }
}

export const familyId = (state = initialStateAll.familyId, { type, payload }) => {
  switch (type) {
    case SET_FAMILY_ID:
      return payload
    default:
      return state
  }
}


// actions
export const categoriesFull = categories => ({
  type: CATEGORIES_FULL,
  payload: categories,
})

export const familyIdFull = familyIda => ({
  type: SET_FAMILY_ID,
  payload: familyIda,
})

// dispatch

export const setCategories = info => dispatch => dispatch(categoriesFull(info))
export const setFamilyIds = info => dispatch => dispatch(familyIdFull(info))


export const initStore = (initialState = initialStateAll) => (
  createStore(
    combineReducers({
      categories,
      familyId,
      sessionId,
      menuMobile,
      cart: cart.cart,
      cartItens: cart.cartItens,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  )
)
