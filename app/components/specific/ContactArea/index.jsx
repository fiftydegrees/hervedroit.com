import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ContactArea.scss';

class ContactArea extends Component {
    render() {
        return (
            <div
                className={'flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}
                styleName='ContactArea'>
                <h2>
                    {'Let\'s Keep In Touch'}
                </h2>
                <p>
                    {'Or let\'s dance'}
                </p>
            </div>
        );
    }
}

export default CSSModules(ContactArea, styles);
