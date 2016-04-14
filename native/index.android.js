import React, { Component, AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'domain-layer'
import App from './src/components/App'

class MainApp extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReactNativeTutorial', () => MainApp);
