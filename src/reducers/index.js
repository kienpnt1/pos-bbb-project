import { combineReducers } from 'redux';

import Nav from './Nav';
import Auth from './Auth';

const AppReducer = combineReducers({
	nav: Nav,
	auth: Auth,
});

export default AppReducer;