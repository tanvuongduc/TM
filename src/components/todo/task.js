import React,{Component} from 'react';
import { Link } from 'react-router-dom';


function Task(props) {
    return  <li className="task" id={props.data._id} onClick = {props.clickMethod}>{props.data.task}</li>;
}

export default Task;


    
   