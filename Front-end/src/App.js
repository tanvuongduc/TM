import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './Components/Login';
import TaskManager from './Components/TaskManager';
import Task from './Components/Task'
import NavBar from './Components/NavBar';
import InputFrame from './Components/InputFrame';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar username="Admin"> a</NavBar>
          <InputFrame> </InputFrame>
          <Switch>

          </Switch>
        </Fragment>
      </BrowserRouter>

    )
  }
}

export default App;
