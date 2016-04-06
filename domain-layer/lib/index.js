'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubActions = exports.CounterActions = exports.createStore = undefined;

var _store = require('./store');

var _actions = require('./counter/actions');

var CounterActions = _interopRequireWildcard(_actions);

var _actions2 = require('./github/actions');

var GithubActions = _interopRequireWildcard(_actions2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.createStore = _store.createStore;
exports.CounterActions = CounterActions;
exports.GithubActions = GithubActions;