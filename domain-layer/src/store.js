import React from 'react'
import { createStore as cs, combineReducers, applyMiddleware } from 'redux'
import counter from './counter'
import github from './github/reducer'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  counter,
  github
})

export function createStore() {
  return cs(
    reducer,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
  
