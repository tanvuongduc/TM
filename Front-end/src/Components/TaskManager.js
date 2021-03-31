import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import "../CSS/taskManager.css";
import Filter from "./Filter";
import List from "./List";
import axios from "axios";
import InputFrame from "./InputFrame";
import NavBar from "./NavBar";
class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Fragment>
        <NavBar username={this.state.user} />
        <Filter />
            <List tasks={this.state.tasks} />
      </Fragment>
    );
  }
}

export default withRouter(TaskManager);
