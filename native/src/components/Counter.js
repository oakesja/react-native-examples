import React, { PropTypes, Component, View, Text, TouchableHighlight } from 'react-native'
import Toast from '../Toast'
import Button from '../Button'

class Counter extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.value}</Text>
        {this.renderButton("Increment", this.props.increment)}
        {this.renderButton("Decrement", this.props.decrement)}
        {this.renderButton("Increment if odd", this.props.incrementIfOdd)}
        {this.renderButton("Toast", () => Toast.show('Awesome', Toast.SHORT))}
      </View>
    )
  }

  renderButton(text, action) {
    return (
      <TouchableHighlight onPress={action}>
        <Text>{text}</Text>
      </TouchableHighlight>
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
