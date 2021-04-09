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
            password: '',
            link: ''
        }
    }

    componentDidMount() {
    }

    Confirm() {
        if (this.state.username === 'admin' & this.state.password === '123') {
            this.setState({
                link: '/work'
            });
        }
        else {
            alert ('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
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
                            <input type='text' placeholder='Username' value={this.state.username} onChange={(ev) => this.onUsername(ev)} required></input>
                            <input type='password' placeholder='Password' value={this.state.password} onChange={(ev) => this.onPassword(ev)} required></input>
                            <br></br>
                            <NavLink to={this.state.link}>
                                <button type='submit' onClick={() => this.Confirm()}>LOGIN</button>
                            </NavLink>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
    onUsername(ev) {
        this.setState({
            username: ev.target.value
        })
        // console.log(this.state.username);
    }
    onPassword(ev) {
        this.setState({
            password: ev.target.value
        })
        // onsole.log(this.state.password);
    }
}

/*==========================================================*/
