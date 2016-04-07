import React from 'react' 
import { expect } from 'chai' 
import { mount } from 'enzyme' 
import App from '../../src/components/App'
import Counter from '../../src/components/Counter'
import { Provider } from 'react-redux'
import { createStore } from 'domain-layer'

function setup() {
  let view = mount(
    <Provider store={createStore()}>
      <App />
    </Provider>
  )
  let counter = view.find(Counter)
  return {
    counter
  }
}

describe("<App />", () => {
  context("Counter", () => {
    it("start at 0", () => {
      const { counter } = setup()
      expectValue(counter, 0) 
    })
    context("clicking the increment button", () => {
      it("increments the value by 1", () => {
        const { counter } = setup()
        counter.find('button').at(0).simulate('click')
        expectValue(counter, 1) 
      }) 
    }) 
    context("clicking the decrement button", () => {
      it("decrements the value by 1", () => {
        const { counter } = setup()
        counter.find('button').at(1).simulate('click')
        expectValue(counter, -1) 
      }) 
    }) 
    context("click the increment if odd button", () => {
      context("when the value is even", () => {
        it("does not change the value", () => {
          const { counter } = setup()
          counter.find('button').at(2).simulate('click')
          expectValue(counter, 0)
        }) 
      }) 
      context("when the value is odd", () => {
        it("increments the value by 1", () => {
          const { counter } = setup()
          counter.find('button').at(0).simulate('click')
          counter.find('button').at(2).simulate('click')
          expectValue(counter, 2)
        }) 
      }) 
    }) 
  }) 
}) 

function expectValue(counter, value) {
  expect(counter.text()).to.contain(`Clicked: ${value} times`)
}