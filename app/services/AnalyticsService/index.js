import ReactGA from 'react-ga';

module.exports = {
    logEvent: (category, action, label, value) => {
        ReactGA.event({
            action: (action || undefined),
            category: (category || undefined),
            label: (label || ''),
            value: (value || undefined),
        });
    },
    logPageView: (location) => {
        ReactGA.set({
            page: location.pathname,
        });
        ReactGA.pageview(location.pathname);
    },
};
