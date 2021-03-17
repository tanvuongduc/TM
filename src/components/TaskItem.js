import React, { useState } from 'react';
import '../css/TaskItem.css';


const TaskItem = ({task, orderNumber, onGetTask}) => {
    const [mouseEvent, setStatus] = useState({ clicked: false, hover: false });

    const handleOnFocus = () => {
        setStatus({ clicked: true, hover: false });
        onGetTask(task);
    }

    const handleOnMouseOver = () => {
        setStatus(state => ({
            ...state,
            hover: true
        }));
    }

    const handleOnMouseOut = () => {
        setStatus({ clicked: false, hover: false});
    }

    const renderClickTask = () => {
        return (
            <div className="onClickTask" onClick={handleOnFocus} 
            onMouseOver={handleOnMouseOver} onMouseOut = {handleOnMouseOut}>
                <span>{`${orderNumber}.`}</span>
                <span>{task.taskname}</span>
            </div>
        );
    }

    const renderHoverTask = () => {
        return (
            <div className="onHoverTask" onClick={handleOnFocus} 
                onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                <span>{`${orderNumber}.`}</span>
                <span>{task.taskname}</span>
            </div>
        );
    }

    const renderTask = () => {
        return (
            <div className="taskItem" onClick={handleOnFocus} 
                onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                <span>{`${orderNumber}.`}</span>
                <span>{task.taskname}</span>
            </div>
        );
    }
    
    if (mouseEvent.clicked) return renderClickTask();
    if (mouseEvent.clicked === false && mouseEvent.hover === true) return renderHoverTask();
    if (mouseEvent.clicked === false && mouseEvent.hover === false) return renderTask();
    
};

export default TaskItem;