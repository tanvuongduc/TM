import React, { Component } from 'react';
import Login from './components/mainlogin.jsx';
import Work from './components/mainwork.jsx';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Login></Login>
        {/* <Work></Work> */}
      </React.StrictMode>
    )
  }
}

export default App;
