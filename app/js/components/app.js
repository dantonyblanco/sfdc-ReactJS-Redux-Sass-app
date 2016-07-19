import React from 'react';
import { Component } from 'react';

import Input from './input.js';
import List from './list.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    );
  }
}