import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (<div>
            <Link
                to="/">
                Home
            </Link>
            <Link
                to="/about">
                About
            </Link>

            { this.props.children }
        </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.node,
};

module.exports = App;
