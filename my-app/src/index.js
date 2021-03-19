import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import { BrowserRouter, Switch,Route, Redirect} from "react-router-dom";


const app=(
    <BrowserRouter>
        <Fragment>
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route path = "/login" exact component={Login}></Route>
                <Route path = "/home" exact component ={Home}></Route>
            </Switch>
        </Fragment>
    </BrowserRouter>

);
ReactDOM.render(app,document.getElementById('root'));
