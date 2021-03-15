import React, { useState } from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import StyleTaskManager from './index.style'

const TaskManager = () => {
    return (
        <StyleTaskManager>
            <div style={{ padding: "0px 50px" }}>
                <h3 style={{ color: "#64a7dc" }}>My Tasks</h3>
                <Row className="">
                    <Col xs={8} style={{ borderRight: "1px solid #c0c0c0" }}>
                        <div className="d-flex align-items-center px-3 list-item" style={{ backgroundColor: '#fff' }}>
                            1. Eat
                        </div>
                        <div className="d-flex align-items-center px-3 list-item" style={{ backgroundColor: '#c7d8e6' }}>
                            2. Sleep
                        </div>
                        <div className="d-flex align-items-center px-3 list-item" style={{ backgroundColor: '#ececec' }}>
                            3. Code
                        </div>
                        <div className="d-flex align-items-center px-3 list-item" style={{ backgroundColor: '#fff' }}>
                            4. Repeat
                        </div>
                    </Col>
                    <Col xs={4} style={{ textAlign: "end", height: 500 }}>
                        <Form>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Task:</Label>
                                <Col sm={10}>
                                    <Input className="input-task" type="text" name="task" id="task" placeholder="Enter your task here" />
                                </Col>
                            </FormGroup>
                        </Form>
                        <div style={{ marginTop: 300 }}>
                            <Button className="btn-action btn-action-danger">Remove</Button>
                            <Button className="btn-action">Cancel</Button>
                            <Button className="btn-action">Save</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </StyleTaskManager>
    )
}




export default TaskManager