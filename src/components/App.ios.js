'use strict';

var React = require('react-native');
var {
  Navigator,
  StyleSheet
} = React;
var Movies = require('./Movies.ios');

var App = React.createClass({

  renderScene: function (route, navigator) {
    var Component = route.component;
    var props = route.props || {};
    return (
      <Component {...route.props} router={navigator} />
    );
  },

  render: function () {
    return (
      <Navigator
        initialRoute={{
            title: 'Movies',
            component: Movies,
            index: 0
        }}
        renderScene={this.renderScene}
        sceneStyle={styles.scene}
      />
    );
  }
});

module.exports = App;

var styles = StyleSheet.create({
  scene: {
    backgroundColor: '#fff'
  }
});
