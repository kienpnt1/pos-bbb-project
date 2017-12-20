import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';

class LoginButton extends React.Component {
	render() {
		return (
			<TouchableOpacity
				disabled={this.props.disabled}
				style={{...styles.buttonStyle, backgroundColor: this.props.bgColor}}
				onPress={this.props.onPress}
				activeOpacity={0.8}
			>
				<Text
					style={{...styles.textStyle, color: this.props.color}}
				>
					{this.props.children}
				</Text>
				<ActivityIndicator style={{position: "absolute", right: 10}}
				                   size={"small"}
				                   animating={this.props.loading || false}/>
			</TouchableOpacity>
		)
	}
}

const styles = {
	buttonStyle: {
		height: 74,
		width: '100%',
		justifyContent: 'center',
		alignSelf: 'center'
	},
	textStyle: {
		fontSize: 30,
		color: '#fff',
		justifyContent: 'center',
		alignSelf: 'center',
		fontFamily: "Avenir",
		letterSpacing: 0,
		lineHeight: 40,
		fontWeight: "500"
	}
};
export default LoginButton