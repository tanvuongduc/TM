import React, { Component, Fragment } from 'react';
// import { BrowserRouter } from 'react';
import axios from 'axios'
class Login extends Component {
    constructor(posts) {
        super(posts)
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        readAllUser().then(res => {
            console.log('Data', res);
        }).catch(err => {
            console.log('Err: ', err)
        })
    }



    render() {
        console.log(this.state.data)
        return (
            <Fragment>
                <div className='mainlogin'>
                    <div className='mainleft'>
                        <h2>Task</h2>
                        <h2>Manager</h2>
                    </div>
                    <div className='mainright'>
                        <form action='./components/mainwork'>
                            <input type='text' placeholder='Username'></input>
                            <input type='password' placeholder='Password'></input>
                            <br></br>
                            <button type='submit'>LOGIN</button>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'},
        })
        .then(res => res.json())
       
        .then(data => console.log(data))
    }


}

export default Login;

/*==========================================================*/
