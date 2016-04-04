import React, { Component, View } from 'react-native'
import CounterApp from '../containers/CounterApp'
import GithubApp from '../containers/GithubApp'

class App extends Component {
  render() {
    return (
      <View>
        <CounterApp />
        <GithubApp />
      </View>
    )
  }
}

export default App
