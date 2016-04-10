import { expect } from "chai"
import reducer, { increment, decrement, incrementIfOdd } from "../src/counter"

describe("Counter", () => {
  describe("reducer", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).to.equal(0)
    }) 
    
    it("should handle increment", () => {
      expect(reducer(1, increment())).to.equal(2)
    }) 
    
    it("should handle decrement", () => {
      expect(reducer(1, decrement())).to.equal(0)
    }) 
    
    it("should handle incrementIfOdd", () => {
      expect(reducer(0, incrementIfOdd())).to.equal(0)
      expect(reducer(1, incrementIfOdd())).to.equal(2)
    }) 
  }) 
}) 