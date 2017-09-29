import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavigationBar from '../../components/global/NavigationBar';
import Home from '../../scenes/Home';
import About from '../../scenes/About';

class App extends React.Component {
    render() {
        return (<div>
            <NavigationBar />
            <Switch>
                <Route
                    component={Home}
                    exact
                    path="/" />
                <Route
                    component={About}
                    path="/about" />
            </Switch>
        </div>
        );
    }
}

// App.propTypes = {
//     children: React.PropTypes.node,
// };

module.exports = App;
