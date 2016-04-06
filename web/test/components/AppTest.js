import React from 'react' 
import { expect } from 'chai' 
import { mount } from 'enzyme' 
import App from '../../src/components/App'
import Counter from '../../src/components/Counter'
import { Provider } from 'react-redux'
import { createStore } from 'domain-layer'

describe("<App />", function() {
  beforeEach(function() {
    this.view = mount(
      <Provider store={createStore()}>
        <App />
      </Provider>
    )
    this.counter = this.view.find(Counter)
  })
  afterEach(function() {
    this.view.unmount()
  }) 
  
  context("Counter", function() {
    it("start at 0", function() {
      expectValue(this.counter, 0) 
    })
    context("clicking the increment button", function() {
      it("increments the value by 1", function() {
        this.counter.find('button').at(0).simulate('click')
        expectValue(this.counter, 1) 
      }) 
    }) 
    context("clicking the decrement button", function() {
      it("decrements the value by 1", function() {
        this.counter.find('button').at(1).simulate('click')
        expectValue(this.counter, -1) 
      }) 
    }) 
    context("click the increment if odd button", function() {
      context("when the value is even", function() {
        it("does not change the value", function() {
          this.counter.find('button').at(2).simulate('click')
          expectValue(this.counter, 0)
        }) 
      }) 
      context("when the value is odd", function() {
        it("increments the value by 1", function() {
          this.counter.find('button').at(0).simulate('click')
          this.counter.find('button').at(2).simulate('click')
          expectValue(this.counter, 2)
        }) 
      }) 
    }) 
  }) 
  
  function expectValue(counter, value) {
    expect(counter.text()).to.contain(`Clicked: ${value} times`)
  }
}) 