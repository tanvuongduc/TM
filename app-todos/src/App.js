import React, { Component } from 'react';
// import Login from './components/mainlogin';
import Task from './components/mainwork'

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Task></Task>
        {/* <Login></Login> */}
      </React.StrictMode>

    )
  }
}

export default App;
