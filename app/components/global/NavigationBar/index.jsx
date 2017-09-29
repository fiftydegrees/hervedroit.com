import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.css';

export default class NavigationBar extends Component {
    render() {
        return (
            <div
                className={styles.NavigationBar}>
                <ul>
                    <li className={styles.hello}>
                        <Link
                            to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about/me">
                            About
                        </Link>
                        <p
                            className={styles.caption}>
                            Caption
                        </p>
                    </li>
                </ul>
            </div>
        );
    }
}
