import React, { Component, AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { Store } from 'domain-layer'
import App from './src/containers/App'

class MainApp extends Component {
  render() {
    return (
      <Provider store={Store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReactNativeTutorial', () => MainApp);
