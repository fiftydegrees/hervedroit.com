import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './DownloadResumeArea.scss';

class DownloadResumeArea extends Component {
    render() {
        return (
            <div
                className={'flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}
                styleName='DownloadResumeArea'>
                <p
                    styleName='disclosure'>
                    {'This website is not a full resume but a support to go beyond the classic 1-page resume.'}
                </p>
                <button
                    className={'btn btn-secondary'}
                    type="button">
                    {'See Complete Resume'}
                </button>
                <p
                    className={'caption'}>
                    <a
                        href="http://www.google.com"
                        rel="noopener noreferrer"
                        target="_blank">
                        {'Or download it as PDF'}
                    </a>
                </p>
            </div>
        );
    }
}

export default CSSModules(DownloadResumeArea, styles);
