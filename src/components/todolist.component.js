import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Task from './todo/task';



export default class Todolist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id:'',
            username: '',
            taskInput:'mmmmm',
            todolist: [],
        }
       
    }
    ramdomIdTodo() {
        return Math.random().toString(35).substr(3, 34);
    }
    
   

    // process display: name login -- start

    struc = () =>{
        let url = new URL(window.location.href);
        this.setState({
            id: url.searchParams.get('id'),
            username: url.searchParams.get('username')
        })
        console.log(url.searchParams.get('id'))
    }
    
    // process display: name login -- end

    // show todo lsit-- start
            onShowTodoList = () =>{
                axios.get('http://localhost:4000/todolist/'+this.state.id)
                    .then(res => {
                        this.setState({
                            todolist: res.data
                        })
                        console.log(res.data)
                    })
                    .catch(function(error){
                        console.log(error);
                    })
            }
            task(){
                return this.state.todolist.map(function(val, i){
                    return <Task data={val} key={i} 
                            clickMethod ={this.test}
                    />;
                });
            }
    // show todo lsit-- END

    // add task --start
            onChangeTask(e){
                this.setState({
                    taskInput: e.target.value
                });
            }
            addTask(e){
                e.preventDefault();
                const obj={
                    _id: this.ramdomIdTodo(),
                    id_sub: this.state.id,
                    task: this.state.taskInput,
                    status: 'conplete',
                    priority: 'high'
                }
                axios.post('http://localhost:4000/todolist/add', obj)
                    .then(res => console.log(res.data));
                this.setState({
                    task: ''
                });
                this.onShowTodoList()
            }
    // add task --end
            test(){
                console.log('hello my freind')
            }
    // delete --start

    // delete --end





    render() {
        return (
            <div className="task-todolist">
                <button onClick={()=>this.struc()}>test</button>
                <button onClick={this.onShowTodoList()}></button>
                
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
                            <option value="complete">Complete</option>
                            <option value="priority">Priority</option>
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
                    <input className="btn-apply" type="button" defaultValue="Apply" />
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
                                        onChange={(e)=>this.onChangeTask(e)}
                                />
                                
                            </div>
                            <form className="status">
                                <label htmlFor="status">Status:</label>
                                <select id="status" name="status">
                                    <option value="pending">Pending</option>
                                    <option value="pending">Pending</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </form>
                            <form className="priority">
                                <label htmlFor="priority">Priority:</label>
                                <select id="priority" name="priority">
                                    <option value="high">High</option>
                                    <option value="midium">Midium</option>
                                    <option value="low">Low</option>
                                </select>
                            </form>
                            <div className="created">
                                <p>Created:
                      <span>wed, 2021-03-17</span>
                                    <span>By:</span>
                                    <span>you</span>
                                </p>
                            </div>
                            <div className="edit-delete-add">
                                <input type="button" defaultValue="Delete" />
                                <input type="button" defaultValue="Clear" />
                                <input type="button" defaultValue="Add new" onClick={(e)=>this.addTask(e)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}