import React, { Text } from 'react-native' 
import { expect } from 'chai' 
import { shallow } from 'enzyme' 
import Counter from '../../src/components/Counter'
import sinon from 'sinon'

function setup() {
  let props = {
    increment: sinon.spy(),
    decrement: sinon.spy(),
    incrementIfOdd: sinon.spy(),
    value: 2
  }
  let view = shallow(
    <Counter 
      increment={props.increment}
      decrement={props.decrement}
      incrementIfOdd={props.incrementIfOdd}
      value={props.value}
    />
  )
  let incrButton = view.find('Button').at(0)
  let decrButton = view.find('Button').at(1)
  let incrementIfOddButton = view.find('Button').at(2)
  return {
    props, 
    view, 
    incrButton,
    decrButton,
    incrementIfOddButton
  }
}

describe("<Counter />", () => {
  it("shows the current value", () => {
    const { view, props } = setup()
    expect(view.find("Text").children().first().text()).to.contain(`${props.value}`)
  }) 
  
  context("for the increment button", () => {
    it("it has the right label", () => {
      const { incrButton } = setup()
      expect(incrButton.props().text).to.equal("Increment")
    }) 
    
    it("it increments when pressed", () => {
      const { incrButton, props } = setup()
      incrButton.simulate('click')
      expect(props.increment.calledOnce).to.equal(true)
    }) 
  }) 
  
  context("for the decrement button", () => {
    it("it has the right label", () => {
      const { decrButton } = setup()
      expect(decrButton.props().text).to.equal("Decrement")
    }) 
    
    it("it decrements when pressed", () => {
      const { decrButton, props } = setup()
      decrButton.simulate('click')
      expect(props.decrement.calledOnce).to.equal(true)
    }) 
  }) 
  
  context("for the increment if odd button", () => {
    it("it has the right label", () => {
      const { incrementIfOddButton } = setup()
      expect(incrementIfOddButton.props().text).to.equal("Increment if odd")
    }) 
    
    it("it calls the incrementIfOdd function when pressed", () => {
      const { incrementIfOddButton, props } = setup()
      incrementIfOddButton.simulate('click')
      expect(props.incrementIfOdd.calledOnce).to.equal(true)
    }) 
  })
}) 