import React, { Component } from 'react';
import "../CSS/InputFrame.css";

var today=new Date();
var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
var date = weekday[today.getDay()]+', '+today.getFullYear() +' - '+(today.getMonth()+1)+' - '+today.getDate();
class InputFrame extends Component {
    render() {
        return (
            <div className="if" >
                    <div className="form">
                        <p>
                            <label className="pdr22">Task:</label>
                            <input className="option" id="task" name="task" type="text" placeholder="Enter your task here" />
                        </p>
                        <p>
                            <label className="pdr10">Status:</label>
                            <select  className="option">
                                <option className="option">Pending</option>
                                <option className="option">Progress</option>
                                <option className="option">Done</option>
                            </select>
                            <label className="pdr10 mgl20">Priority:</label>
                            <select className="option">
                                <option className="option">Low</option>
                                <option className="option">Medium</option>
                                <option className="option">High</option>
                            </select>
                        </p>
                        <div> Created: {date} 
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