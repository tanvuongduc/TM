import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';

class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <BrowserRouter>
        <Fragment>
           <Switch>
             <Route exact path="/">
                 <Login></Login>
             </Route>
             
           </Switch>
        </Fragment>
      </BrowserRouter>
    
    )
  }
}

export default App;
