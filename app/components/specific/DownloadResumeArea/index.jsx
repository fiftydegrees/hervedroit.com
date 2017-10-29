import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './DownloadResumeArea.scss';
import AnalyticsService from '../../../services/AnalyticsService';

class DownloadResumeArea extends Component {
    logLinkClick(link) {
        AnalyticsService
            .logEvent('Resume',
                'kClickedSeeCompleteResumeLink',
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
                className={'flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center section'}
                styleName='DownloadResumeArea'>
                <div
                    className={'area flex-container flex-d flex-d-column flex-ai flex-ai-center'}>
                    <p
                        className={'body'}
                        styleName={'disclosure'}>
                        {'This website is not a full resume but a support to go beyond the classic 1-page resume.'}
                    </p>
                    <button
                        className={'btn btn-secondary btn-secondary-inverted'}
                        onClick={() => this.navigateToLink('https://s3-eu-west-1.amazonaws.com/hervedroitcom/herve.droit-CV-EN.pdf')}
                        type="button">
                        {'See Complete Resume'}
                    </button>
                </div>
            </div>
        );
    }
}

export default CSSModules(DownloadResumeArea, styles);
