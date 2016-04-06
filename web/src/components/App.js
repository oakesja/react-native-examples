import React, { Component } from 'react'
import CounterApp from '../containers/CounterApp'
import GithubApp from '../containers/GithubApp'

class App extends Component {
  render() {
    return (
      <div>
        <CounterApp />
        <GithubApp />
      </div>
    )
  }
}

export default App