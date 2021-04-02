import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import "../CSS/taskManager.css";
import Filter from "./Filter";
import List from "./List";
import axios from "axios";
import NavBar from "./NavBar";
class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        sortBy: "status",
        direction: "ASC"
      },
      user: "",
      tasks: [],
      staffs: {},
      permission: 0,
      staffName: "",
    };
  }
  componentDidMount = async () => {
    let data = {
      token: localStorage.getItem("token"),
    };
    await axios
      .post(`http://localhost:3000/task`, data)
      .then((res) => {
        console.log(res.data);
        let user = res.data.user;
        let permission = res.data.permission;
        let tasks = res.data.tasks;
        let staffs = res.data.staffs;
        if (user) {
          this.setState({
            user: user,
            tasks: tasks,
            staffs: staffs,
            permission: permission
          });
        } else {
          localStorage.setItem("token", '')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  async getTasksOfStaff(id){
    let data = {
      token: localStorage.getItem("token"),
      _id: id
    };
    await axios
      .post(`http://localhost:3000/task/get`, data)
      .then((res) => {
        if (res.data.staffName){
          this.setState({
            staffName: res.data.staffName,
            tasks: res.data.tasks
          })
        }
        else{
          console.log(res)
        }
      })
      .catch(err=>console.log(err))
  }


  updateTasks(tasks, sort) {
    this.setState({
      tasks: tasks,
      sort: sort
    })
  }
  render() {
    if (!localStorage.getItem("token")) {
      this.props.history.push('login')
    }
    return (
      <Fragment>
        <NavBar username={this.state.user} />
        <Filter staffName={this.state.staffName} updateTasks={(tasks, sort) => this.updateTasks(tasks, sort)} tasks={this.state.tasks} sort={this.state.sort} />
        <List tasks={this.state.tasks} staffs={this.state.staffs} permission={this.state.permission} getTasksOfStaff={(id)=>this.getTasksOfStaff(id)}/>
      </Fragment>
    );
  }
}

export default withRouter(TaskManager);
