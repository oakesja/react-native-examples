import React, { View, Component, requireNativeComponent, PropTypes } from 'react-native'

const NativeButton = requireNativeComponent('RCTButton', Button, {
  nativeOnly: {onChange: true}
});

class Button extends Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    if (this.props.onClick) {
      this.props.onClick(event.nativeEvent);
    }
  }

  render() {
    return (
      <NativeButton
        {...this.props} onChange={this._onChange} />
    );
  }
}

Button.propTypes = {
  ...View.propTypes,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button
