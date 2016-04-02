import * as Constants from './constants'

export function increment() {
  return {
    type: Constants.INCREMENT,
  }
}

export function decrement() {
  return {
    type: Constants.DECREMENT,
  }
}

export function incrementIfOdd() {
  return {
    type: Constants.INCREMENT_IF_ODD,
  }
}
