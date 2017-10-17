import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/modules/_global.scss';

import App from './scenes/App';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));
