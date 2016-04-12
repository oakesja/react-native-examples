# Domain Layer
## Description
This is where all of the business logic that is common between the [native](../native/Readme.md) and [web](../web/Readme.md) UI lives. It is written using [Redux](https://github.com/reactjs/redux) to provide a single direction data flow. This package include the store where the data is kept as well as all of the actions to dispatch to manipulate the store. It includes ES6 features so it must be compiled before the two UIs can use it. Any changes made must be compiled again. 

```
npm run compile
```

## Testing
Tests are written using the following: 
- [Mocha](https://mochajs.org/) to run the tests
- [Chai](http://chaijs.com/) assertion library
- [Sinon](http://sinonjs.org/) for mocking 

### Action creators
Synchronous actions creators are made using `makeActionCreator` and asynchronous ones have a simple setup with most of the work happening in `httpCallMiddleware`. Both of these were adapted from similar ones from [http://redux.js.org/docs/recipes/ReducingBoilerplate.html](http://redux.js.org/docs/recipes/ReducingBoilerplate.html). Since both of these functions are tested in the example code, there is little use in testing the action creators themselves.

### Reducers
Reducers then can be tested using mocha and chai since they are pure functions. I used the action creators in these test to reduce boilerplate since they are already tested.

### Integration
The only gap left after unit tests is that our asynchronous actions to fetch data are using the right url, are posting the correct contents in the case of a POST, and that the json data coming back is what was expected. To test this a happy path integration test could be added covering the asynchronous action and the corresponding reducer. This utilize [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) to ensure that the correct actions are created and the store is updated correctly by the reducer.

Run with:

```
npm run test
```
