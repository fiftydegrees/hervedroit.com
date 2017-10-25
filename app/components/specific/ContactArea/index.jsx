import AnalyticsService from '../../../services/AnalyticsService';
import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './ContactArea.scss';

class ContactArea extends Component {
    logLinkClick(link) {
        AnalyticsService
            .logEvent('Contact',
                'kClickedContactLink',
                `${encodeURIComponent(link)}`,
                null);
    }
    navigateToLink(link) {
        if (link) {
            window.open(link, '_blank').focus();
            this.logLinkClick(link);
        }
    }
    render() {
        return (
            <div
                className={'flex-container'}
                styleName='ContactArea'>
                <div
                    className={'area flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center section'}>
                    <h2>
                        {'Let\'s Keep In Touch'}
                    </h2>
                    <p>
                        {'Want to tell me something crazy? Need help? Looking for an experienced freelance? Say hi!'}
                    </p>
                    <ul
                        styleName={'contacts'}>
                        <li>
                            <a
                                alt="Hervé Droit's LinkedIn account"
                                onClick={() => this.navigateToLink('https://linkedin.com/in/hervedroit')}
                                rel="noopener noreferrer"
                                target="_blank">
                                {'LinkedIn'}
                            </a>
                        </li>
                        <li>
                            <a
                                alt="Hervé Droit's Twitter account"
                                onClick={() => this.navigateToLink('https://twitter.com/hervedroit')}
                                rel="noopener noreferrer"
                                target="_blank">
                                {'Twitter'}
                            </a>
                        </li>
                        <li>
                            <a
                                alt="Hervé Droit's Stack Overflow account"
                                onClick={() => this.navigateToLink('https://stackoverflow.com/users/1809893/sweepy')}
                                rel="noopener noreferrer"
                                target="_blank">
                                {'Stack Overflow'}
                            </a>
                        </li>
                        <li>
                            {'or '}
                            <strong>
                                herve.drt[@]gmail.com
                            </strong>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CSSModules(ContactArea, styles);
