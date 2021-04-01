import React, { Component } from 'react';
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
        this.state = {

        };
    }
    render() {
        return (
            <div className="input-frame-container" >
                <div className="form">
                    <div>
                        <label className="pdr22">Task: &ensp; </label>
                        <input className="option" id="task" name="task" type="text" placeholder="Enter your task here" value={this.props.task.content}/>
                    </div>
                    <div>
                        <label className="pdr10">Status: &ensp; </label>
                        <select className="option" value={this.props.task.status}>
                            <option className="option" value={0}>Pending</option>
                            <option className="option" value={1}>Progress</option>
                            <option className="option" value={2}>Done</option>
                        </select>
                        <label className="pdr10 mgl20"> &ensp; &nbsp; &emsp; Priority:&ensp; </label>
                        <select className="option" value={this.props.task.priority}>
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
                        <button className="buttonRight" name="Add new" type='button'>Add new</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputFrame;