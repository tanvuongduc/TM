import React, { Component, Fragment } from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import { BrowserRouter, Switch,Route, Redirect} from "react-router-dom";
import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            url : window.location.href
        };
    }
    onusernamechange(e) {
        // console.log('11')
        this.setState(
            {
                username: e.target.value
            }
        )
    }
    onpasswordchange(e) {
        // console.log('12')
        this.setState({
            password: e.target.value
        })
    }
    checklogin() {
        let userdata = {
            username: this.state.username,
            password: this.state.password
        }

        // console.log(userdata)

        axios.post('http://localhost:5000/api/login',userdata).then(
            token => {
                // console.log(token.data);
                Cookies.set("token" , token.data);
                this.setState({
                    url : "http://localhost:3000/home"
                })

                window.location.href = this.state.url;
            }
            ).catch(err => console.log(err))

    
        this.setState(
            {
                username: "",
                password: ""
            }
        )
    }
    render() {
        return(
            <Fragment>
                <div className="main">
                    <div className="left">
                        <h1>Talk</h1>
                        <h1>Manager</h1>
                    </div>
                    <div className="right">
                        <input className="input" type="text" id="username" placeholder="Username" value={this.state.username} onChange={(e) => this.onusernamechange(e)} />
                        <br />
                        <br />
                        <input className="input" type="password" id="password" placeholder="Password" value={this.state.password} onChange={(e) => this.onpasswordchange(e)} />
                        <br /><br /><br />
                        <button id="btn1" className="login" onClick={() => this.checklogin()}>Login</button>
                    </div>
                </div>

            </Fragment>
        )} 
        
}


export default Login;