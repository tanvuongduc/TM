import React, { useState }from 'react';
import '../css/TaskHeader.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Logout from './Logout';

const TaskHeader = ({ username, token }) => {
    const [dropDownLogOut, setDropDownLogOut] = useState(false);
    const changeStateLogoutDropDown = () => setDropDownLogOut(!dropDownLogOut);
    return (
        <div className="taskHeader">
            <div className="taskHeader-title">
                Task Manager
                </div>
            <div className="welcomeUser">
                <span>
                    {`Hi, ${username}`}
                </span>
                <ArrowDropDownIcon onClick={changeStateLogoutDropDown}/>
            </div>
            <Logout display={dropDownLogOut} token={token}/>
            
        </div>
    );
};

export default TaskHeader;

