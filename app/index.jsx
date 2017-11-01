import AnalyticsService from './services/AnalyticsService';
import App from './scenes/App';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './styles/modules/_global.scss';

ReactGA.initialize('UA-88792899-3', {
    debug: false,
});

/*
** Google Analytics
*/

const history = createHistory();
const historyListener = (location) => {
    AnalyticsService.logPageView(location);
};
history.listen(historyListener);
AnalyticsService.logPageView(window.location);

/*
** End of Google Analytics
*/

ReactDOM.render(
    <Router
        history={history}>
        <App />
    </Router>
    , document.getElementById('root'));
