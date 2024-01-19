import { combineReducers } from 'redux'

// Example Inial State
export const initialState = {
  example: {
    value: 'example'
  }
}

// Actions
export const SET_EXAMPLE = 'SET_EXAMPLE'
export const SET_EXAMPLE_SUCCESS = 'SET_EXAMPLE_SUCCESS'

export const exampleReducer = function (state = initialState.example, action) {
  switch (action.type) {
    case SET_EXAMPLE: {
      console.log('REDUCER: SET_EXAMPLE', action.payload)
      return { ...state, example: action.payload }
    }
    case SET_EXAMPLE_SUCCESS: {
      console.log('REDUCER: SET_EXAMPLE_SUCCESS', action.payload)
      return { ...state }
    }
    default:
      return state
  }
}
// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  exampleReducer
})

export default rootReducer
