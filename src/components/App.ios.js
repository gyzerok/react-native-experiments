'use strict';

var React = require('react-native');
var {
  NavigatorIOS,
  StyleSheet
} = React;
var Movies = require('./Movies.ios');

var App = React.createClass({
  render: function () {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
            title: 'Movies',
            component: Movies
        }}
      />
    );
  }
});

module.exports = App;

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
