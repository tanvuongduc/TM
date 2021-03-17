import React, { Component } from 'react';
import axios from 'axios';
import Signed from './todo/signed';


export default class Todolist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            taskList: ''
        }
    }
    ramdomIdTodo() {
        return Math.random().toString(35).substr(3, 34);
    }
    inputTask(e) {
        this.setState({
            task: e.target.value
        })
    }
    componentDidMount() {
        axios.get('http://localhost:4001/todolist/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    password: response.data.password,
                    taskList: response.data.taskList
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleSubmit(e) {
        e.preventDefault();
        let obj = {
            content: this.state.task
        }
        axios
            .post(
                'http://localhost:4001/todolist/add' + this.props.match.params.id, obj
            )
            .then(res => console.log(res.data))
    }

    test() {
        console.log(this.props.id)
    }



    render() {
        return (
            <div className="task-todolist">
                <div className="heading">
                    <p>Task Manager</p>
                    <div className="user">
                        <p>Hi,
                    {/* <span className="nameUser">Taann</span> */}
                            <Signed name={'Huy'}></Signed>
                            <i className="fas fa-sort-down"></i>
                        </p>
                        <div className="logout">
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <div className="my-tasks">
                    <p>My Tasks</p>
                    <div className="content-l-r">
                        <div className="content-left">
                            <div className="list-tasks">
                                <ul className="tasks">
                                    <li className="task">Eat</li>
                                    <li className="task">Sleep</li>
                                    <li className="task">Code</li>
                                    <li className="task">Write</li>
                                    <li className="task">Watch TV</li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-right">
                            <div className="add-tasks">
                                <label for="input-task">Task</label>
                                <input type="text" placeholder="Enter your task here" id="input-task"
                                    value={this.state.task}
                                    onChange={(e) => this.inputTask(e)}
                                />
                            </div>
                            <div className="edit-delete-add">
                                <input type="button" value="Delete" />
                                <input type="button" value="Clear" />
                                <input type="button" value="Add new"
                                    onClick={(e) => this.handleSubmit(e)}
                                />
                            </div>
                            <button onClick={() => this.test()}>test</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}