import React from 'react'; /* eslint-disable no-unused-vars */
import { Route, IndexRoute } from 'react-router'; /* eslint-disable no-unused-vars */
import App from './app/components/App';
import LandingPage from './app/components/Home/LandingPage';
import User from './app/components/User/User';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={LandingPage} />
		<Route path="/user" component={User} />
		<Route path="/ge" component={User} />
	</Route>
);
