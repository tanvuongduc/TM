import React, { Component, Fragment } from 'react';
import axios from "axios";
import Cookies from "js-cookie";

class Admin extends Component {
    state = {
        username:""
    }

    componentDidMount() {
        let config = {
            headers : {
                Authorization : `Bearer ${Cookies.get("token")}`
            }
        }

        axios.get("http://localhost:5000/api/admin" ,config).then(
            res => {
                this.setState({
                    username: res.data.username
                })
            }
        ).catch(err => console.log(err))
    }

    render() {
        return (
            <Fragment>
                <h3>{this.state.username}</h3>
            </Fragment>
        )
    }
}

export default Admin;