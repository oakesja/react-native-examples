'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchRepos = fetchRepos;

var _constants = require('./constants');

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function requestRepos(username) {
  return {
    type: Constants.FETCH_REPOS_REQUEST,
    username: username
  };
}

function receiveRepos(json) {
  return {
    type: Constants.FETCH_REPOS_SUCCESS,
    json: json
  };
}

function fetchReposError(error) {
  return {
    type: Constants.FETCH_REPOS_ERROR,
    error: error
  };
}

function fetchRepos(username) {
  return function (dispatch) {
    dispatch(requestRepos(username));
    return fetch('https://api.github.com/users/' + username + '/repos').then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveRepos(json));
    }).catch(function (error) {
      return dispatch(fetchReposError(error));
    });
  };
}