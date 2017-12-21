import { combineReducers } from 'redux';
import Auth from './Auth';

const AppReducer = combineReducers({	
	auth: Auth
});

export default AppReducer;