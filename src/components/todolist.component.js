import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Task from './todo/task';



export default class Todolist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            username: '',

            taskInput: '',
            status: '2',
            priority: '3',

            todolist: [],

            time: '',

            direction: 'insc'
        }

    }
    ramdomIdTodo() {
        return Math.random().toString(35).substr(3, 34);
    }

    //default run
    componentDidMount() {
        let url = new URL(window.location.href);
        this.setState({
            id: url.searchParams.get('id'),
            username: url.searchParams.get('username')
        })
        this.onShowTodoList(url.searchParams.get('id'));
        this.timeText();
    }

    // process display: name login -- start
    struc = () => {
        let url = new URL(window.location.href);
        this.setState({
            id: url.searchParams.get('id'),
            username: url.searchParams.get('username')
        })
        return {
            id: url.searchParams.get('id'),
            username: url.searchParams.get('username')
        }
        // console.log(url.searchParams.get('id'))
    }

    // process display: name login -- end

    // show todo lsit-- start
    onShowTodoList = (id = null) => {
        if(id === null){
            axios.get('http://localhost:4000/todolist/' + this.state.id)
            .then(res => {
                this.setState({
                    todolist: res.data
                })
                console.log(res.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        }else{
            axios.get('http://localhost:4000/todolist/' + id)
            .then(res => {
                this.setState({
                    todolist: res.data
                })
                console.log(res.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        } 
    }
    task = () => {
        return this.state.todolist.map((val, i) => {
            return <Task data={val} key={i}
                onClick={this.test}
            />;
        });
    }
    test() {
        console.log('hello')
    }
    // show todo lsit-- END

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


    // get day
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

    // delete --start

    // delete --end


    // sort
    sortINSC() {
        this.setState(prevState => {
            this.state.todolist.sort((a) => (a.task))
        });
    }

    sortDESC() {
        let arr = this.state.todolist
        this.setState({
            todolist: arr.sort().reverse()
        })
    }

    onChangeDirection(e) {
        this.setState({
            direction: e.target.value
        })
    }
    btnApply() {
        let direc = this.state.direction;
        if (direc === 'insc') {
            this.sortINSC()
        } else {
            this.sortDESC()
        }
    }




    render() {
        return (
            <div className="task-todolist">

                <div className="heading">
                    <p>Task Manager</p>
                    <div className="user">
                        <p>Hi,
                  <span className="nameUser">{this.state.username}</span>
                            <i className="fas fa-sort-down" />
                        </p>
                        <div className="logout">
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <p>My Task</p>
                <div className="filter-all">
                    <form className="sort">
                        <label htmlFor="sort">Sort by:</label>
                        <select id="sort" name="sort">
                            <option value="status">Status</option>
                            <option value="priority">Priority</option>
                        </select>
                    </form>
                    <form className="direction">
                        <label htmlFor="direction">Direction:</label>
                        <select id="direction" name="direction"
                            value={this.state.direction}
                            onChange={(e) => this.onChangeDirection(e)}
                        >
                            <option value="desc">DESC</option>
                            <option value="insc">INSC</option>
                        </select>
                    </form>
                    <form className="filter">
                        <label htmlFor="filter"> Filter</label>
                        <input type="checkbox" id="filter" name="filter" defaultValue="filter" />
                    </form>
                    <form className="day-from">
                        <label htmlFor="day-from">From:</label>
                        <select id="day-from" name="day-from">
                            <option value="23-03-17">23-03-17</option>
                            <option value="24-03-17">24-03-17</option>
                            <option value="25-03-17">25-03-17</option>
                        </select>
                    </form>
                    <form className="day-to">
                        <label htmlFor="day-to">To:</label>
                        <select id="day-to" name="day-to">
                            <option value="23-04-17">23-04-17</option>
                            <option value="24-05-17">24-05-17</option>
                            <option value="25-06-17">25-06-17</option>
                        </select>
                    </form>
                    <input className="btn-apply" type="button" defaultValue="Apply"
                        onClick={() => this.btnApply()}
                    />
                </div>
                <div className="my-tasks">
                    <div className="content-l-r">
                        <div className="content-left">
                            <div className="list-tasks">
                                <ul className="tasks">
                                    {this.task()}
                                </ul>
                            </div>
                        </div>
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
                    </div>
                </div>
            </div>
        )
    }
}