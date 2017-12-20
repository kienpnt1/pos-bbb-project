import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const INITIAL_STATE = AppNavigator.router.getStateForAction(
	secondAction,
	tempNavState
);

export default (state = INITIAL_STATE, action) => {
	let nextState;
	switch (action.type) {
		case 'login':
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.back(),
				state
			);
			break;
		case 'logout':
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'login' }),
				state
			);
			break;
		default:
			nextState = AppNavigator.router.getStateForAction(action, state);
			break;
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
}