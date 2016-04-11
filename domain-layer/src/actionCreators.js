export function makeActionCreator(type, ...argNames) {
  return function(...args) {
    if(args.length < argNames.length){
      throw new Error(`Failed to make action for \"${type}\": Not enough arguments given`)
    }
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export function httpCallMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      makeRequest,
      shouldMakeRequest = () => true,
      payload = {}
    } = action
    if (!types) {
      return next(action)
    }
    if (!Array.isArray(types) || 
        types.length !== 3 || 
        !types.every(type => typeof type === 'string')) {
      throw new Error('Expected an array of three string types.')
    }
    if (typeof makeRequest !== 'function') {
      throw new Error('Expected makeRequest to be a function.')
    }
    if (!shouldMakeRequest(getState())) {
      return
    }
    const [ requestType, successType, failureType ] = types
    dispatch({
      ...payload,
      type: requestType
    })
    return makeRequest()
      .then(response => response.json())
      .then(json => dispatch({
        ...payload,
        response: json,
        type: successType
      }))
      .catch(error => dispatch({
        ...payload, 
        error,
        type: failureType
      }))
  }
}