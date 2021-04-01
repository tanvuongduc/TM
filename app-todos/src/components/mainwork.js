import React, { Component, Fragment } from 'react';

class Work extends Component {
    render() {
        return (
            <Fragment>
                <div className='mainwork'>
                    <div className='navbar'>
                        <div className='navbarleft'>
                            <h5>Task Manager</h5>
                        </div>
                        <div className='navbarright'>
                            <h5>Hi, Tun<span>&#9660;</span></h5>
                        </div>
                    </div>
                    <div className='header'>
                        <h5>My Tasks</h5>
                    </div>
                    <div className='menu-control'>
                        <div className='component'>
                            <h5>Sort by:
                                <select>
                                    <option>Status</option>
                                    <option>Status</option>
                                </select>
                            </h5>
                        </div>
                        <div className='component'>
                            <h5>Direction:
                                <select>
                                    <option>DESC</option>
                                    <option>DESC</option>
                                </select>
                            </h5>
                        </div>
                        <div className='component'>
                            <h5>Filter:
                                <label>
                                    <input type="radio" name="radio" value=""/>
                                </label>
                            </h5>
                        </div>
                        <div className='component'>
                            <h5>From:
                                <select>
                                    <option>21-03-17</option>
                                    <option>21-03-17</option>
                                </select>
                            </h5>
                        </div>
                        <div className='component'>
                            <h5>To:
                                <select>
                                    <option>21-04-17</option>
                                    <option>21-04-17</option>
                                </select>
                            </h5>
                        </div>
                        <div className='component'>
                            <button type='submit'>Apply</button>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='ctn-left'>
                            <div className='ctn-left-content'>
                                <div className='content'>
                                    <h5>1.&emsp;&emsp;&emsp;Eat (No background means priority: medium; No icon means status: pending)</h5>
                                </div>
                                <div className='content'>
                                    <h5>2.&emsp;&emsp;&emsp;Sleep (This is focusing; Dash icon means status: progress)</h5>
                                </div>
                                <div className='content'>
                                    <h5>3.&emsp;&emsp;&emsp;Code (This is hovering; Check icon means status: done)</h5>
                                </div>
                                <div className='content'>
                                    <h5>4.&emsp;&emsp;&emsp;Repeat (This background means priority: low)</h5>
                                </div>
                                <div className='content'>
                                    <h5>5.&emsp;&emsp;&emsp;Infinity loop (This background means priority: high)</h5>
                                </div>
                            </div>
                        </div>
                        <div className='ctn-right'>
                            <div className='ctn-right-top'>
                                <form action='' method=''>
                                    <div className='add-task'>
                                        <label>Task:</label>
                                        <input placeholder='Enter your task here'></input>
                                    </div>
                                    <div className='add-task'>
                                        <label>Status:&emsp;&emsp;&emsp;</label>
                                        <select>
                                            <option>Pending</option>
                                            <option>Pending</option>
                                        </select>&emsp;&emsp;&emsp;
                                        <label>Priority:&emsp;&emsp;&emsp;</label>
                                        <select>
                                            <option>High</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                    <div className='add-task'>
                                        <label>Created: </label>
                                        <a>web, 2021-03-17</a>&emsp;&emsp;
                                        <label>By: </label>
                                        <a>you</a>
                                    </div>
                                    <button type='reset'>Clear</button>
                                    <button type='submit'>Add new</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        <h5>Copyright by stephen Vuong</h5>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Work;