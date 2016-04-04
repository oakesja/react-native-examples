import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'domain-layer'
import App from './src/components/App'

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
