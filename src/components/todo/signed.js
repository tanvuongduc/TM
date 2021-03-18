import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Todolist from './todolist.component';


export default class AddNew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskInput: '',
            status: '2',
            priority: '3',
        }
        
    }
    componentDidMount() {
        this.timeText();
    }

    // add task --start
    onChangeTask(e) {
        this.setState({
            taskInput: e.target.value
        });
    }
    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }
    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        });
    }
    addTask(e) {
        e.preventDefault();
        const obj = {
            _id: this.ramdomIdTodo(),
            id_sub: this.state.id,
            task: this.state.taskInput,
            status: this.state.status,
            priority: this.state.priority
        }
        axios.post('http://localhost:4000/todolist/add', obj)
            .then(res => console.log(res.data));
        this.setState({
            task: ''
        });
        this.onShowTodoList()
    }
    // add task --end

    timeText() {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Satuday'];
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var day = days[today.getDay()];
        today = day + ' , ' + dd + '-' + mm + '-' + yyyy;
        this.setState({
            time: today
        });

    }


    render() {
        return (
            <Fragment>

                <div className="content-right">
                    <div className="add-tasks">
                        <label htmlFor="input-task">Task:</label>
                        <input type="text" placeholder="Enter your task here" id="input-task"
                            value={this.state.inputTask}
                            onChange={(e) => this.onChangeTask(e)}
                        />

                    </div>
                    <form className="status">
                        <label htmlFor="status">Status:</label>
                        <select id="status" name="status" value={this.state.status} onChange={(e) => this.onChangeStatus(e)}>
                            <option value="1">Done</option>
                            <option value="2">Dependency</option>
                            <option value="3">Process</option>
                        </select>
                    </form>
                    <form className="priority">
                        <label htmlFor="priority">Priority:</label>
                        <select id="priority" name="priority" value={this.state.priority} onChange={(e) => this.onChangePriority(e)}>
                            <option value="1">High</option>
                            <option value="2">Midium</option>
                            <option value="3">Low</option>
                        </select>
                    </form>
                    <div className="created">
                        <p>Created:
                      <span>{this.state.time}</span>
                            <span>By:</span>
                            <span>{this.state.username}</span>
                        </p>
                    </div>
                    <div className="edit-delete-add">
                        <input type="button" defaultValue="Delete" />
                        <input type="button" defaultValue="Clear" />
                        <input type="button" defaultValue="Add new" onClick={(e) => this.addTask(e)} />
                    </div>
                </div>

            </Fragment>
        )
    }
}
