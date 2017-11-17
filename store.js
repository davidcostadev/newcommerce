import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools  } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const categoriesInitialState = {
  categories: []
}

export const actionTypes = {
  CATEGORIES_FULL: 'CATEGORIES_FULL'
}

export const categories = (state = categoriesInitialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CATEGORIES_FULL:
      return payload
    default:
      return state
  }
}


// actions

export const categoriesFull = categories => {
  return {
    type: actionTypes.CATEGORIES_FULL,
    payload: categories
  }
}

// dispatch
export const setCategories = (info) => dispatch => {
  return dispatch(categoriesFull(info))
}


export const initStore = (initialState = categoriesInitialState) => {
  return createStore(
    combineReducers({
      categories
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
