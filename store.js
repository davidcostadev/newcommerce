import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const categoriesInitialState = {
  categories: [],
  familyId: 0,
}
// const familyIdInitialState = 0

export const actionTypes = {
  CATEGORIES_FULL: 'CATEGORIES_FULL',
  SET_FAMILY_ID: 'SET_FAMILY_ID',
}


export const categories = (state = categoriesInitialState.categories, { type, payload }) => {
  console.log('categories', state)
  switch (type) {
    case actionTypes.CATEGORIES_FULL:
      return payload
    default:
      return state
  }
}

export const familyId = (state = categoriesInitialState.familyId, { type, payload }) => {
  console.log('familyId', state)
  switch (type) {
    case actionTypes.SET_FAMILY_ID:
      return payload
    default:
      return state
  }
}


// actions
export const categoriesFull = categories => ({
  type: actionTypes.CATEGORIES_FULL,
  payload: categories,
})

export const familyIdFull = familyIda => ({
  type: actionTypes.SET_FAMILY_ID,
  payload: familyIda,
})

// dispatch

export const setCategories = info => dispatch => dispatch(categoriesFull(info))
export const setFamilyIds = info => dispatch => dispatch(familyIdFull(info))


export const initStore = (initialState = categoriesInitialState) => (
  createStore(
    combineReducers({
      categories,
      familyId,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  )
)
