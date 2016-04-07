# Domain Layer
## Description
This is where all of the business logic that is common between the [native](../native/Readme.md) and [web](../web/Readme.md) UI lives. It is written using [Redux](https://github.com/reactjs/redux) to provide a single direction data flow. This package include the store where the data is kept as well as all of the actions to dispatch to manipulate the store. It includes ES6 features so it must be compiled before the two UIs can use it. Any changes made must be compiled again. 

```
npm run compile
```

## Testing
TODO
