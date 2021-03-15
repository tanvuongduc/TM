import React, { Component } from 'react';
import '../css/Login.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { Formik, FastField, Form } from 'formik';
import { validation } from '../validation'; 
import { login } from '../taskAPI';
import { withRouter } from 'react-router';
import { PropTypes } from 'prop-types';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                status: false,
                error: ''
            }
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }

    handleLogin(username, password) {
        const asyncFunc = async () => {
            try {
                const response = await login(username, password);
                const { token } = response;
                if (token === '') {
                    console.log(response);
                    this.setState({
                        login: {
                            ...this.state.login,
                            error: response.error
                        }
                    });
                    console.log(this.state);
                }
                else {
                    console.log(response);
                    this.setState({
                        login: {
                            ...this.state.login,
                            status: true
                        }
                    });
                    this.props.history.push('/Signup');
                    console.log(this.state);
                }
                    
            } catch (err) {
                console.log(err);
            }
            
        }
        asyncFunc();
    }

    render() {
        const {error} = this.state.login; 
        return (
            <div className="login" style = {{backgroundImage: "url(/img/background.png)"}}>
                <Container fluid className="login-container">
                    <Row className="login-container-row">
                        <Col xl={5} lg={5} md={5} className="col-left">
                            <p>Task <br/>
                            Manager
                            </p>
                        </Col>
                        <Col xl={1} lg={1} md={1} className="divide">
                            <div className="divide-bar">
                            
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} className="col-right">
                            <Formik
                                initialValues = {{
                                    username: '',
                                    password: ''
                                }}
                                validationSchema = {validation}
                                onSubmit = {values => this.handleLogin(values.username, values.password)}
                            > 
                            { formikprops => (
                                <Form className="col-xl-8 form">
                                    <div className="form-group">
                                        <FastField name="username" className="form-control username"
                                            placeholder="Username" />
                                        <p className="error">{formikprops.errors.username}</p>
                                    </div>
                                    <div className="form-group">
                                        <FastField name="password" className="form-control password"
                                            placeholder="Password" />
                                        <p className="error">{formikprops.errors.password}</p>
                                    </div>
                                    <div className="form-bottom-area">
                                        <Button type="submit" color="primary" className="loginBtn">LOGIN</Button>
                                        <p className="error">{error}</p>
                                    </div>
                                </Form>)
                            }
                            </Formik>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(Login);