import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './Credits.scss';

class Credits extends Component {
    render() {
        return (
            <div
                className={'flex-container'}
                styleName='Credits'>
                <div
                    className={'area flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center section'}>
                    <h3>
                        {'Credits'}
                    </h3>
                    <p>
                        {'This website is developed using '}
                        <a
                            alt="ReactJS Official Website"
                            href="https://reactjs.org"
                            rel="noopener noreferrer"
                            target="_blank">
                            {'ReactJS'}
                        </a>
                        {' and '}
                        <a
                            alt="Google Fonts Official website"
                            href="https://fonts.google.com/"
                            rel="noopener noreferrer"
                            target="_blank">
                            {'Google Fonts'}
                        </a>
                        {'.'}
                        <br />
                        {'Sources will soon be published, drop me an email if needed now!'}
                    </p>
                </div>
            </div>
        );
    }
}

export default CSSModules(Credits, styles);
