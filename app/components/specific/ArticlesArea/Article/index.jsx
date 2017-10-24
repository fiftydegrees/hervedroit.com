import React, { Component } from 'react';
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
    render() {
        return (
            <div
                className={'flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}
                styleName='Article'>
                <p
                    styleName={'title ' + getClassFromCategory(this.props.category)}>
                    <a
                        href={this.props.link}
                        rel="noopener noreferrer"
                        target="_blank">
                        {this.props.title}
                    </a>
                </p>
                <p
                    styleName="about">
                    {'#'}{this.props.category}&nbsp;{'—'}&nbsp;{this.props.publicationDate.toString()}
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
