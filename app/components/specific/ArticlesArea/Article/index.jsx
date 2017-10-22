import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Article.scss';

class Article extends Component {
    render() {
        return (
            <div
                className={'flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}
                styleName='Article'>
                <p
                    styleName="title">
                    <a
                        href={this.props.link}
                        rel="noopener noreferrer"
                        target="_blank">
                        {this.props.title}
                    </a>
                </p>
                <p
                    styleName="about">
                    {'#'}{this.props.category}&nbsp;{'—'}&nbsp;{this.props.publicationDate}
                </p>
            </div>
        );
    }
}

export default CSSModules(Article, styles);
