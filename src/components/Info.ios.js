'use strict';

var React = require('react-native');
var {
  View,
  Image,
  Text,
  StyleSheet
} = React;

var Info = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.year}>{this.props.year}</Text>
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
  year: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  poster: {
    width: 100,
    height: 200,
    marginTop: 50
  }
});
