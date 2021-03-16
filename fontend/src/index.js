import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Login from './components/login/login';

const app=(
    <Fragment>
        <Login></Login>
    </Fragment>
);
ReactDOM.render(app,document.getElementById('root')
);


reportWebVitals();
