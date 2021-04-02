import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { readAllUser } from '../Fetch/Fetch';

/*==========================================================*/

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    // Hàm này sẽ chạy sau render()
    // componentDidMount() {
    //     readAllUser().then(res => {
    //         console.log('Data', res);
    //     })
    //     .catch(err => {
    //         console.log('Err: ', err)
    //     })
    // }

    confirmLogin() {
        this.setState({
            data: this.state.data
        })
        console.log('hihihihihih', this.state.data)
    }

    render() {
        return (
            <Fragment>
                <div className='mainlogin'>
                    <div className='mainleft'>
                        <h2>Task</h2>
                        <h2>Manager</h2>
                    </div>
                    <div className='mainright'>
                        <form action=''>
                            <input type='text' placeholder='Username' id='name' required></input>
                            <input type='password' placeholder='Password' required></input>
                            <br></br>
                            <Link to='/work'><button type='submit' id='submit' onClick={()=> this.confirmLogin()}>LOGIN</button></Link>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

/*==========================================================*/
