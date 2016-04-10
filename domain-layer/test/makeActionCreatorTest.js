import { expect } from "chai"
import { makeActionCreator } from "../src/actionCreators"

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
}) 