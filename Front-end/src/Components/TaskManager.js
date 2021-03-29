import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import "../CSS/taskManager.css";
class TaskManager extends Component {
    render() {
        return (
            <Fragment>
            <div className="container">
                <h2>My Tasks</h2>
                <div>
                    <p className="input">
                        <label className="pdr10">Sort by:</label>
                        <select>
                            <option>Status</option>
                        </select>
                        <label className="pdr10 mgl20">Direction:</label>
                        <select>
                            <option>DESC</option>
                        </select>
                        <label className="pdr10 mgl300">Filter:</label>
                        <input type="checkbox"></input>
                        <label className="pdr10 mgl20">From:</label>
                        <select>
                            <option>21-03-17</option>
                        </select>
                        <label className="pdr10 mgl20">To:</label>
                        <select>
                            <option>21-04-17</option>
                        </select>
                        <button className="buttonTop" name="apply">Apply</button>
                    </p>
                </div>
                <div className="left">
                <div className="row">
                    <table>
                        <tbody>
                            <tr className="ngan bgc">
                                <td className="col-1 center">1.</td>
                                <td className="col-10">Eat (No background means priority medium, No icon means status pending)</td>
                                <td className="col-1" />
                            </tr>
                            <tr className="ngan bgc">
                                <td className="col-1 center">2.</td>
                                <td className="col-10">Code (This is hovering; Check icon means status done)</td>
                                <td className="col-1" />
                            </tr>
                            <tr className="ngan bgc">
                                <td className="col-1 center">3.</td>
                                <td className="col-10">Code (This is hovering; Check icon means status done)</td>
                                <td className="col-1" />
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div className="chia" />
                <div className="right">
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
                                <button className="buttonRight" name="Remove">Remove</button>
                            </div>
                            <div className="col-4">
                                <button className="buttonRight" name="Clear">Clear</button>
                            </div>
                            <div className="col-4">
                                <button className="buttonRight" name="Add new">Add new</button>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>

        );
    }
}

export default withRouter(TaskManager);