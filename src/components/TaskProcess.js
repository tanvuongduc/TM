import React, { useState } from 'react';
import '../css/TaskProcess.css';
import { Col } from 'reactstrap';
import { Label, Input, Button } from 'reactstrap';
import { addTask, modifyTask, deleteTask } from '../taskAPI';

const TaskProcess = ({ taskPackage , onEditTask, onReloadpage, onResetPackage }) => {
    const { taskname, _id, userID, priority, status } = taskPackage;

    const [removeBtn, setDisplayRemoveBtn] = useState(false);

    const handleOnEditTask = value => {
        onEditTask(value);
        value === '' ? setDisplayRemoveBtn(false) : setDisplayRemoveBtn(true);
    }

    const handleRemoveTask = async () => {
        if (_id) {
            await deleteTask(_id);
            onResetPackage();
            onReloadpage();
        } else return 
        
    }

    const handleSaveTask = () => {
        (_id !== '') ? handleModifyTask() : handleAddTask();
        
    }

    const handleAddTask = async () => {
        await addTask(userID, taskname, priority);
        onReloadpage();
    }

    const handleModifyTask = async () => {
        await modifyTask(_id, taskname, priority, status);
        onResetPackage();
        onReloadpage();
    }

    const handleCancelProgress = () => onResetPackage();


    const displayRemoveButton = () => removeBtn || taskname ?
        (<Button className="removeBtn" onClick={handleRemoveTask}>Remove</Button>) :
        (<Button disabled className="removeBtn faded">Remove</Button>);
    
    return (
        <Col xl="4" lg="4" md="4" className="taskProcess">
            <div className="editArea">
                <Label htmlFor="taskInput" className="editLabel">Task: </Label>
                <Input id="taskInput" type="text" className="editTask"
                    value={taskname} onChange = {e => handleOnEditTask(e.target.value)} />
            </div>
            <div className="actionArea">
                {displayRemoveButton()}
                <Button className="cancelBtn" onClick={handleCancelProgress}>Cancel</Button>
                <Button className="saveBtn" onClick={handleSaveTask}>Save</Button>
            </div>
        </Col>
    );
};

export default TaskProcess;