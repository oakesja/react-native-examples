import React, { PropTypes, Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <p>
        Clicked: {this.props.value} times
        {' '}
        <button onClick={this.props.increment}>
          +
        </button>
        {' '}
        <button onClick={this.props.decrement}>
          -
        </button>
        {' '}
        <button onClick={this.props.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
}

export default Counter
