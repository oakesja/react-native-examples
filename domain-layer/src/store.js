import React from 'react'
import { createStore as cs, combineReducers, applyMiddleware } from 'redux'
import counter from './counter'
import github from './github'
import thunkMiddleware from 'redux-thunk'
import { httpCallMiddleware } from './actionCreators'

const reducer = combineReducers({
  counter,
  github
})

export function createStore() {
  return cs(
    reducer,
    applyMiddleware(
      thunkMiddleware, 
      httpCallMiddleware
    )
  )
}
  
