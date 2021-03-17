import React from 'react';
import '../css/TaskList.css';
import { Col } from 'reactstrap';
import { LinearProgress } from '@material-ui/core';
import TaskItem from './TaskItem';

const TaskList = ({
    taskList, isLoading,
    isError, onReloadpage, onGetTask
    }) => {
    
    const renderLoadingContent = () => (
        <div className="sub_container">
            <LinearProgress />
        </div>
    );

    const renderErrorContent = () => {
        return (
            <div className="sub_container">
                <div className="error_message">
                    <p>Có lỗi khi tải trang, click vào nút bên dưới để tải lại.</p>
                    <button onClick={() => onReloadpage()}>Tải lại trang</button>
                </div>
            </div>
        );
    }
       

    const renderTaskList = () => {
        return (
            <Col xl="7" lg="7" md="7" className="taskList">{
                taskList.map((task, index) => <TaskItem
                    task={task}
                    orderNumber={index + 1}
                    key={task._id}
                    onGetTask={onGetTask}
                />)
            }
            </Col>
        );
    }
       
    if (isLoading) {
        if (isError === false) return renderLoadingContent();
        else return renderErrorContent();
    } else return renderTaskList();
    

};

export default TaskList;