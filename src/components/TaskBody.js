import React, { useState } from 'react';
import '../css/TaskBody.css';
import TaskList from './TaskList';
import TaskProcess from './TaskProcess';
import { Col } from 'reactstrap';


const TaskBody = ({
    taskList, isLoading,
    isError, onReloadpage, userID
}) => {

    const [taskPackage, setTaskPackage] = useState({
        userID: userID,
        taskname: '',
        priority: '',
        status: '',
        createdDate: '',
        _id: ''
    });

    const handleGetTask = task => {
        setTaskPackage(task);
    }

    const handleEditTask = taskname => {
        setTaskPackage(state => ({
            ...state,
            taskname
        }));
    }

    const handleResetPackage = () => {
        setTaskPackage({
            userID: userID,
            taskname: '',
            priority: '',
            status: '',
            createdDate: '',
            _id: ''
        });
    }

    return (
        <div className="taskBody">
            <p className="taskBody-title">My Tasks</p>
            <div className="taskBody-table">
                <TaskList taskList = {taskList} onGetTask={handleGetTask}
                isLoading={isLoading} isError={isError}
                 />
                <Col xl="1" lg="1" md="1" className="split">
                    <div className="split-bar"></div>
                </Col>
                <TaskProcess onEditTask={handleEditTask} onResetPackage = {handleResetPackage}
                   onReloadpage={onReloadpage} taskPackage = {taskPackage}
                />
            </div>
        </div>
    );
};

export default TaskBody;