import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './Components/Login';
import TaskManager from './Components/TaskManager';
import Task from './Components/Task'
import NavBar from './Components/NavBar';
import InputFrame from './Components/InputFrame';
import Footer from './Components/Footer';

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
          <InputFrame username="Admin"> </InputFrame>
          <Footer> </Footer>
          <Switch>

          </Switch>
        </Fragment>
      </BrowserRouter>

    )
  }
}

export default App;
