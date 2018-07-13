import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'reaction-base';
import { Text, View } from 'native-base';

export default class Splash extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <View>
        <Text>Loading . . .</Text>
        <Link to="/signin">
          <Text>Login</Text>
        </Link>
      </View>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/signin');
    }, 3000);
  }
}
