import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../../reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// import clientMiddleware from '../middleware/clientMiddleware';

const logger = createLogger();

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(logger, thunk)
	);
}
