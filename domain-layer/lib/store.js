'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

require('babel-polyfill');

var _reducer = require('./counter/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./github/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  counter: _reducer2.default,
  github: _reducer4.default
});

function createStore() {
  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}