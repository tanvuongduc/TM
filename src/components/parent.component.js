import React from 'react'
import Task from './todo/task'
import {PRIORITY} from './todolist.component'
const Parent = (props) => {
    const priority = {
        "high": PRIORITY.HIGH,
        "medium": PRIORITY.MEDIUM,
        "low": PRIORITY.LOW
    }
  return (
    <div>
    <h4>{ props.title }</h4>
        <Task
        priority = { priority }/>
    </div>
  )
}

export {Parent}
