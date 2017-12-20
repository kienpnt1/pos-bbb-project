import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Home from './Home';


class MainScreen extends Component {
	closeControlPanel = () => {
		this._drawer.close()
	};
	openControlPanel = () => {
		this._drawer.open()
	};
	render() {
		const { logout, loginScreen, isLoggedIn } = this.props;
		return (					
			<Drawer
				tapToClose={true}
				openDrawerOffset={0.5}
				ref={(ref) => this._drawer = ref}
				content={
					<Menu />
				}			>
				<Home open={this.openControlPanel.bind(this)} />
			</Drawer>
		);
	}
}

MainScreen.navigationOptions = {
	title: 'Home Screen',
};

const mapStateToProps = state => ({
	isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch({ type: 'Logout' }),
	loginScreen: () =>
		dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
