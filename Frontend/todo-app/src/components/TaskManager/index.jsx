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
import moment from "moment"

const taskBackground = {
    low: { code: '#cce8ff', className: 'list-item-low' },
    medium: { code: '#fff', className: 'list-item-medium' },
    high: { code: '#ffc6c6', className: 'list-item-high' },
    focus: { code: '#c7d8e6', className: 'list-item-focus' },
    hover: { code: '#ececec', className: 'list-item-hover' },
}

const TaskManager = (props) => {
    const [tasks, setTasks] = useState([])
    const [taskInput, setTaskInput] = useState("")
    const [selectedTaskId, setSelectedTaskId] = useState(null)
    const [status, setStatus] = useState("pending")
    const [priority, setPriority] = useState("low")

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
        console.log(addedTask)
        console.log(typeof addedTask.data)

        if ((typeof addedTask.data) === "object") {
            //cập nhật state
            let newTasks = [...tasks, addedTask.data]
            console.log(newTasks)
            setTasks(newTasks)
            setTaskInput("")
        } else {
            alert("Nhiệm vụ đã tồn tại")
        }

    }

    return (
        <StyleTaskManager>
            <div style={{ padding: "0px 50px" }}>
                <h3 style={{ color: "#64a7dc" }} className="mt-4 mb-2">My Tasks</h3>
                <Row >
                    <Col xs={8} style={{ borderRight: "1px solid #c0c0c0" }} className="pr-5">
                        {tasks && tasks.map((task, index) => {
                            let taskProps = {}
                            if (selectedTaskId === task._id) {
                                taskProps.style = { backgroundColor: taskBackground.focus.code }
                            }
                            return (
                                <div
                                    className={`d-flex align-items-center px-3 list-item ${taskBackground[task.priority].className}`}
                                    {...taskProps}
                                    onClick={() => { setSelectedTaskId(task._id); setTaskInput(task.text); }}
                                >
                                    <span className="mr-3">{index + 1}.</span>
                                    {task.text}
                                </div>
                            )
                        })}

                    </Col>
                    <Col xs={4} style={{ height: 500 }}>
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
                            <Row>
                                <Col sm={6}>
                                    <FormGroup row>
                                        <Label for="exampleSelect" sm={4}>Status:</Label>
                                        <Col sm={8}>
                                            <Input type="select" name="status" onChange={(e) => { setStatus(e.target.value) }}>
                                                <option>pending</option>
                                                <option>progress</option>
                                                <option>done</option>
                                            </Input>
                                        </Col>

                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup row>
                                        <Label for="exampleSelect" sm={4}>Priority:</Label>
                                        <Col sm={8}>
                                            <Input type="select" name="priority" onChange={(e) => { setPriority(e.target.value) }}>
                                                <option>low</option>
                                                <option>medium</option>
                                                <option>high</option>

                                            </Input>
                                        </Col>

                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <Row>
                                        <Col sm={4}>Created:</Col>
                                        <Col sm={8}>{moment().format('ddd, YYYY-MM-DD')}</Col>
                                    </Row>
                                </Col>
                                <Col xs={6}>
                                    <Row>
                                        <Col sm={4}>By:</Col>
                                        <Col sm={8}>you</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                        {(selectedTaskId || selectedTaskId == 0) &&
                            <div style={{ marginTop: 300 }} className="d-flex justify-content-end">
                                <Button className="btn-action btn-action-danger" onClick={() => delTaskById(selectedTaskId)}>Remove</Button>
                                <Button className="btn-action" onClick={() => { setSelectedTaskId(null); setTaskInput("") }}>Cancel</Button>
                                <Button className="btn-action" onClick={() => { editTask({ _id: selectedTaskId, text: taskInput }) }}>Save</Button>
                            </div>
                        }
                        {!selectedTaskId &&
                            <div style={{ marginTop: 300 }} className="d-flex justify-content-end">
                                <Button className="btn-action" onClick={() => { setTaskInput("") }}>Clear</Button>
                                <Button className="btn-action" onClick={() => { addTask({ text: taskInput, status, priority }) }}>Add new</Button>
                            </div>
                        }

                    </Col>
                </Row>
            </div>
        </StyleTaskManager>
    )
}




export default TaskManager