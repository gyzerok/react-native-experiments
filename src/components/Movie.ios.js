'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var Movie = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.props.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.year}>{this.props.year}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  info: {
    flex: 1,
    flexDirection: 'column'
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  }
});

module.exports = Movie;
