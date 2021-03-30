import { Component } from "react";
import React, { Components, Fragment } from "react";
import "../CSS/NavBar.css";
// import "fontawesome/css/all.min.css"

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
                    <b className="h">Task Manager </b>
                    <div className='logout'>
                        <div class="dropdown">
                            <button class="dropbtn" > Hi, {this.props.username} &ensp;
                                 <i class="fas fa-sort-down"> </i>
                            </button>
                            <div class="dropdown-content">
                                <a class="fas fa-sign-out-alt" href=" "> &ensp; Logout</a>
                            </div>
                        </div>

                    </div>

                </div>

            </Fragment>
        );
    }
}
export default NavBar