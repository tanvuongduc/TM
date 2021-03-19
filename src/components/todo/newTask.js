import React, { Component, Fragment } from 'react';
import {STATUS, PRIORITY} from '../todolist.component'
export default class NewTask extends Component {
    render() {
        return (
            <div className="new-task">
                <div className="add-tasks">
                    <label htmlFor="input-task">Task:</label>
                    <input type="text" placeholder="Enter your task here" id="input-task" />
                </div>
                <div className="status-priority">
                    <form className="status">
                        <label htmlFor="status">Status:</label>
                        <select id="status" name="status" >
                            <option value={STATUS.PENDING} >Pending</option>
                            <option value={STATUS.PROCESS}>Process</option>
                            <option value={STATUS.DONE} >Done</option>
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
                </div>
                <div className="created">
                    <p>Created:
                        <span style={{ marginLeft: "5px" }}> wed, 2021-03-17</span>
                        <span> By:</span>
                        <span style={{ marginLeft: "30px" }}>  you</span>
                    </p>
                </div>
                
            </div>
    
        )
    }
}
