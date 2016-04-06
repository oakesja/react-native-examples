'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.decrement = decrement;
exports.incrementIfOdd = incrementIfOdd;

var _constants = require('./constants');

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function increment() {
  return {
    type: Constants.INCREMENT
  };
}

function decrement() {
  return {
    type: Constants.DECREMENT
  };
}

function incrementIfOdd() {
  return {
    type: Constants.INCREMENT_IF_ODD
  };
}