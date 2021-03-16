import React, { useState, useEffect } from 'react';
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
import taskApi from "../../apis/taskApi"

const taskColors = ['#fff', '#c7d8e6', '#ececec']

const TaskManager = (props) => {
    const [tasks, setTasks] = useState([])
    const [taskInput, setTaskInput] = useState("")
    const [selectedTaskId, setSelectedTaskId] = useState(null)

    useEffect(() => {
        fetchTasksData()
    }, [])

    const fetchTasksData = async (param) => {
        let tasks = await taskApi.getAllTask(param)
        setTasks(tasks.data)
        console.log(tasks.data)
    }

    const delTaskById = async (taskId) => {
        taskApi.delTask({ taskId })

        //xóa task theo id và cập nhật state
        let newTasks = [...tasks]
        let delItemIndex = newTasks.findIndex((el) => el._id == taskId)
        newTasks.splice(delItemIndex, 1)
        setTasks(newTasks)
        setSelectedTaskId(null)
        setTaskInput("")
    }

    const editTask = async (param) => {
        taskApi.editTask(param)

        //cập nhật state
        let newTasks = [...tasks]
        let editItemIndex = newTasks.findIndex((el) => el._id == param._id)
        newTasks[editItemIndex].text = param.text
        setTasks(newTasks)
    }

    const addTask = async (param) => {
        let addedTask = await taskApi.addTask(param)

        //cập nhật state
        let newTasks = [...tasks, addedTask.data]
        setTasks(newTasks)
        setTaskInput("")
    }


    return (
        <StyleTaskManager>
            <div style={{ padding: "0px 50px" }}>
                <h3 style={{ color: "#64a7dc" }} className="mt-4 mb-2">My Tasks</h3>
                <Row >
                    <Col xs={8} style={{ borderRight: "1px solid #c0c0c0" }} className="pr-5">
                        {tasks && tasks.map((task, index) => (
                            <div
                                className="d-flex align-items-center px-3 list-item"
                                style={{ backgroundColor: taskColors[index % 3], cursor: 'pointer' }}
                                onClick={() => { setSelectedTaskId(task._id); setTaskInput(task.text); }}
                            >
                                {index}. {task.text}
                            </div>
                        ))}
            
                    </Col>
                    <Col xs={4} style={{ textAlign: "end", height: 500 }}>
                        <Form>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Task:</Label>
                                <Col sm={10}>
                                    <Input
                                        className="input-task"
                                        type="text" name="task"
                                        id="task"
                                        placeholder="Enter your task here"
                                        value={taskInput}
                                        onChange={(e) => { setTaskInput(e.target.value) }}
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                        {selectedTaskId &&
                            <div style={{ marginTop: 300 }}>
                                <Button className="btn-action btn-action-danger" onClick={() => delTaskById(selectedTaskId)}>Remove</Button>
                                <Button className="btn-action" onClick={() => { setSelectedTaskId(null) }}>Cancel</Button>
                                <Button className="btn-action" onClick={() => { editTask({ _id: selectedTaskId, text: taskInput }) }}>Save</Button>
                            </div>
                        }
                        {!selectedTaskId &&
                            <div style={{ marginTop: 300 }}>
                                <Button className="btn-action" onClick={() => { setTaskInput("") }}>Clear</Button>
                                <Button className="btn-action" onClick={() => { addTask({ text: taskInput }) }}>Add new</Button>
                            </div>
                        }

                    </Col>
                </Row>
            </div>
        </StyleTaskManager>
    )
}




export default TaskManager