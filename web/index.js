import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'domain-layer'
import App from './src/components/App'

render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
