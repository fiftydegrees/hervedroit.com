import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import AboutMe from './AboutMe';
import AboutUs from './AboutUs';

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    About
                </h2>
                <ul>
                    <li>
                        <Link
                            to="/about/me">
                            Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about/us">
                            Us
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route
                        component={AboutUs}
                        exact
                        path="/about/us" />
                    <Route
                        component={AboutMe}
                        path="/about" />
                </Switch>
            </div>
        );
    }
}

module.exports = About;
