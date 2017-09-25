import React from 'react';
import ReactDOM from 'react-dom';

import App from './scenes/App';
import Home from './scenes/Home';
import About from './scenes/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
        </App>
    </Router>
    , document.getElementById('root'));
