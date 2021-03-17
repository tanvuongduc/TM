import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Login from './components/login.component';
import Todolist from './components/todolist.component';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Redirect to="/login" />
              </Route>
                <Route path='/login' component={ Login } />
                <Route path='/todolist' component={ Todolist } />
          </Switch>
      </Router>
    );
  }
}

export default App;
