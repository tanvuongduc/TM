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
            user: "",
            tasks: [],
        };
    }
    async getData(){
        let data = {
            token: localStorage.getItem("token"),
        };
        if(!data){
            this.props.history.push("/login");
            return;
        }
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
    }
    componentDidMount = async () => {
        this.getData();
    };
    componentWillUnmount() {
        this.getData();
    }
    render() {
        if(!localStorage.getItem("token")){
            this.props.history.push("/login");
        }
        return (
            <Fragment>
                <NavBar username={this.state.user} />
                <Filter />
                <div className="container">

                    <div className="left">
                        <List tasks={this.state.tasks} />
                    </div>
                    <div className="right"></div>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(TaskManager);
