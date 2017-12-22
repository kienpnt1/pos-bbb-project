import React from 'react';
import Drawer from 'react-native-drawer';
import {connect} from 'react-redux';

import Menu from './partials/Menu';
import Home from './partials/Home';

class MainContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	closeControlPanel = () => {
		this._drawer.close()
	};
	openControlPanel = () => {
		this._drawer.open()
	};
	render() {				
		return (
			<Drawer
				tapToClose={true}
				openDrawerOffset={0.5}
				ref={(ref) => this._drawer = ref}
				content={
					<Menu />
				}
			>
				<Home open={this.openControlPanel.bind(this)} />
			</Drawer>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	}
};
export default connect(mapStateToProps)(MainContainer);
