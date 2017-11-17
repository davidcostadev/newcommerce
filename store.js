import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools  } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const categoriesInitialState = {}

export const actionTypes = {
  CATEGORIES_FULL: 'CATEGORIES_FULL'
}

export const reducer = (state = categoriesInitialState, { type, payload }) => {
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

// export const serverRenderClock = (isServer) => dispatch => {
//   return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
// }

// export const startClock = () => dispatch => {
//   return setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 800)
// }



// export const addCount = () => dispatch => {
//   return dispatch({ type: actionTypes.ADD })
// }

export const initStore = (initialState = categoriesInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
