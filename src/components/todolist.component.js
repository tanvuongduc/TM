import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Signed from './todo/signed';
import {Parent} from './parent.component'
import NewTask from './todo/newTask'




export const STATUS = {
    PENDING: 0,
    DONE: 1,
    PROCESS: 2
}

export const PRIORITY = {
    HIGH: 0,
    LOW: 1,
    MEDIUM: 2
}

export const CONDITION_SORT = {
    PRIORITY: 1,
    STATUS: 2
}

export default class Todolist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            taskList: [
                {
                    id: 1,
                    status: 1,
                    priority: 1,
                    createdAt: new Date(),
                    userCreated: 'you',
                    name: 'tập thể dục',
                    description: 'chạy'
                },
                {
                    id: 2,
                    status: 0,
                    priority: 0,
                    createdAt: new Date(),
                    userCreated: 'you',
                    name: 'ăn sáng',
                    description: 'bánh mì , mì tôm'
                },
                {
                    id: 3,
                    status: 1,
                    priority: 1,
                    createdAt: new Date(),
                    userCreated: 'you',
                    name: 'đi làm',
                    description: 'hmm'
                }, {
                    id: 4,
                    status: 0,
                    priority: 1,
                    createdAt: new Date(),
                    userCreated: 'you',
                    name: 'ăn tối',
                    description: 'random'
                },
                {
                    id: 5,
                    status: 1,
                    priority: 1,
                    createdAt: new Date(),
                    userCreated: 'you',
                    name: 'đi ngủ',
                    description: '7h'
                }
            ],
            filter: {
                status: undefined,
                from: undefined,
                to: undefined,
                priority: undefined,
                s: ''
            },
            showListTask: undefined,
            conditionSort: undefined,
            order: 'INSC',
            newTask: [
                {
                    id: undefined,
                    status: 1,
                    priority: 1,
                    name: '',
                    description: ''
                }
            ]
        }
    }
    addNewClick = () => {
        const taskList = [...this.state.taskList, { id: this.state.taskList.length, title: 'New task' }]
        this.setState({
            taskList
        })
    }
    handleAddNew() {
        console.log(this.state.newTask)
        this.state.newTask.push(
            {
                id: undefined,
                status: 1,
                priority: 1,
                name: '',
                description: ''
            }
        )
        this.forceUpdate();
    }
    handleClear() {
        console.log(this.state.newTask)
        this.state.newTask = [
            {
                id: undefined,
                status: 1,
                priority: 1,
                name: '',
                description: ''
            }
        ]
        this.forceUpdate();
    }
    ramdomIdTodo() {
        return Math.random().toString(35).substr(3, 34);
    }
    inputTask(e) {
        this.setState({
            task: e.target.value
        })
    }
    filterTask = () => {
        const filter = this.state.filter;
        const result = this.state.taskList.map(task => {
            if (filter.status && task.status != filter.status) return null;
            if (filter.priority && task.status != filter.priority) return null;
            if (filter.from && task.createdAt < filter.from) return null;
            if (filter.to && task.createdAt > filter.to) return null;
            if (task.name.search(filter.s) == -1 && task.description.search(filter.s) == -1) return null;
            return task;
        })
        console.log(result)
        return result.filter(function (el) {
            return el != null;
        });
    }
    handleFilter = () => {
        this.state.filter.s = '222';
        this.state.showListTask = this.filterTask()
        console.log(this.state.showListTask)
        this.forceUpdate()
    }
    componentDidMount() {
        /* axios.get('http://localhost:4000/todolist/edit/' + this.props.match.params.id)
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
             })*/

    }
    handleSort = (e) => {

        this.state.conditionSort = e.target.value
        console.log(e.target.value)
        this.state.showListTask.sort((task1, task2) => {
            if (this.state.conditionSort == CONDITION_SORT.PRIORITY) {
                if (this.state.order == 'INSC' /*DESC*/) {
                    if (task1.priority > task2.priority) return 1;
                    else return -1;
                }
            }
        })
        this.state.showListTask.sort((task1, task2) => {
            if (this.state.conditionSort == CONDITION_SORT.STATUS) {
                if (this.state.order == 'INSC' /*DESC*/) {
                    if (task1.status > task2.status) return 1;
                    else return -1;
                }
            }
        })
        console.log(this.state.showListTask)
    }

    styleFunction(task) {
        if(task.status == STATUS.PENDING) return "background-color: lightred";
        else if(task.status == STATUS.DONE) return "background-color: lightgreen";
        else if(task.status == STATUS.PROCESS) return "background-color: white";
    }
    handleSubmit(e) {
        e.preventDefault();
        let obj = {
            content: this.state.task
        }
        axios
            .post(
                'http://localhost:4000/todolist/add' + this.props.match.params.id, obj
            )
            .then(res => console.log(res.data))
    }

    test() {
        console.log(this.props.id)
    }







    render() {
        this.state.showListTask = this.state.taskList;

        return (
            <div className="task-todolist">
                <div className="heading">
                    <p>Task Manager</p>
                    <div className="user">
                        <p>Hi,
                            <span className="nameUser">Tan</span>
                            <i className="fas fa-sort-down" />
                        </p>
                        <div className="logout">
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <div className="header-mytask">
                    <h1 id="task1">My Tasks</h1>
                </div>
                <div className="filter-all">
                    <form className="sort">
                        <label htmlFor="sort">Sort by:</label>
                        <select id="sort" name="sort" onChange={e => this.handleSort(e)}>
                            <option value={CONDITION_SORT.STATUS}>Status</option>
                            <option value={CONDITION_SORT.PRIORITY}>Priority</option>
                        </select>
                    </form>
                    <form className="direction">
                        <label htmlFor="direction">Direction:</label>
                        <select id="direction" name="direction">
                            <option value="desc">DESC</option>
                            <option value="insc">INSC</option>
                        </select>
                    </form>
                    <form className="filter">
                        <label htmlFor="filter"> Filter:</label>
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
                    <input className="btn-apply" type="button" defaultValue="Apply" />
                </div>
                <div className="my-tasks">
                    <p>My Tasks</p>
                    <div className="content-l-r">
                        <div className="content-left">
                            <div className="list-tasks">
                                <ul className="tasks">
                                    {this.state.showListTask && this.state.showListTask.map((task) => (
                                        <li 
                                            className={"task" + " status"+task.status} 
                                            key={task.id}
                                        >
                                            {task.name}({task.description})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="content-right">
                            {this.state.newTask.map((task, index) => {
                                return <NewTask key={index}

                                />
                            })}
                            
                            <div className="edit-delete-add">
                            <button id="delete" onClick={e=>this.handleDelete()}>Delete</button>
                            <button id="clear" onClick={e => this.handleClear()}>clear</button>
                            <button id="addnew" onClick={e => this.handleAddNew()}>add new</button>

                            </div>
                                                    
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}