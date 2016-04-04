import { connect } from 'react-redux'
import { CounterActions } from 'domain-layer'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const CounterApp = connect(
  mapStateToProps,
  CounterActions
)(Counter)

export default CounterApp
