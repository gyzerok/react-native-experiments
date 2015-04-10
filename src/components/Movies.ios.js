'use strict';

var React = require('react-native');
var {
  ListView,
  Image,
  StyleSheet,
  Text,
  View,
} = React;
var Movie = require('./Movie.ios');
var Info = require('./Info.ios');

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var Movies = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      movies: ds
    };
  },

  componentDidMount: function () {
    this.fetchData();
  },

  fetchData: function () {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
            movies: this.state.movies.cloneWithRows(data.movies)
        });
      })
      .done();
  },

  onSelect: function (movie) {
    this.props.router.push({
      component: Info,
      props: movie
    });
  },

  render: function () {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.movies}
        renderRow={(data) => <Movie {...data} onSelect={this.onSelect} />}
      />
    );
  }
});

module.exports = Movies;

var styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
    marginTop: 20
  }
});
