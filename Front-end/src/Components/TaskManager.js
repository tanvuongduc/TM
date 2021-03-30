import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import "../CSS/taskManager.css";
import Filter from './Filter';
import List from './List';
import InputFrame from './InputFrame';
class TaskManager extends Component {
    render() {
        return (
            <Fragment>
            <div className="container">
                <Filter/>
                <div className="left">
                    <List/>
                </div>
                <div className="right">
                    <InputFrame/>
                </div>
            </div>
            </Fragment>

        );
    }
}

export default withRouter(TaskManager);