import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ArticlesArea.scss';
import Article from './Article';

class ArticlesArea extends Component {
    render() {
        return (
            <div
                className={'flex-container flex-d flex-d-column flex-ai flex-ai-center flex-jc flex-jc-center'}
                styleName='ArticlesArea'>
                <h2>
                    {'Articles'}
                </h2>
                <p>
                    {'I\'m co-hosting a blog, '}
                    <a alt="Monsieur Curieux" href="http://www.monsieurcurieux.com" rel="noopener noreferrer" target="_blank">{'MonsieurCurieux.com'}</a>
                    {', in which I investigate and tackle topics people wouldn\'t even have thought about once in their life.'}
                    <br />
                    I also write (mostly) technical-related stuff on <a alt="Medium Hervé Droit" target="_blank">Medium</a>.
                </p>
                <hr />
                <h3>
                    {'Latest articles'}
                </h3>
                <Article
                    title="Visite du vaisseau amiral et des coffres de la Société Générale"
                    link="http://www.monsieurcurieux.com/2017/09/visite-du-siege-de-la-societe-generale/"
                    category="discover" />
                <Article
                    title="Quick notes about Philips Hue API, pros and cons"
                    link="https://medium.com/@hervedroit/quick-notes-about-philips-hue-api-pros-and-cons-1fd85d9684cf"
                    category="development" />
                <Article
                    title="Publicités à la télé, dans le métro, sur Facebook, combien ça coûte ?"
                    link="http://www.monsieurcurieux.com/2017/07/publicites-a-la-tele-dans-le-metro-sur-facebook-combien-ca-coute/"
                    category="discover" />
                <Article
                    title="How we handle a complex signup form at Spotmyflat"
                    link="https://medium.com/@hervedroit/how-we-handle-a-complex-signup-form-at-spotmyflat-d2be40758e77"
                    category="UX" />
                <Article
                    title="Entretien avec Florent, machiniste-receveur"
                    link="http://www.monsieurcurieux.com/2017/07/entretien-florent-machiniste-receveur/"
                    category="discover" />
                <Article
                    title="Apple Simple Deletion Experience"
                    link="https://medium.com/@hervedroit/apple-simple-deletion-experience-972896fc7c6a"
                    category="UX" />
            </div>
        );
    }
}

export default CSSModules(ArticlesArea, styles);
