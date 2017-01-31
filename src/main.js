import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import HomeView from './components/HomeView';
import RepoUserHeatmap from './components/views/RepoUserHeatmap';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeView} />
            <Route path="repousers" component={RepoUserHeatmap} />
        </Route>
    </Router>
), document.getElementById('app'));
