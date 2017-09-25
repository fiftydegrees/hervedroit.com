import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    Home
                </h2>
                <p>
                    Welcome on my React website!
                    <Link
                        to="/about">
                        About
                    </Link>
                </p>
            </div>
        );
    }
}

module.exports = Home;
