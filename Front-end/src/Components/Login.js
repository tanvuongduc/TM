import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../CSS/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  //call api get token 
  login() {
    let data ={
      user: this.state.username,
      password: this.state.password
    }
    axios.post(`http://localhost:3000/login`,data)
      .then(res => {
        if (res.data.token) {
          // đăng nhập thành công
          if(localStorage)localStorage.setItem ('token', res.data.token)//if browser support localstorage save token in to localStorage
          
          this.props.history.push('tasklist')//chuyển qua trang tasklist
        }
        else{
          // cần thông báo người dùng nhập sai tk hoặc mật khẩu..... 
        }
      })
  }
  changeInpurValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  validateForm() {
    const { username, password } = this.state;
    let returnData = {
      error: false,
      msg: "",
    };
    if (username == "") {
      returnData = {
        error: true,
        msg: "Username không được để trống",
      };
    }

    if (password.length <= 0) {
      returnData = {
        error: true,
        msg: "Password không được để trống",
      };
    }
    this.login(username, password);
  }
  submitForm(e) {
    e.preventDefault();
    const validation = this.validateForm();
    if (validation.error) {
      var p = document.createElement("p");
      p.innerHTML = validation.msg;
      document.getElementById("alert-box").appendChild(p);
    } else {
      document.getElementById("alert-box").style.display = "none";
    }
  }
  render() {
    //kiểm tra localStorage có token không nếu có thì chuyển trang /tasklist
    if(localStorage){
      const token = localStorage.getItem('token')
      if (token){
        this.props.history.push('tasklist')
      }
    }
    //render
    return (
      <Fragment>
        <div className="main-box">
          <div className="container">
            <h1 className="title-login">
              Task<br></br> Manager
            </h1>
            <div className="bar-border"></div>
            <form id="form-login" action="" className="form-group">
              <input
                type="text"
                name="username"
                placeholder="User Name "
                className="form-control"
                id="input-name"
                onChange={(e) => this.changeInpurValue(e)}
              ></input>
              <br></br>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                id="input-password"
                onChange={(e) => this.changeInpurValue(e)}
              ></input>
              <br></br>

              <input
                type="button"
                value="LOGIN"
                name="submit"
                className="form-control"
                id="btn-submit"
                onClick={() => this.login()}
              ></input>
              <br></br>
              <b
                id="alert-box"
                style={{
                  color: "#bd392b",
                  textAlign: "left",
                }}
              ></b>
              <br></br>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Login);
