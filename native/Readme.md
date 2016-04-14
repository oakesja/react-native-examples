# Web UI
## Description
This is the native android UI that shares the [domain layer](../domain-layer/Readme.md). It is built using [React Native](https://facebook.github.io/react-native/) and [react-redux](https://github.com/reactjs/react-redux). 

To run this application you must have an android device or emulator. See this [tutorial](https://facebook.github.io/react-native/docs/android-setup.html#content) for more information on getting one of the two setup. Once you have an android device do the following to start the app. 

```
npm run install
npm run update-domain-layer # if you have not already compiled the domain layer
npm run start

# in another terminal
react-native run-android
```

## Tests
Tests are written using the following: 
- [Enzyme](http://airbnb.io/enzyme/) for an easy and intuitive API for interacting with the react components
- [Mocha](https://mochajs.org/) to run the tests
- [Chai](http://chaijs.com/) assertion library
- [Sinon](http://sinonjs.org/) for mocking 

Unit tests are written exactly the same as the [web unit tests](../web/Readme.md##Tests). Both use Enzyme's `shallow` rendering. Since native dependencies for IOS and Android can be hard to simulate a JS mock of react native [`react-native-mock`](https://github.com/lelandrichardson/react-native-mock) is used to make writting these tests possible. 

Integration tests must be written with some framework or tool that can communicate with the native device. An example of this is [Appium](http://appium.io/). These tests have yet to be implemented. 

Run with:

```
npm run test
```
