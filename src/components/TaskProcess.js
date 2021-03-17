import React, { useState } from 'react';
import '../css/TaskProcess.css';
import { Col } from 'reactstrap';
import { Label, Input, Button } from 'reactstrap';

const TaskProcess = ({ taskEdit, onEditTask }) => {

    const [removeBtn, setDisplayRemoveBtn] = useState(false);

    const handleOnEditTask = value => {
        onEditTask(value);
        value === '' ? setDisplayRemoveBtn(false) : setDisplayRemoveBtn(true);
    }
    const displayRemoveButton = () => removeBtn ?
        (<Button className="removeBtn">Remove</Button>) :
        (<Button disabled className="removeBtn faded">Remove</Button>);
    
    return (
        <Col xl="4" lg="4" md="4" className="taskProcess">
            <div className="editArea">
                <Label htmlFor="taskInput" className="editLabel">Task: </Label>
                <Input id="taskInput" type="text" className="editTask"
                    value={taskEdit} onChange = {e => handleOnEditTask(e.target.value)} />
            </div>
            <div className="actionArea">
                {displayRemoveButton()}
                <Button className="cancelBtn">Cancel</Button>
                <Button className="saveBtn">Save</Button>
            </div>
        </Col>
    );
};

export default TaskProcess;