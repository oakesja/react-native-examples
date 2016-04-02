import { View, requireNativeComponent, PropTypes } from 'react-native'

var iface = {
  name: 'Button',
  propTypes: {
    ...View.propTypes,
    text: PropTypes.string,
  },
};

module.exports =  requireNativeComponent('RCTButton', iface);
