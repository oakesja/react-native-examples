import React from 'react'
import { createStore, combineReducers } from 'redux'
import counter from './counter/reducer'

const reducer = combineReducers({
  counter
})

export const Store = createStore(reducer)
