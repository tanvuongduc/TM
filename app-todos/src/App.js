import React, { Component } from 'react';
import Login from './components/mainlogin';
import readAllTodo from './fetch/main';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
      <readAllTodo />
      </React.StrictMode>,

      <Login></Login>
    )
  }
}

export default App;
