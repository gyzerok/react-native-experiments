'use strict';

var React = require('react-native');
var { AppRegistry } = React;

var Movies = require('./src/components/Movies.ios');

AppRegistry.registerComponent('AwesomeProject', () => Movies);
