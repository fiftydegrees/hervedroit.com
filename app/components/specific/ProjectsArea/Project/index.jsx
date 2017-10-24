import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Project.scss';

class Project extends Component {
    getRawDescription() {
        return {
            __html: this.props.rawDescription,
        };
    }
    render() {
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
                                    href={this.props.link}
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
                    &nbsp;<span styleName='date'>({this.props.year})</span>
                </h3>
                <span
                    styleName={'about'}
                    dangerouslySetInnerHTML={this.getRawDescription()} />
                <div
                    className={'flex-container flex-d flex-d-row flex-jc flex-jc-center'}
                    styleName={'vectors'}>
                    <div
                        className={'flex-container flex-d flex-d-column'}
                        styleName={'vector'}>
                        <img
                            alt="vector"
                            height="200"
                            src="https://media02.hongkiat.com/yummy-instagram-accounts/2-food-instagram-accounts.jpg"
                            width="200" />
                        <p
                            className={'caption'}
                            styleName={'caption'}>
                            This is a caption that is very very long, maybe you sould make it shorter?
                        </p>
                    </div>
                    <div
                        className={'flex-container flex-d flex-d-column'}
                        styleName={'vector'}>
                        <img
                            alt="vector"
                            height="200"
                            src="https://media02.hongkiat.com/yummy-instagram-accounts/2-food-instagram-accounts.jpg"
                            width="200" />
                        <p
                            className={'caption'}
                            styleName={'caption'}>
                            This is a caption
                        </p>
                    </div>
                    <div
                        className={'flex-container flex-d flex-d-column'}
                        styleName={'vector'}>
                        <img
                            alt="vector"
                            height="200"
                            src="https://media02.hongkiat.com/yummy-instagram-accounts/2-food-instagram-accounts.jpg"
                            width="200" />
                        <p
                            className={'caption'}
                            styleName={'caption'}>
                            This is a caption
                        </p>
                    </div>
                    <div
                        className={'flex-container flex-d flex-d-column'}
                        styleName={'vector'}>
                        <img
                            alt="vector"
                            height="200"
                            src="https://media02.hongkiat.com/yummy-instagram-accounts/2-food-instagram-accounts.jpg"
                            width="200" />
                        <p
                            className={'caption'}
                            styleName={'caption'}>
                            This is a caption
                        </p>
                    </div>
                    <div
                        className={'flex-container flex-d flex-d-column'}
                        styleName={'vector'}>
                        <img
                            alt="vector"
                            height="200"
                            src="https://media02.hongkiat.com/yummy-instagram-accounts/2-food-instagram-accounts.jpg"
                            width="200" />
                        <p
                            className={'caption'}
                            styleName={'caption'}>
                            This is a caption
                        </p>
                    </div>
                    <div
                        className={'flex-container flex-d flex-d-column'}
                        styleName={'vector'}>
                        <img
                            alt="vector"
                            height="200"
                            src="https://media02.hongkiat.com/yummy-instagram-accounts/2-food-instagram-accounts.jpg"
                            width="200" />
                        <p
                            className={'caption'}
                            styleName={'caption'}>
                            This is a caption
                        </p>
                    </div>
                    <div
                        className={'flex-container flex-d flex-d-column'}
                        styleName={'vector'}>
                        <img
                            alt="vector"
                            height="200"
                            src="https://media02.hongkiat.com/yummy-instagram-accounts/2-food-instagram-accounts.jpg"
                            width="200" />
                        <p
                            className={'caption'}
                            styleName={'caption'}>
                            This is a caption
                        </p>
                    </div>
                    <div
                        className={'flex-container flex-d flex-d-column'}
                        styleName={'vector'}>
                        <img
                            alt="vector"
                            height="200"
                            src="https://media02.hongkiat.com/yummy-instagram-accounts/2-food-instagram-accounts.jpg"
                            width="200" />
                        <p
                            className={'caption'}
                            styleName={'caption'}>
                            This is a caption
                        </p>
                    </div>
                </div>
                {(() => {
                    if (this.props.CTA &&
                        this.props.link) {
                        return (
                            <button
                                className={'btn btn-primary flex-container'}
                                styleName={'CTA'}
                                type="button">
                                {this.props.CTA}
                            </button>
                        );
                    } else {
                        return (
                            null
                        );
                    }
                })()}
            </div>
        );
    }
}

export default CSSModules(Project, styles);
