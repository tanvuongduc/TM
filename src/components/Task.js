import React, { useEffect, useState } from 'react';
import '../css/Task.css';
import TaskHeader from './TaskHeader';
import TaskBody from './TaskBody';
import { useLocation } from 'react-router-dom';
import { updateTaskList } from '../taskAPI';

const Task = () => {

    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const [reloadTime, setReloadPage] = useState(0);
    const [taskList, setTaskList] = useState([]);

    const location = useLocation();

    const { userID, username, token } = location.userInfo;

    useEffect(() => {
        const getListfromServer = async () => {
            try {
                const newList = await updateTaskList(userID);
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
    }, [reloadTime, userID]);

    const reloadPage = () => setReloadPage(reloadTime + 1);

    return (
        <div className="task">
            <TaskHeader username={username} token={token}/>
            <TaskBody taskList={taskList} 
            isLoading={isLoading} isError={isError} 
            onReloadpage = {reloadPage}
            />
        </div>
    );
};

export default Task;
