import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';

export const AppNavigator = StackNavigator({
	Login: { screen: LoginScreen },
	Main: { screen: MainScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
	<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: this.props.nav,
};

export default AppWithNavigationState;
