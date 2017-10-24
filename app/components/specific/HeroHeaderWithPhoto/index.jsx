import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './HeroHeaderWithPhoto.scss';

class HeroHeaderWithPhoto extends Component {
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
            </div>
        );
    }
}

export default CSSModules(HeroHeaderWithPhoto, styles);
