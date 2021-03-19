import React, { Component, Fragment } from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import './home.css';
import Login from '../login/login';

class Home extends Component {
   state = {
      username: "",
      allTasks: [],
      url: window.location.href,
      taskID:""
  }
  
  componentDidMount() {
    let config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`
      }
    }

    axios.get("http://localhost:5000/api/user", config).then(
      res => {
        this.setState({
          username: res.data.username
        })
      }
    ).catch(err => console.log(err))
    axios.get("http://localhost:5000/api/task", config).then(
      res => {
        this.setState({
          allTasks: res.data
        })
        console.log(res.data)
      }
    )
  }
  /// TARGET INPUT 

  onChangetask(e) {
    this.setState({
      newTask: e.target.value
    })

    console.log(this.state.newTask)
  }
  /// READ TASK

  ////add
  addtask = () => {
    let config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };
    // req.body
    let newTask = {
      task: this.state.newTask
    };

    if (this.state.newTask != null && this.state.newTask !="") {
      axios.post("http://localhost:5000/api/task", newTask, config).then(
        res => {
          this.setState({
            allTasks: res.data
          });
          console.log(this.state.allTasks);
        }
      )
       this.setState({
        newTask: ""
      })
    }
    
  }
  ///update
  updatetask() {

  }

  getnametask(props) {
    console.log(props.target.id);
    this.setState({
     taskID:props.target.id
    })
  }
  /// remove
  removetask() {
    let config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`
      }
    };

    //req.body
    let task_ID = {
      taskID: this.state.taskID
    };
    axios.post("http://localhost:5000/api/deltask", task_ID, config).then(
      res => {
        this.setState({
          allTasks:res.data
        })
      }
    ).catch(err=>console.log(err))
    this.setState({
      newTask: ""
    })
  }
  /// LOGOUT
  logout() {
    Cookies.remove("token");
    this.setState({
      url: "http://localhost:3000/login"
    })
    window.location.href = this.state.url
  }
  //// RENDER
  render() {
    if (Cookies.get("token") === undefined) {
      return (
        <Login />
      )
    }
    return (
      <Fragment>

        <div classname="home">
          <div className="header">
            <div className="header_left">Task Manager</div>
            <div className="header_right">

              <div id="out">
                <span>Hi, {this.state.username}</span>
                <a href="/login"><button className="btn_logout" onClick={() => this.logout()}>logout</button></a>

              </div>
            </div>
          </div>
          <div className="footTer">
          <div className="myTask">My Task</div>
            {
              this.state.allTasks.map(task => {
                return (
                  <Fragment>
                    <div class="myTask_left">
                      <p id={task._id} onClick={(props) => this.getnametask(props)} >{task.name}</p>
                    </div>
                  </Fragment>
                );
              })}
            
            <div className="myTask_right"><br /><br /><br /><br />
              <label className="label">Task:</label>
              <input id="inPutTask" placeholder="Enter you task here" onChange={(e) => this.onChangetask(e)} /><br /><br />
              <button id="btn_remove" onClick={() => this.removetask()}>Remove</button>
              <button id="btn_update" onClick={() => this.updatetask()}>Update</button>
              <button type="button" id="btn_add" onClick={this.addtask}>Save</button>

            </div>
            <h5>Copyright by stephen Vuong</h5>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Home;