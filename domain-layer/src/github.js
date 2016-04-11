export const FETCH_REPOS_REQUEST = "FETCH_REPOS_REQUEST"
export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS"
export const FETCH_REPOS_ERROR = "FETCH_REPOS_ERROR"

export function fetchRepos(username) {
  return {
    types: [FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR],
    makeRequest: () => fetch(`https://api.github.com/users/${username}/repos`),
    payload: { username }
  }
}

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
    case FETCH_REPOS_REQUEST:
      return {
        ...state, 
        username: action.username,
        isFetching: true
      }
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.response.map(repo => repo.name),
        isFetching: false
      }
    case FETCH_REPOS_ERROR:
      return {
        ...state,
        error: action.error.message,
        isFetching: false
      }
    default:
      return state
  }
}
