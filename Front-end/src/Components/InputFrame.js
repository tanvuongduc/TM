import React, { Component } from 'react';
import "../CSS/taskManager.css";
class InputFrame extends Component {
    render() {
        return (
            <div>
                    <div className="form">
                        <p>
                            <label className="pdr22">Task:</label>
                            <input id="task" name="task" type="text" placeholder="Enter your task here" />
                        </p>
                        <p>
                            <label className="pdr10">Status:</label>
                            <select>
                                <option>Pending</option>
                                <option>Vân vân</option>
                                <option>Mây mây</option>
                            </select>
                            <label className="pdr10 mgl20">Priority:</label>
                            <select>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </p>
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