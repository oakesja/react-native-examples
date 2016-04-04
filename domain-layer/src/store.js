import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import "babel-polyfill"
import counter from './counter/reducer'
import github from './github/reducer'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  counter,
  github
})

export const Store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)
