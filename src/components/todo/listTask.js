import React from 'react';

function listTask(props) {
    return (
        <div className="list-tasks">
            <ul className="tasks">
                <li className="task">{props.listTask}</li>
            </ul>
        </div>
    )
    }
    export default listTask;