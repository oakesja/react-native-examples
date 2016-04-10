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