import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { readUser } from '../Fetch/readUser';
import Work from '../work-page/work-page';

/*==========================================================*/

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onUsername = this.onUsername.bind(this)
        this.onPassword = this.onPassword.bind(this)
        this.onHendleSutmit = this.onHendleSutmit.bind(this)
    }

    componentDidMount() {
    }

    // Confirm() {
    //     if (this.state.username === 'admin' & this.state.password === '123') {
    //         this.setState({
    //             link: '/work'
    //         });
    //     }
    //     else {
    //         alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    //     }
    // }

    render() {
        return (
            <div className='mainlogin'>
                <div className='mainleft'>
                    <h2>Task</h2>
                    <h2>Manager</h2>
                </div>
                <div className='mainright'>
                    <form onSubmit={this.onHendleSutmit}>
                        <input type='text' placeholder='Username' onChange={this.onUsername} required></input>
                        <input type='password' placeholder='Password' onChange={this.onPassword} required></input>
                        <br></br>
                        <button type='submit' >LOGIN</button>
                    </form>
                </div>
            </div>
        )
    }
    onHendleSutmit(ev) {
        ev.preventDefault()
        console.log(this.state.username);
        console.log(this.state.password);
    }
    onUsername(ev) {
        this.setState({
            username: ev.target.value
        })
    }
    onPassword(ev) {
        this.setState({
            password: ev.target.value
        })
    }
}

/*==========================================================*/
