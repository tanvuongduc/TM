import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react';

class Login extends Component {
    render() {
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
