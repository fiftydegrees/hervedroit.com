import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './NavigationBar.scss';

class NavigationBar extends Component {
    render() {
        return (
            <div
                styleName='NavigationBar'>
                <ul>
                    <li
                        styleName='hello'>
                        <Link
                            to="/">
                            Home
                        </Link>
                    </li>
                    <li
                        styleName='test'>
                        <Link
                            to="/about/me">
                            About
                        </Link>
                        <p
                            styleName='caption'>
                            Caption
                        </p>
                    </li>
                </ul>
                <button
                    type="button">
                    Hello&nbsp;!
                </button>
            </div>
        );
    }
}

export default CSSModules(NavigationBar, styles);
