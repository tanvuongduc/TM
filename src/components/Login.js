import React, { Component } from 'react';
import '../css/Login.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { Formik, FastField, Form } from 'formik';
import { validation } from '../validation'; 

class Login extends Component {
    render() {
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
                                render = {
                                    props => (
                                        <Form className="col-xl-8 form">
                                            <div className="form-group">
                                                <FastField name="username" className="form-control username"
                                                placeholder="Username" />
                                                <p className="error">{props.errors.username}</p>
                                            </div>
                                            <div className="form-group">
                                                <FastField name="password" className="form-control password"
                                                placeholder="Password" />
                                                <p className="error">{props.errors.password}</p>
                                            </div>
                                            <div className="form-bottom-area">
                                                <Button type="submit" color="primary" className="loginBtn">LOGIN</Button>
                                            </div>
                                            
                                            
                                        </Form>
                                        
                                    )
                                }
                            > 
                            }
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;