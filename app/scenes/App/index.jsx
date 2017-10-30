import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../scenes/Home';
import MetaTags from 'react-meta-tags';

class App extends React.Component {
    render() {
        return (<div>
            <MetaTags>
                <title>Hervé Droit - Software Engineer - Side Experiences</title>
                <meta charSet="utf-8" />
                <meta name="fragment" content="!" />
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
                <link rel="apple-touch-icon" sizes="180x180" href="assets/vectors/favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" href="assets/vectors/favicon/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="assets/vectors/favicon/favicon-16x16.png" sizes="16x16" />
                <link rel="manifest" href="assets/vectors/favicon/manifest.json" />
                <link rel="shortcut icon" href="assets/vectors/favicon/favicon.ico" />
                <meta name="msapplication-config" content="assets/SEO/preview.jpg" />
                <meta name="theme-color" content="#00aeef" />
                <meta name="description" content="" />
                <meta name="keywords" content="herve droit software engineer tech ux developer" />
                <meta name="author" content="Hervé Droit" />
                <meta name="copyright" content="Hervé Droit 2017" />
                <meta name="application-name" content="HerveDroit" />
                <meta property="og:site_name" content="HerveDroit" />
                <meta property="og:locale" content="en_EN" />
                <meta property="og:title" content="Hervé Droit - Software Engineer - Side Experiences" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="http://www.hervedroit.com/assets/SEO/preview.jpg" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="1125" />
                <meta property="og:image:height" content="675" />
                <meta property="og:url" content="http://www.hervedroit.com" />
                <meta property="og:description" content="I'm Hervé, 24 yo. My experience is a bit unusual, as I always loved to test and create new things. Browse a few side experiences I have." />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:site" content="@hervedroit" />
                <meta property="twitter:creator" content="@hervedroit" />
                <meta name="twitter:title" content="Hervé Droit - Software Engineer - Side Experiences" />
                <meta name="twitter:text:description" content="I'm Hervé, 24 yo. My experience is a bit unusual, as I always loved to test and create new things. Browse a few side experiences I have." />
                <meta name="twitter:description" content="I'm Hervé, 24 yo. My experience is a bit unusual, as I always loved to test and create new things. Browse a few side experiences I have." />
                <meta name="twitter:image" content="http://www.hervedroit.com/assets/SEO/preview.jpg" />
            </MetaTags>
            <Switch>
                <Route
                    component={Home}
                    exact
                    path="/" />
            </Switch>
        </div>
        );
    }
}

module.exports = App;
