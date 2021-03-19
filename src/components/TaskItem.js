import React, { useState } from "react";
import "../css/TaskItem.css";

const TaskItem = ({ task, orderNumber, onGetTask }) => {
  const [mouseEvent, setStatus] = useState({ clicked: false, hover: false });
  const { taskName, status, priority } = task;
  const handleOnFocus = () => {
    setStatus({ clicked: true, hover: false });
    onGetTask(task);
  };

  const handleOnMouseOver = () => {
    setStatus((state) => ({
      ...state,
      hover: true,
    }));
  };

  const handleOnMouseOut = () => {
    setStatus({ clicked: false, hover: false });
  };

  if (mouseEvent.clicked) {
    return (
      <div
        className={`onClickTask ${priority}`}
        onClick={handleOnFocus}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        <span>{`${orderNumber}.`}</span>
        <span>{taskName}</span>
        {status === "progress" ? (
          <img src="./img/dash.png" alt="dash" />
        ) : status === "done" ? (
          <img src="./img/check.png" alt="check" />
        ) : (
          <span></span>
        )}
      </div>
    );
  }
  if (mouseEvent.clicked === false && mouseEvent.hover === true) {
    return (
      <div
        className={`onHoverTask ${priority}`}
        onClick={handleOnFocus}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        <span>{`${orderNumber}.`}</span>
        <span>{taskName}</span>
        {status === "progress" ? (
          <img src="./img/dash.png" alt="dash" />
        ) : status === "done" ? (
          <img src="./img/check.png" alt="check" />
        ) : (
          <span></span>
        )}
      </div>
    );
  }
  if (mouseEvent.clicked === false && mouseEvent.hover === false) {
    return (
      <div
        className={`taskItem ${priority}`}
        onClick={handleOnFocus}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        <span>{`${orderNumber}.`}</span>
        <span>{taskName}</span>
        {status === "progress" ? (
          <img src="./img/dash.png" alt="dash" />
        ) : status === "done" ? (
          <img src="./img/check.png" alt="check" />
        ) : (
          <span></span>
        )}
      </div>
    );
  }
};

export default TaskItem;
