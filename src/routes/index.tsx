import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { RouterState } from 'react-router';

import { AppView } from '../views/app-view';
import { HomePage } from '../views/home-page';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={ AppView }>
            <IndexRoute component={ HomePage } />
            <Route path="Homepage" component={ AppView } />
        </Route>
    </Router>
);