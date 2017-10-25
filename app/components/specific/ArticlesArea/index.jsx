import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import DSArticles from '../../../assets/data/articles.json';
import Article from './Article';
import styles from './ArticlesArea.scss';

const getArticles = () => (DSArticles.articles);

class ArticlesArea extends Component {
    render() {
        return (
            <div
                className={'flex-container section'}
                styleName='ArticlesArea'>
                <div
                    className={'area flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}>
                    <h2>
                        {'Articles'}
                    </h2>
                    <p
                        className={'body'}>
                        {'I\'m hosting a blog, '}
                        <a
                            alt="Monsieur Curieux"
                            href="http://www.monsieurcurieux.com"
                            rel="noopener noreferrer"
                            target="_blank">{'MonsieurCurieux.com'}
                        </a>
                        {', on which I tackle topics or questions most people wouldn\'t have even thought about.'}
                        <br />
                        {'I also write (mostly) technical-related articles on '}
                        <a
                            alt="Hervé Droit's Medium Account"
                            href="http://www.medium.com/@hervedroit"
                            rel="noopener noreferrer"
                            target="_blank">
                            my Medium account
                        </a>
                        {'.'}
                    </p>
                    <hr />
                    <h3>
                        {'Latest Articles'}
                    </h3>
                    {
                        getArticles()
                            .map((article, index) => {
                                return (
                                    <Article
                                        category={article.category}
                                        key={article.key}
                                        isLast={index === getArticles().length - 1}
                                        link={article.link}
                                        publicationDate={article.publicationDate}
                                        title={article.title} />
                                );
                            })
                    }
                </div>
            </div>
        );
    }
}

export default CSSModules(ArticlesArea, styles);
