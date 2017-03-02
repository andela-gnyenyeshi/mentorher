import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import routes from './routes';
import configureStore from './app/redux/store/create';
import { Provider } from 'react-redux';

const store = configureStore();

render (
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById("app")
);
