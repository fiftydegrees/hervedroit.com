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
                <meta name="msapplication-config" content="assets/vectors/favicon/browserconfig.xml" />
                <meta name="theme-color" content="#00aeef" />
                <meta name="description" content="Spotmyflat, 1ère source d'informations off-market. Inscription gratuite et réservée aux professionnels de l’immobilier." />
                <meta name="keywords" content="spotmyflat immobilier professionnel off market off-market outil productivité campagnes emailing agent agents chasseur chasseurs off-market vente achat transactions" />
                <meta name="author" content="Spotmyflat" />
                <meta name="copyright" content="Spotmyflat 2016" />
                <meta name="application-name" content="Spotmyflat" />
                <meta property="fb:page_id" content="1664299847228782" />
                <meta property="og:site_name" content="Spotmyflat" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:title" content="Spotmyflat | 1ère source d'informations off-market" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://s3-eu-west-1.amazonaws.com/assets.spotmyflat.com/public/shared-assets/smf-sharingcover-181016.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1125" />
                <meta property="og:image:height" content="675" />
                <meta property="og:url" content="https://www.spotmyflat.com" />
                <meta property="og:description" content="1ère source d'informations off-market. Inscription gratuite et réservée aux professionnels de l’immobilier." />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:site" content="@spotmyflat" />
                <meta property="twitter:creator" content="@spotmyflat" />
                <meta name="twitter:title" content="Spotmyflat | 1ère source d'informations off-market" />
                <meta name="twitter:text:description" content="1ère source d'informations off-market. Inscription gratuite et réservée aux professionnels de l’immobilier." />
                <meta name="twitter:description" content="Spotmyflat, communiquez différemment sur le off-market. Inscription gratuite et réservée aux professionnels de l’immobilier." />
                <meta name="twitter:image" content="https://s3-eu-west-1.amazonaws.com/assets.spotmyflat.com/public/shared-assets/smf-sharingcover-181016.png" />
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
