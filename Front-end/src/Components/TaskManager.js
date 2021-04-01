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
        let tasks = res.data.tasks;
        if (user) {
          this.setState({
            user: user,
            tasks: tasks,
          });
        } else {
          localStorage.setItem("token", '')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
        <Filter  updateTasks={(tasks,sort) => this.updateTasks(tasks,sort)} tasks={this.state.tasks} sort={this.state.sort}/>
        <List tasks={this.state.tasks} />
      </Fragment>
    );
  }
}

export default withRouter(TaskManager);
