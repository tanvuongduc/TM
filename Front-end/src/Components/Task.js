
import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import axios from 'axios'


class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            tasks: []
        }
    }
    componentDidMount = async () => {
        let data = {
            token: localStorage.getItem('token')
        }
        await axios.post(`http://localhost:3000/task`, data)
            .then(res => {
                let user = res.data[0].user
                let tasks = res.data[0].tasks
                if (user) {
                    this.setState({
                        user: user,
                        tasks: tasks
                    })
                }
                else {
                    localStorage.setItem('token', '')
                }
            })
            .catch(err => {
                localStorage.setItem('token', '')
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {localStorage.getItem('token') ? this.state.user : this.props.history.push('login')}
            </div>
        )
    }
}


export default withRouter(Task)