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

  renderLoadingView: function () {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  },

  render: function () {
    // if (!this.state.movies) {
    //     return this.renderLoadingView();
    // }
    //
    // var movie = this.state.movies[0];

    return (
      <ListView
          dataSource={this.state.movies}
          renderRow={(data) => <Movie {...data} />}
      />
    );
  }
});

module.exports = Movies;
