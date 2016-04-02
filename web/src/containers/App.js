import { connect } from 'react-redux'
import { CounterActions } from 'domain-layer'
import Counter from '../components/Counter.js'

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const App = connect(
  mapStateToProps,
  CounterActions
)(Counter)

export default App
