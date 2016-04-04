import * as Constants from './constants'

function initState() {
  return {
    username: "",
    isFetching: false,
    error: "",
    repos: []
  }
}

export default function reducer(state = initState(), action) {
  switch (action.type) {
    case Constants.FETCH_REPOS_REQUEST:
      return Object.assign({}, state, {
        username: action.username,
        isFetching: true
      })
    case Constants.FETCH_REPOS_SUCCESS:
      let repos = action.json.map(repo => repo.name)
      return Object.assign({}, state, {
        repos: repos,
        isFetching: false
      })
    case Constants.FETCH_REPOS_ERROR:
      return Object.assign({}, state, {
        error: action.error.message,
        isFetching: false
      })
    default:
      return state
  }
}
