import React, { Component, Fragment } from "react";
import "../CSS/NavBar.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    logout(){
        localStorage.setItem('token','')
    }
    render() {
        return (

            <Fragment>
                <div className="header">
                    <b className="h">Task Manager </b>
                    <div className='logout'>
                        <div className="dropdown">
                            <button className="dropbtn" > Hi, {this.props.username} &ensp;
                                 <i className="fas fa-sort-down"> </i>
                            </button>
                            <div className="dropdown-content">
                                <a className="fas fa-sign-out-alt" href="http://localhost:4200/login" onClick={()=>this.logout()}> &ensp; Logout</a>
                            </div>
                        </div>

                    </div>

                </div>

            </Fragment>
        );
    }
}
export default NavBar