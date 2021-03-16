import React, { Fragment, useState } from 'react';
import StyleLogin from './index.style.js';
import saperator from './img/saperator.png';
import background from './img/background.png';
const LoginPage = () => {
    return (
        <>
            <StyleLogin>
                <div class="wrapper" style={{ background: `url(${background})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
                    <div class="row">
                        <div class="col-left col-lg-5">
                            <p>Task <br /> Manager</p>
                        </div>
                        <div class="col-right col-lg-7">
                            <form action="" method="" accept-charset="utf-8">
                                <div class="form-group">
                                    <input type="text" name="username" placeholder="User name" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input type="text" name="password" placeholder="Password" />
                                </div>
                                <br />
                                <div class="form-btn">
                                    <button type="button" class="btnLogin">LOGIN</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </StyleLogin>

        </>


    )
}

export default LoginPage;