import { expect } from "chai"
import reducer, { FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR } from "../src/github"

describe("Counter", () => {
  describe("reducer", () => {
    let initState = {
      username: "",
      isFetching: false,
      error: "",
      repos: []
    }
    
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).to.deep.equal(initState)
    }) 
    
    context("when a request is made", () => {
      it("updates the state properly", () => {
        let action = {
          type: FETCH_REPOS_REQUEST, 
          username: 'username'
        }
        let nextState = {
          ...initState,
          username: 'username',
          isFetching: true
        }
        expect(reducer(initState, action)).to.deep.equal(nextState)
      }) 
    })
    
    context("when a request is succesful", () => {
      it("updates the state properly", () => {
        let action = {
          type: FETCH_REPOS_SUCCESS, 
          response: [
            {name: "repo1"}, 
            {name: "repo2"}
          ]
        }
        let nextState = {
          ...initState,
          isFetching: false,
          repos: ["repo1", "repo2"]
        }
        expect(reducer(initState, action)).to.deep.equal(nextState)
      }) 
    }) 
    
    context("when a request fails", () => {
      it("updates the state properly", () => {
        let action = {
          type: FETCH_REPOS_ERROR, 
          error: new Error("404")
        }
        let nextState = {
          ...initState,
          isFetching: false,
          error: "404"
        }
        expect(reducer(initState, action)).to.deep.equal(nextState)
      }) 
    })   
  }) 
}) 