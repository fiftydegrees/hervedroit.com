import AnalyticsService from '../../../services/AnalyticsService';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './HeroHeaderWithPhoto.scss';

class HeroHeaderWithPhoto extends Component {
    constructor(props) {
        super(props);
        this.navigateToLink = this.navigateToLink.bind(this);
    }
    logLinkClick(link) {
        AnalyticsService
            .logEvent('Articles',
                'kClickedBannerLink',
                `${this.props.title}--${encodeURIComponent(link)}`,
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
                className={'flex-container flex-d flex-d-column'}
                styleName='HeroHeaderWithPhoto'>
                <div
                    className={'flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}
                    styleName="body">
                    <h1>
                        Hervé Droit
                    </h1>
                    <h2>
                        Software Engineer&nbsp;—&nbsp;Side Experiences
                    </h2>
                </div>
                <div
                    className={'flex-container flex-d flex-d-column flex-ai flex-ai-center'}
                    styleName="herofooter">
                    <div
                        styleName="icon" />
                    <div
                        styleName="caption">
                        Slide Down For More
                    </div>
                </div>
                <div
                    className={'flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}
                    styleName={'alert'}>
                    <p>
                        Pitching My New Project In Paris Subway
                    </p>
                    <button
                        className={'btn btn-primary'}
                        onClick={() => this.navigateToLink('https://www.youtube.com/watch?v=phbZgwH-fwI')}>
                        Watch On YouTube
                    </button>
                </div>
            </div>
        );
    }
}

export default CSSModules(HeroHeaderWithPhoto, styles);
