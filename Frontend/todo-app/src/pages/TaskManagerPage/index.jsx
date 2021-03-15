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
import TaskManager from '../../components/TaskManager';
import Footer from "../../containers/Footer"
import Header from "../../containers/Header"

const TaskListPage = () => {
  return (
    <>
      <Header />
      <TaskManager />
      <Footer />
    </>
  )
}




export default TaskListPage