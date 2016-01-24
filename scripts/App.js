import React, {Component} from 'react';
import InlineEdit from 'react-inline-edit';

export default class App extends Component {
  render() {
    console.log('Inline Edit', InlineEdit);
    console.log('React', React);
    return (
      // Add your component markup and other subcomponent references here.
      <h1>Hello, World!</h1>
    );
  }
}
