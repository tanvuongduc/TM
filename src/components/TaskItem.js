import React, { useState } from 'react';
import '../css/TaskItem.css';


const TaskItem = ({task, orderNumber, onGetTask}) => {
    const [mouseEvent, setStatus] = useState({ clicked: false, hover: false });
    const { taskName, status, priority } = task;
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
                <span>{taskName}</span>
            </div>
        );
    }

    const renderHoverTask = () => {
        return (
            <div className="onHoverTask" onClick={handleOnFocus} 
                onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                <span>{`${orderNumber}.`}</span>
                <span>{taskName}</span>
            </div>
        );
    }

    const renderTask = () => {
        if (status === 'done') {
            return (
                <div className="taskItem" onClick={handleOnFocus} 
                    onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                    <span>{`${orderNumber}.`}</span>
                    <span>{taskName}</span>
                    <img src="./img/check.png" alt="check"/>
                </div>
            );
        } else return (
                <div className="taskItem" onClick={handleOnFocus} 
                    onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                    <span>{`${orderNumber}.`}</span>
                    <span>{taskName}</span>
                    <img src="./img/dash.png" alt="dash"/>
                </div>
        );
        
    }

    
    if (mouseEvent.clicked) return renderClickTask();
    if (mouseEvent.clicked === false && mouseEvent.hover === true) return renderHoverTask();
    if (mouseEvent.clicked === false && mouseEvent.hover === false) return renderTask();
    
};

export default TaskItem;