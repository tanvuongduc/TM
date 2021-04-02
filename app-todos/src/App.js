import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from "./components/login-page/login-page.jsx";
import Work from "./components/work-page/work-page.jsx";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} ></Route>
          <Route path="/work" component={Work} ></Route>
          <Route component={Login} ></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
