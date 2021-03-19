import React, { useState } from 'react';
import '../css/TaskBody.css';
import TaskList from './TaskList';
import TaskProcess from './TaskProcess';
import { Col } from 'reactstrap';
import FilterBar from './FilterBar';

const TaskBody = ({
    taskList, isLoading, username,
    isError, onReloadpage, userID
}) => {

    const [taskPackage, setTaskPackage] = useState({
        userID: userID,
        taskName: '',
        priority: 'medium',
        status: 'pending',
        createdDate: '',
        _id: ''
    });

    const handleGetTask = task => {
        setTaskPackage(task);
    }

    const handleEditTask = taskName => {
        setTaskPackage(state => ({
            ...state,
            taskName
        }));
    }

    const handleChangeStatus = status => {
        setTaskPackage(state => ({
            ...state,
            status
        }));
    }

    const handleChangePriority = priority => {
        setTaskPackage(state => ({
            ...state,
            priority
        }));
    }

    const handleResetPackage = () => {
        setTaskPackage({
            userID: userID,
            taskName: '',
            priority: '',
            status: '',
            createdDate: '',
            _id: ''
        });
    }

    return (
        <div className="taskBody">
            <p className="taskBody-title">My Tasks</p>
            <FilterBar />
            <div className="taskBody-table">
                <TaskList taskList = {taskList} onGetTask={handleGetTask}
                isLoading={isLoading} isError={isError}
                 />
                <Col xl="1" lg="1" md="1" className="split">
                    <div className="split-bar"></div>
                </Col>
                <TaskProcess onEditTask={handleEditTask} onResetPackage = {handleResetPackage}
                   onReloadpage={onReloadpage} taskPackage = {taskPackage} username={username}
                   onChangeStatus={handleChangeStatus} onChangePriority={handleChangePriority}
                />
            </div>
        </div>
    );
};

export default TaskBody;