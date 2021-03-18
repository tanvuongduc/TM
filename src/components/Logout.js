import React from 'react';
import '../css/DropDown.css';
import { useHistory } from 'react-router-dom';
import { logout } from '../taskAPI';

const Logout = ({ display, token }) => {
    const history = useHistory();
    const handleLogOut = async () => {
        try {
            await logout(token);
            localStorage.removeItem("tokenPackage");
            history.push('/');
        } catch (err) {
            throw (err);
        }
        
    }
    return (display ?
    (<div className="dropDown">
        <span onClick={handleLogOut}>Logout</span>
    </div>) :
    (<div className="dropDown hidden">
        <span onClick={handleLogOut}>Logout</span>
        </div>)
    )
}
     
export default Logout;