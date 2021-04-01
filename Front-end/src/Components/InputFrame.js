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
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            content: props.content,
            status: props.status,
            priority: props.priority
        };
    }
    onContentChange(ev){
        this.setState({
            content: ev.target.value
        })
    }
    onStatusChange(ev){
        this.setState({
            status: ev.target.value
        })
    }
    onPriorityChange(ev){
        this.setState({
            priority: ev.target.value
        })
    }
    async addNewTask() {
        console.log(document.getElementById('task').value)
        let data = {
            token: localStorage.getItem('token'),
            content: this.state.content,
            status: this.state.status,
            priority: this.state.priority
        };
        await axios.post(`http://localhost:3000/task/add`, data)
            .then((res) => {
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    render() {
        return (
            <div className="input-frame-container" >
                <div className="form">
                    <div>
                        <label className="pdr22">Task: &ensp; </label>
                        <input className="option" id="task" name="task" type="text" value={this.state.content} placeholder="Enter your task here" onChange={(ev)=>{this.onContentChange(ev)}} />
                    </div>
                    <div>
                        <label className="pdr10">Status: &ensp; </label>
                        <select className="option" value={this.state.status} onChange={(ev)=>this.onStatusChange(ev)}>
                            <option className="option" value={0}>Pending</option>
                            <option className="option" value={1}>Progress</option>
                            <option className="option" value={2}>Done</option>
                        </select>
                        <label className="pdr10 mgl20"> &ensp; &nbsp; &emsp; Priority:&ensp; </label>
                        <select className="option" value={this.state.priority} onChange={(ev)=>this.onPriorityChange(ev)}>
                            <option className="option" value={0}>Low</option>
                            <option className="option" value={1}>Medium</option>
                            <option className="option" value={2}>High</option>
                        </select>
                    </div>
                    <div> Created:&ensp; {this.props.task.createdAt} &emsp; By: &ensp; {this.props.task.createdBy}
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button className="buttonRight" name="Remove" type='button'>Remove</button>
                    </div>
                    <div className="col-4">
                        <button className="buttonRight" name="Clear" type='button'>Clear</button>
                    </div>
                    <div className="col-4">
                        <button className="buttonRight" name="Add new" type='button' onClick={() => this.addNewTask()}>Add new</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputFrame;