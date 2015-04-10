'use strict';

var React = require('react-native');
var {
  Image,
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} = React;

var Movie = React.createClass({

  handlePress: function () {
    this.props.onSelect({
      posters: this.props.posters
    });
  },

  render: function () {
    return (
      <TouchableHighlight onPress={this.handlePress}>
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
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
