import React, { Component } from 'react';
import axios from 'axios'
import "../CSS/InputFrame.css";

// var today = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sun";
// weekday[1] = "Mon";
// weekday[2] = "Tue";
// weekday[3] = "Wed";
// weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "Sat";
// var date = weekday[today.getDay()] + ', ' + today.getFullYear() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getDate();
class InputFrame extends Component {
    componentDidMount() {
        console.log(this.props.task)
    }
    async btnClear() {
        let data = {
            content: "",
            status: 0,
            priority: 0,
            createdBy: "",
            createdAt: Date.now()

        }
        await this.props.update(data)
    }
    async btnUpdate() {
        let data = {
            content: this.props.task.content,
            status: this.props.task.status,
        }
        await this.props.update(data)
    }
    async btnAddNew() {
        let data = {
            _id: this.props.staff,
            token: localStorage.getItem('token'),
            content: this.props.task.content,
            status: this.props.task.status,
            priority: this.props.task.priority
        };
        console.log(data)
        if(this.props.staff){
            await axios.post(`http://localhost:3000/task/addtaskforid`, data)
            .then((res) => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            return
        }
        await axios.post(`http://localhost:3000/task/add`, data)
            .then((res) => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    async onContentChange(ev) {
        let data = {
            content: ev.target.value,
            status: this.props.task.status,
            priority: this.props.task.priority,
            createdBy: this.props.task.createdBy,
            createdAt: this.props.task.createdAt

        }
        await this.props.update(data)
    }
    async onStatusChange(ev) {
        let data = {
            content: this.props.task.content,
            status: ev.target.value,
            priority: this.props.task.priority,
            createdBy: this.props.task.createdBy,
            createdAt: this.props.task.createdAt
        }

        await this.props.update(data)
    }
    async onPriorityChange(ev) {
        let data = {
            content: this.props.task.content,
            status: this.props.task.status,
            priority: ev.target.value,
            createdBy: this.props.task.createdBy,
            createdAt: this.props.task.createdAt
        }
        console.log(data)
        await this.props.update(data)
    }

    render() {
        return (
            <div className="input-frame-container" >
                <div className="form">
                    <div>
                        <label className="pdr22">Task: &ensp; </label>
                        <input className="option" id="task" name="task" type="text" value={this.props.task.content ? this.props.task.content : ""} placeholder="Enter your task here" onChange={(ev) => { this.onContentChange(ev) }} />
                    </div>
                    <div>
                        <label className="pdr10">Status: &ensp; </label>
                        <select className="option" value={this.props.task.status ? this.props.task.status : 0} onChange={(ev) => this.onStatusChange(ev)}>
                            <option className="option" value={0}>Pending</option>
                            <option className="option" value={1}>Progress</option>
                            <option className="option" value={2}>Done</option>
                        </select>
                        <label className="pdr10 mgl20"> &ensp; &nbsp; &emsp; Priority:&ensp; </label>
                        <select className="option" value={this.props.task.priority ? this.props.task.priority : 0} onChange={(ev) => this.onPriorityChange(ev)}>
                            <option className="option" value={0}>Low</option>
                            <option className="option" value={1}>Medium</option>
                            <option className="option" value={2}>High</option>
                        </select>
                    </div>
                    <div> Created:&ensp; {this.props.task.createdAt ? this.props.task.createdAt : Date.now()} &emsp; By: &ensp; {this.props.task.createdBy ? this.props.task.createdBy : ""}
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button className={!this.props.task.createdBy ? "buttonHide" : "buttonRight"} name="Remove" type='button'>Remove</button>
                    </div>
                    <div className="col-4">
                        <button className={!this.props.task.createdBy ? "buttonHide" : "buttonRight"} name="Clear" type='button' onClick={() => this.btnClear()}>Clear</button>
                    </div>
                    <div className="col-4">
                        <button className={!this.props.task.createdBy ? "buttonNone" : "buttonRight"} name="Update" type='button' onClick={() => this.btnUpdate()}>Update</button>
                        <button className={this.props.task.createdBy ? "buttonHide" : "buttonRight"} name="Add new" type='button' onClick={() => this.btnAddNew()}>Add new</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputFrame;