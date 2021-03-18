import React, { useEffect, useState } from 'react';
import '../css/Task.css';
import TaskHeader from './TaskHeader';
import TaskBody from './TaskBody';
import { useHistory, useLocation } from 'react-router-dom';
import { updateTaskList } from '../taskAPI';

const Task = () => {

    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const [reloadTime, setReloadPage] = useState(0);
    const [taskList, setTaskList] = useState([]);

    const history = useHistory();
    const location = useLocation();
    const tokenPackage = JSON.parse(localStorage.getItem("tokenPackage"));

    useEffect(() => {
        const getListfromServer = async () => {
            try {
                const newList = await updateTaskList(tokenPackage.userID);
                console.log(newList);
                setTaskList(newList);
                setisLoading(false);
            } catch(err) {
                setisLoading(false);
                setisError(true);
                throw(err);
            }
        }
        getListfromServer();
    }, [reloadTime, tokenPackage.userID]);

    const reloadPage = () => {
        setReloadPage(reloadTime + 1);
    }

    return tokenPackage ? (
        <div className="task">
            <TaskHeader username={tokenPackage.username} token={tokenPackage.token}/>
            <TaskBody taskList={taskList} 
            isLoading={isLoading} isError={isError} 
            onReloadpage = {reloadPage} userID = {tokenPackage.userID}
            />
        </div>
    ) : (<div>
            <p>You need to login before, click button to turn back Login</p>
            <button onClick = {() => history.push("/")}>Back to Login</button>
        </div>)
    
};

export default Task;
