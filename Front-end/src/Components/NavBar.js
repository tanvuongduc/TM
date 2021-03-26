import { Component } from "react";
import React, { Components, Fragment } from "react";
import "../CSS/NavBar.css";

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
               </div>
             <h4 class="logout"> Hi 123 </h4>
             
            </Fragment>
        );
    }
}
export default NavBar