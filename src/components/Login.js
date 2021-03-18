import React, { useState } from 'react';
import '../css/Login.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { Formik, FastField, Form } from 'formik';
import { validation } from '../validation'; 
import { login } from '../taskAPI';
import { useHistory, Redirect } from 'react-router-dom';


const Login = () => {
    const [invalidMessage, setInvalidMessage] = useState('');
    const history = useHistory();
    const tokenPackage = localStorage.getItem("tokenPackage");

    const handleLogin = (username, password) => {
        const getReponseLoginFromSever = async () => {
            try {
                const response = await login(username, password);
                response.username = username;
                const { token } = response;
                localStorage.setItem("tokenPackage", JSON.stringify(response));
                if (token === '') setInvalidMessage(response.error);
                else {
                    setInvalidMessage('');
                    history.push({
                        pathname: `Task/${username}`,
                        userInfo: {
                            username: username,
                            userID: response.userID,
                            token: response.token
                        }
                    });
                }
            } catch (err) {
                throw(err);
            }
        }
        getReponseLoginFromSever();
    }

    return (!tokenPackage) ? (
        <div className="login" style={{ backgroundImage: "url(/img/background.png)" }}>
            <Container fluid className="login-container">
                <Row className="login-container-row">
                    <Col xl={5} lg={5} md={5} className="col-left">
                        <p>Task <br />
                            Manager
                            </p>
                    </Col>
                    <Col xl={1} lg={1} md={1} className="divide">
                        <div className="divide-bar">

                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} className="col-right">
                        <Formik
                            initialValues={{
                                username: '',
                                password: ''
                            }}
                            validationSchema={validation}
                            onSubmit={values => handleLogin(values.username, values.password)}
                        >
                            {formikprops => (
                                <Form className="col-xl-8 form">
                                    <div className="form-group">
                                        <FastField name="username" className="form-control username"
                                            placeholder="Username" />
                                        <p className="error">{formikprops.errors.username}</p>
                                    </div>
                                    <div className="form-group">
                                        <FastField type="password" name="password" className="form-control password"
                                            placeholder="Password" />
                                        <p className="error">{formikprops.errors.password}</p>
                                    </div>
                                    <div className="form-bottom-area">
                                        <Button type="submit" color="primary" className="loginBtn">LOGIN</Button>
                                        <p className="error">{invalidMessage}</p>
                                    </div>
                                </Form>)
                            }
                        </Formik>

                    </Col>
                </Row>
            </Container>
        </div>
    ) : <Redirect to="/Task/:username" />
};

export default Login;

