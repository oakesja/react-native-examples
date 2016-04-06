import React from 'react' 
import { expect } from 'chai' 
import { shallow } from 'enzyme' 
import Counter from '../../src/components/Counter'
import sinon from 'sinon'

describe("<Counter />", function() {
  beforeEach(function() {
    this.increment = sinon.spy()
    this.decrement = sinon.spy()
    this.incrementIfOdd = sinon.spy()
    this.value = 2 
    this.view = shallow(
      <Counter 
        increment={this.increment}
        decrement={this.decrement}
        incrementIfOdd={this.incrementIfOdd}
        value={this.value}
      />
    )
  }) 
  
  it("shows the current value", function() {
    expect(this.view.text()).to.contain(`Clicked: ${this.value} times`)
  }) 
  
  context("for the increment button", function() {
    beforeEach(function() {
      this.incrButton = this.view.find('button').at(0)
    }) 
    
    it("it has the right label", function() {
      expect(this.incrButton.text()).to.equal("+")
    }) 
    
    it("it increments when pressed", function() {
      this.incrButton.simulate('click')
      expect(this.increment.calledOnce).to.equal(true)
    }) 
  }) 
  
  context("for the decrement button", function() {
    beforeEach(function() {
      this.decrButton = this.view.find('button').at(1)
    }) 
    
    it("it has the right label", function() {
      expect(this.decrButton.text()).to.equal("-")
    }) 
    
    it("it decrements when pressed", function() {
      this.decrButton.simulate('click')
      expect(this.decrement.calledOnce).to.equal(true)
    }) 
  }) 
}) 