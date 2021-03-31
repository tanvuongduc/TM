import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './Components/Login';
import TaskManager from './Components/TaskManager';

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
                <TaskManager/>
             </Route>

             
           </Switch>
        </Fragment>
      </BrowserRouter>

    )
  }
}

export default App;
