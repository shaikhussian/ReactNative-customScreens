import PropTypes from 'prop-types';
import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { Text, CheckBox, ListItem } from 'native-base';


export default class TodoItem extends Component {
  static propTypes = {
    children: PropTypes.string
  };
  static defaultProps = {
    children: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      finished: props.finished
    };
  }

  handlePress() {
    console.log(this.state.finished);
    this.setState({ finished: !this.state.finished });
  }

  render() {
    return (
      <ListItem onPress={this.handlePress}>
        <CheckBox checked={this.state.finished} />
        <Text>{this.props.children}</Text>
      </ListItem>
    );
  }
}
