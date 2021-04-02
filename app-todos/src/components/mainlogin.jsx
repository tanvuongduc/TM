import React, { Component, Fragment } from 'react';
// import { BrowserRouter } from 'react';
import axios from 'axios'
class Login extends Component {

    componentDidMount() {
        readAllUser().then(res => {
            console.log('Data', res);
        }).catch(err => {
            console.log('Err: ', err)
        })
    }

    render() {
        axios({
            methods: 'POST',
            url: 'http://localhost:3000/login',
            data: null
        })
            .then(res => {
                console.log('kq', res);
            })
            .catch(err => {
                console.log('lỗi', err);
            })

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
}

export default Login;

/*==========================================================*/
