import * as Constants from './constants'

function requestRepos(username) {
  return {
    type: Constants.FETCH_REPOS_REQUEST,
    username: username
  }
}

function receiveRepos(json) {
  return {
    type: Constants.FETCH_REPOS_SUCCESS,
    json: json
  }
}

function fetchReposError(error) {
  return {
    type: Constants.FETCH_REPOS_ERROR,
    error: error
  }
}

export function fetchRepos(username) {
  return dispatch => {
    dispatch(requestRepos(username))
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(json => dispatch(receiveRepos(json)))
      .catch(error => dispatch(fetchReposError(error)))
  }
}
