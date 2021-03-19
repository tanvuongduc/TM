import React, { useState } from 'react';
import '../css/TaskProcess.css';
import { Col } from 'reactstrap';
import { Label, Input, Button, FormGroup } from 'reactstrap';
import { addTask, modifyTask, deleteTask } from '../taskAPI';
import { StatusSelect, PrioritySelect } from './CustomSelect';

const TaskProcess = ({
     taskPackage , onReloadpage, onResetPackage, username,
     onEditTask, onChangeStatus, onChangePriority
 }) => {
    const { taskName, _id, userID, priority, status, createdDate } = taskPackage;

    const [removeBtn, setDisplayRemoveBtn] = useState(false);

    const editTaskProcess = value => {
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
        await addTask(userID, taskName, priority, status);
        onReloadpage();
    }

    const handleModifyTask = async () => {
        await modifyTask(_id, taskName, priority, status);
        onResetPackage();
        onReloadpage();
    }

    const handleCancelProgress = () => onResetPackage();

    const displayRemoveButton = () => removeBtn || taskName ?
        (<Button className="removeBtn" onClick={handleRemoveTask}>Remove</Button>) :
        (<Button disabled className="removeBtn faded">Remove</Button>);
    
    return (
        <Col xl="4" lg="4" md="4" className="taskProcess">
            <div className="editArea">
                <FormGroup className="editArea-formGroup">
                    <Label xl="3" lg="3" md="3" sm="12" xs="12"
                     htmlFor="taskInput" className="editLabel">Task: </Label>
                    <Input xl="9" lg="9" md="9" sm="12" xs="12" id="taskInput"
                     type="text" className="form-control"
                    value={taskName} onChange={e => editTaskProcess(e.target.value)} />
                </FormGroup>
                <FormGroup className="editArea-formGroup">
                    <Col xl="5" lg="5" md="12" sm="12" xs="12" className="status">
                        <label htmlFor="">Status:</label>
                        <StatusSelect  className="status-select"
                        onChangeStatus={onChangeStatus} status={status}/>
                    </Col>
                    <Col xl="5" lg="5" md="12" sm="12" xs="12" className="priority">
                        <label htmlFor="">Priority:</label>
                        <PrioritySelect className="priority-select" 
                        onChangePriority={onChangePriority} priority={priority}
                        />
                    </Col>
                </FormGroup>
                <FormGroup className="editArea-formGroup">
                    <Col xl="6" lg="6" md="6" sm="12" xs="12" className="status">
                        <label htmlFor="">Created:</label>
                        <span>{createdDate}</span>
                    </Col>
                    <Col xl="5" lg="5" md="5" sm="12" xs="12" className="priority">
                        <label htmlFor="">By:</label>
                        <span>{username}</span>
                    </Col>
                </FormGroup>
                
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