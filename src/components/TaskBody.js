import React, { useState } from 'react';
import '../css/TaskBody.css';
import TaskList from './TaskList';
import TaskProcess from './TaskProcess';
import { Col } from 'reactstrap';


const TaskBody = ({
    taskList, isLoading,
    isError, onReloadpage
}) => {
    const [taskEdit, setTaskEdit] = useState('');
    const handleEditTask = value => {
        setTaskEdit(value);
    }

    return (
        <div className="taskBody">
            <p className="taskBody-title">My Tasks</p>
            <div className="taskBody-table">
                <TaskList taskList = {taskList} onEditTask={handleEditTask}
                isLoading={isLoading} isError={isError}
                onReloadpage = {onReloadpage} />
                <Col xl="1" lg="1" md="1" className="split">
                    <div className="split-bar"></div>
                </Col>
                <TaskProcess taskEdit={taskEdit} onEditTask={handleEditTask}/>
            </div>
        </div>
    );
};

export default TaskBody;