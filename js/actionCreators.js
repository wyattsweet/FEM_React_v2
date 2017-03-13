import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
  // searchTerm gets expanded out to be 'searchTerm: searchTerm'
}

export function addOMDBData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID, omdbData }
}

// thunk creator
export function getOMDBDetails (imdbID) {
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
    // arrow function here let's 'this' refer to Details
    // arrow functions don't create new context
    .then((response) => {
      dispatch(addOMDBData(imdbID, response.data))
    })
    .catch((error) => console.error('axios error', error))
  }
}
