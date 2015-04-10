'use strict';

var React = require('react-native');
var {
  View,
  Image,
  StyleSheet
} = React;

var Info = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.posters.thumbnail}}
          style={styles.poster}
        />
      </View>
    );
  }
});

module.exports = Info;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  poster: {
    width: 100,
    height: 200,
    marginTop: 50
  }
});
