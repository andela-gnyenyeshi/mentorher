import { combineReducers } from 'redux';
import mentors from '../modules/home/reducer';

const rootReducer = combineReducers({
	mentors
});

export default rootReducer;
