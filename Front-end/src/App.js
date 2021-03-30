import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './Components/Login';
import TaskManager from './Components/TaskManager';
import Task from './Components/Task'
import NavBar from './Components/NavBar';

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
          <Switch>
            <Route exact path="/">
              {localStorage.getItem('token') ? <Redirect to="/tasklist" /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/tasklist">
              <Task/>
            </Route>
            <Route exact path="/mytask">
                <TaskManager/>
             </Route>
          </Switch>
          <NavBar username="Admin"> a</NavBar>
           <Switch>
             
           </Switch>
        </Fragment>
      </BrowserRouter>

    )
  }
}

export default App;
