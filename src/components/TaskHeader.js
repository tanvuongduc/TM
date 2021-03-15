import React, { Component } from 'react';
import '../css/TaskHeader.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class TaskHeader extends Component {
    
    render() {
        const {username} = this.props.state;
        return (
            <div className="taskHeader">
                <div className="taskHeader-title">
                    Task Manager
                </div>
                <div className="welcomeUser">
                    <span>
                        {`Hi, ${username}`}
                    </span>
                    <ExpandMoreIcon />
                    
                </div>
            </div>
        );
    }
}

export default TaskHeader;