import { makeActionCreator } from "./actionCreators"

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const INCREMENT_IF_ODD = "INCREMENT_IF_ODD"

export const increment = makeActionCreator(INCREMENT)
export const decrement = makeActionCreator(DECREMENT)
export const incrementIfOdd = makeActionCreator(INCREMENT_IF_ODD)

export default function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case INCREMENT_IF_ODD:
      return state % 2 == 0 ? state : state + 1
    default:
      return state
  }
}
