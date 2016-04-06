"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _constants = require("./constants");

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function initState() {
  return {
    username: "",
    isFetching: false,
    error: "",
    repos: []
  };
}

function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initState() : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case Constants.FETCH_REPOS_REQUEST:
      return Object.assign({}, state, {
        username: action.username,
        isFetching: true
      });
    case Constants.FETCH_REPOS_SUCCESS:
      var repos = action.json.map(function (repo) {
        return repo.name;
      });
      return Object.assign({}, state, {
        repos: repos,
        isFetching: false
      });
    case Constants.FETCH_REPOS_ERROR:
      return Object.assign({}, state, {
        error: action.error.message,
        isFetching: false
      });
    default:
      return state;
  }
}