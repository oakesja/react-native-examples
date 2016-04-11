import { createStore } from './store'
import * as CounterActions from './counter'
import * as GithubActions from './github'
import "babel-polyfill"

export {
  createStore,
  CounterActions,
  GithubActions
}
