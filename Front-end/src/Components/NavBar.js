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
                <head> 
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
                </head>
                <div className="header">
                    <b className="h">Task Manager </b>
                    <div className='logout'>
                        <div class="dropdown">
                            <button class="dropbtn" > Hi, {this.props.username} &ensp;
                                 <i class="fas fa-sort-down"> </i>
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