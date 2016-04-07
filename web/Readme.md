# Web UI
## Description
This is the web UI that shares the [domain layer](../domain-layer/Readme.md). It is built using [React](https://facebook.github.io/react/) and [react-redux](https://github.com/reactjs/react-redux). 

Start server with: 

```
npm run install
npm run update-domain-layer # if you have not already compiled the domain layer
npm run start
```

Then go to [http://localhost:3000/](http://localhost:3000/)

## Tests
Tests are written using the following: 
- [Enzyme](http://airbnb.io/enzyme/) for an easy and intuitive API for interacting with the react components
- [Mocha](https://mochajs.org/) to run the tests
- [Chai](http://chaijs.com/) assertion library
- [Sinon](http://sinonjs.org/) for mocking 

Unit tests can easily be written for presentational components since they are modular and stateless. These tests pass in test data or sinon spies as props and use Enzyme's shallow rendering since the single component is all we care about. These tests are fast because child components are ignored and a DOM is not needed. They are also easy to write as long as you keep your presentational components stateless. Container components are not unit tested since they are generated using react-redux. 

Integration tests can be written using Enzyme's full rendering API that renders a component and all of its children to the DOM. These tests can be leveraged to ensure that the container components are passing the correct props to the presentational components and that the interactions with the domain-layer is correct. These tests can still be fast by using [jsdom](https://github.com/tmpvar/jsdom) since it is a full virtual DOM. 

Run with:

```
npm run test
```
