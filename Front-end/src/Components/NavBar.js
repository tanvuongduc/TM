import { Component } from "react";
import React, { Components, Fragment } from "react";
import "../CSS/NavBar.css";
import "fontawesome/css/all.min.css"
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (

            <Fragment>
                <div className="header">
                    <h2>Task Manager </h2>
                    <div className='logout'>
                        <div class="dropdown">
                            <button class="dropbtn" > User </button>
                            <i class="fas fa-angle-down"> </i>
                            <div class="dropdown-content">
                                <a class="fas fa-user" href="#">  Profile</a> 
                                <a class="fas fa-sign-out-alt" href="#">  Logout</a>
                            </div>
                        </div>

                    </div>

                </div>

            </Fragment>
        );
    }
}
export default NavBar