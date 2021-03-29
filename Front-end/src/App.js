import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import NavBar from './Components/NavBar';

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
          <NavBar username="Admin"> a</NavBar>
           <Switch>
             
           </Switch>
        </Fragment>
      </BrowserRouter>
    
    )
  }
}

export default App;
