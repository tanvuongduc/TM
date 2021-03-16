import React, { useState } from 'react';
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