import { expect } from "chai"
import { makeActionCreator, httpCallMiddleware } from "../src/actionCreators"
import sinon from "sinon"

describe("actionCreators", () => {
  describe("makeActionCreator", () => {
    let type = "TYPE"
    it("can create an action with no arguments", () => {
      const expected = {
        type: type
      }
      expect(makeActionCreator(type)() ).to.deep.equal(expected)
    }) 
    
    it("can create an action with multiple arguments", () => {
      const expected = {
        type: type,
        x: 1,
        y: "2"
      }
      expect(makeActionCreator(type, "x", "y")(1, "2") ).to.deep.equal(expected)
    }) 
    
    it("raises an error when there are not enough arguments", () => {
      expect(makeActionCreator(type, "x")).to.throw(/Not enough arguments given/)
    }) 
  }) 
  
  describe("httpCallMiddleware", () => {
    let nextMiddleWare = sinon.spy()
    let dispatch = sinon.spy()
    let types = ["request", "success", "fail"]
    let makeRequest = sinon.spy()
    let shouldMakeRequest = state => true
    let store = {}
    
    const callMiddleware = action => {
      const args = {
        dispatch: dispatch,
        getState: sinon.spy
      }
      httpCallMiddleware(args)(nextMiddleWare)(action)
    }
    
    context("when no types are given ", () => {
      it("moves on to the next middleware", () => {
        callMiddleware({})
        expect(nextMiddleWare.calledOnce).to.eq(true)
      }) 
    })
    
    context("when three string types are not given", () => {
      it("raises an error", () => {
        [1, [1], [1, 2, 3]].forEach(types => {
          let action = {types: types}
          expect(() => callMiddleware(action)).to.throw(/Expected an array of three string types/)
        })
      }) 
    })  
    
    context("when makeRequest is not a function", () => {
      it("raises an error", () => {
        let action = {
          types: types, 
          makeRequest: 1
        }
        expect(() => callMiddleware(action)).to.throw(/Expected makeRequest to be a function/)
      }) 
    }) 
    
    context("when shouldMakeRequest returns false given the state", () => {
      it("the request is not made", () => {
        let action = {
          types: types, 
          makeRequest: () => true, 
          shouldMakeRequest: () => false
        }
        callMiddleware(action)
        expect(dispatch.called).to.eq(false)
      }) 
    }) 
    
    context("when shouldMakeRequest returns true given the state", () => {
      it("dispatches the request action", () => {
        let action = {
          types: types, 
          makeRequest: () => true, 
          shouldMakeRequest: () => true
        }
        expect(dispatch.calledWith({type: "request"}))
      }) 
    }) 
    // TODO figure out how to mock the makeRequest call to test that the success and error actions are dispatched properly
  }) 
}) 