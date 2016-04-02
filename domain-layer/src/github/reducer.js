import * as Constants from './constants'

export default function reducer(state = 0, action) {
  switch (action.type) {
    case Constants.INCREMENT:
      return state + 1
    case Constants.DECREMENT:
      return state - 1
    case Constants.INCREMENT_IF_ODD:
      return state % 2 == 0 ? state : state + 1
    default:
      return state
  }
}
