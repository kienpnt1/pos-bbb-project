import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import LoginInput from './common/LoginInput';
import LoginButton from './common/LoginButton';
import {connect} from 'react-redux';
import {loginFormChange, login} from '../actions/index';

class LoginScreen extends React.Component {
	componentWillUnmount() {
		this.props.loginFormDelete();
	}

	onLoginPress() {
		const {user_name, password} = this.props
		this.props.login({user_name, password});
	}

	render() {
		const {containerBoth, container, loginButtonView, loginTitle, form, titleText, loginForm} = styles;
		return (
			<View style={containerBoth}>
			<KeyboardAvoidingView behavior="padding" style={container}>
				<View style={loginForm}>
					<View style={loginTitle}>
						<Text style={titleText}>BBB - POS - LOGIN</Text>
					</View>
					<View style={form}>
						<LoginInput
							title={"Email"}
							keyboardType={"email-address"}
							onChangeText={(value) => this.props.loginFormChange({key: 'user_name', value})}
							error={this.props.user_name_error_message}
							value={this.props.user_name}
							returnKeyType={"next"}
							onEndEditing={() => {
								this.passwordInput.focus()
							}}
						/>
						<LoginInput
							title={"Password"}
							secureTextEntry={true}
							returnKeyType={"go"}
							onChangeText={(value) => this.props.loginFormChange({key: 'password', value})}
							error={this.props.password_error_message}
							value={this.props.password}
							onEndEditing={this.onLoginPress.bind(this)}
							ref={ref => (this.passwordInput = ref)}
						/>
					</View>


				</View>
				<View style={loginButtonView}>
					<LoginButton bgColor={'#17a2b8'} color={'#fff'}
					             onPress={this.onLoginPress.bind(this)}
					             loading={this.props.logining || false}
					             disabled={this.props.logining || false}
					>Sign in</LoginButton>
					{/* <TouchableOpacity style={bigButton} onPress={() => navigation.dispatch({ type: 'Login' })}>
							<Text style={buttonText}>SIGN IN NOW</Text>
						</TouchableOpacity> */}
				</View>
			</KeyboardAvoidingView>
			</View>
		)
	}
}

const styles = {
	containerBoth:{
		flex: 1,
		padding: 300,
		justifyContent: 'space-between',				
	},
	container: {
		flex: 1,
		backgroundColor: "#f8f8f8",
		justifyContent: "center"
	},
	loginForm: {
		flexGrow: 1,
		justifyContent: "center",
		marginTop: 50
	},
	titleText: {

		height: 33,
		fontFamily: "Avenir",
		fontSize: 24,
		fontWeight: "800",
		letterSpacing: -0.58,
		textAlign: "center",
		color: "black"
	},
	form: {
		marginTop: 40
	},
	loginButtonView: {
		justifyContent: 'flex-end'
	}
};

LoginScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
	title: 'Log In',
};

export default LoginScreen;
