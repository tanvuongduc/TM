import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Todolist from './todolist.component';


export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: '323423',
      usernameInput: '',
      passwordInput: ''
    }
  }
  ramdomToken(){
    return Math.random().toString(35).substr(3,34);
  }

  usernameInput(e){
    this.setState({
      usernameInput: e.target.value 
    })
  }

  passwordInput(e){
    this.setState({
      passwordInput: e.target.value 
    })
  }

  login(e) {
    e.preventDefault();
    let usernameInput =  this.state.usernameInput;
    let  passwordInput = this.state.passwordInput;
    
    axios.get('http://localhost:4001/todolist')
        .then(res => {
          for(let data of res.data){
            console.log(res)
            const username = data.username;
            const password = data.password;
            

            if (username === usernameInput && password === passwordInput) {
              this.props.history.push('/todo');
              //this.state.id = data._id;
              // return (<Todolist  id = {data._id}/>)           
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        }) 
  }
  renderLoginId(){
    return <Todolist  id = {this.state.id}/>
  }
 
 
  render() {
    return (
      <Fragment>
        
        <div className="login-container">
              <div className="aside-left">
                  <div className="header">
                      <h3>Task
                          Manager
                      </h3>
                  </div>
              </div>
              <div className="aside-right">
                  <form id="login-form">
                      <div className="input-wrapper">
                          <input type="text" placeholder="User name" name="userName"
                            value={this.state.usernameInput}
                            onChange = {( (e) => this.usernameInput(e))}
                          />
                          <div className="error" id="userName-error"></div>
                      </div>
                      <div className="input-wrapper">
                          <input type="password" placeholder="Password" name="password"
                            value={this.state.passwordInput}
                            onChange = {( (e) => this.passwordInput(e))}
                          />
                          <div className="error" id="password-error"></div>
                      </div>
                      <div className="form-action">
                          <button className="btn" type="submit" id="login"
                            onClick = {(e) =>this.login(e)}
                          >
                              LOGIN
                          </button>
                          <span className="cursor-pointer" id="redirect-to-register">
                              Don't have an account? Register
                          </span>
                      </div>
                  </form>
              </div>
          </div>
          
        </Fragment>
    )
  }
}