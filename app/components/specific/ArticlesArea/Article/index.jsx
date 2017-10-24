import React, { Component } from 'react';
import AnalyticsService from '../../../../services/AnalyticsService';
import CSSModules from 'react-css-modules';
import styles from './Article.scss';

function getClassFromCategory(category) {
    return ({
        development: 'color-primary',
        UX: 'color-primary',
        discover: 'color-secondary',
    }[category] || undefined);
}

class Article extends Component {
    constructor(props) {
        super(props);

        this.navigateToLink = this.navigateToLink.bind(this);
    }
    logLinkClick(link) {
        AnalyticsService
            .logEvent('Articles',
                'kClickedArticleLink',
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
                className={'flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}
                styleName='Article'>
                <p
                    styleName={'title ' + getClassFromCategory(this.props.category)}>
                    <a
                        onClick={() => this.navigateToLink(this.props.link)}
                        rel="noopener noreferrer"
                        target="_blank">
                        {this.props.title}
                    </a>
                </p>
                <p
                    styleName="about">
                    {'#'}{this.props.category}
                </p>
                {
                    (() => {
                        if (!this.props.isLast) {
                            return (
                                <div
                                    styleName="separator" />
                            );
                        } else {
                            return null;
                        }
                    })()
                }
            </div>
        );
    }
}

export default CSSModules(Article, styles, {
    allowMultiple: true,
});
