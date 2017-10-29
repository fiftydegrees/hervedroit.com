/* eslint-disable */

import AnalyticsService from '../../../../services/AnalyticsService';
import CSSModules from 'react-css-modules';
import Lightbox from 'react-image-lightbox';
import React, { Component } from 'react';
import styles from './Project.scss';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightboxOpen: false,
            vectorIndex: 0,
        };

        this.navigateToProject = this.navigateToProject.bind(this);
    }
    getRawDescription() {
        return {
            __html: this.props.rawDescription,
        };
    }
    logThumbnailView(index) {
        AnalyticsService
            .logEvent('Projects',
                'kClickedProjectThumbnail',
                `${this.props.title}--${index}`,
                null);
    }
    logLinkClick(link) {
        AnalyticsService
            .logEvent('Projects',
                'kClickedProjectLink',
                `${this.props.title}--${encodeURIComponent(link)}`,
                null);
    }
    navigateToProject() {
        if (this.props.link) {
            window.open(this.props.link, '_blank').focus();
            this.logLinkClick(this.props.link);
        }
    }
    openLightboxToIndex(index) {
        this.logThumbnailView(index);
        this.setState({
            lightboxOpen: true,
            vectorIndex: index,
        });
    }
    render() {
        const {
            lightboxOpen,
            vectorIndex,
        } = this.state;

        return (
            <div
                className={'flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}
                styleName='Project'>
                <h3
                    styleName="title">
                    {(() => {
                        if (this.props.link) {
                            return (
                                <a
                                    onClick={this.navigateToProject}
                                    target="_blank">
                                    {this.props.title}
                                </a>
                            );
                        } else {
                            return (
                                <span>
                                    {this.props.title}
                                </span>
                            );
                        }
                    })()}
                    <br
                        className={'smartphoneOnly'} />
                    <span styleName='date'>({this.props.year})</span>
                </h3>
                <span
                    styleName={'about'}
                    dangerouslySetInnerHTML={this.getRawDescription()} />
                <div
                    className={'flex-container flex-d flex-d-row flex-jc flex-jc-center'}
                    styleName={'vectors'}>
                    {
                        (this.props.vectors || [])
                            .map((vector, index) => {
                                return (
                                    <div
                                        className={'flex-container flex-d flex-d-column'}
                                        key={vector.key}
                                        onClick={() => this.openLightboxToIndex(index)}
                                        styleName={'vector'}>
                                        <img
                                            alt="vector"
                                            height="200"
                                            src={vector.localThumbnailPath}
                                            width="200" />
                                        <p
                                            className={'caption'}
                                            styleName={'caption'}>
                                            {vector.caption}
                                        </p>
                                    </div>
                                );
                            })
                    }
                </div>
                {
                    this.props.CTA &&
                    this.props.link &&
                    <button
                        className={'btn btn-primary flex-container'}
                        onClick={this.navigateToProject}
                        styleName={'CTA'}
                        type="button">
                        {this.props.CTA}
                    </button>
                }
                {
                    lightboxOpen &&
                    <Lightbox
                        mainSrc={this.props.vectors[vectorIndex].localPath}
                        nextSrc={this.props.vectors[(vectorIndex + 1) % this.props.vectors.length].localPath}
                        prevSrc={this.props.vectors[(vectorIndex + this.props.vectors.length - 1) % this.props.vectors.length].localPath}
                        enableZoom={false}
                        imageCaption={this.props.vectors[vectorIndex].caption}
                        onCloseRequest={() => this.setState({ lightboxOpen: false })}
                        onMovePrevRequest={() => {
                            this.setState({
                                vectorIndex: (vectorIndex + this.props.vectors.length - 1) % this.props.vectors.length,
                            }, function callback() {
                                this.logThumbnailView(this.state.vectorIndex);
                            });
                        }}
                        onMoveNextRequest={() => {
                            this.setState({
                                vectorIndex: (vectorIndex + 1) % this.props.vectors.length,
                            }, function callback() {
                                this.logThumbnailView(this.state.vectorIndex);
                            });
                        }}
                    />
                }
            </div>
        );
    }
}

export default CSSModules(Project, styles);
