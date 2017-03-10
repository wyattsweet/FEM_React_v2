import { SET_SEARCH_TERM } from './actions'

// kind of like initial state
const DEFAULT_STATE = {
  searchTerm: ''
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

// something called combine reducers which replaces
// a lot of this
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
