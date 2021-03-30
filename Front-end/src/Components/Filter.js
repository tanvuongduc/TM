import React, { Component } from 'react';
import "../CSS/taskManager.css";
class Filter extends Component {
    render() {
        return (
            <div>
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
                        <button className="buttonTop" name="apply" type='button'>Apply</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Filter;