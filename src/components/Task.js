import React, { Component } from 'react';
import '../css/Task.css';
import TaskHeader from './TaskHeader';

import { withRouter } from 'react-router';
import { PropTypes } from 'prop-types';

class Task extends Component {
    
    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }
    render() {
        return (
            <div className="task">
                <TaskHeader state={this.props.location.state}/>
            </div>
        );
    }
}

export default withRouter(Task);