import React, { Component } from 'react';
import { List } from 'native-base';
import TodoItem from '~/components/TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <List>
        <TodoItem>Clean the Kitchen</TodoItem>
        <TodoItem finished>Make the Bed</TodoItem>
        <TodoItem>Eat Breakfast</TodoItem>
      </List>
    );
  }
}
