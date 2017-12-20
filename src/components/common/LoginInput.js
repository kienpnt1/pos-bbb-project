import React from 'react';
import {View, Text, TextInput} from 'react-native';

class LoginInput extends React.Component {

	focus() {
		this.refs.input.focus();
	}

	render() {
		const {label, textInput, container, err_message} = styles;
		return (
			<View style={{justifyContent: "center", alignItems: "center"}}>
				<View style={container}>
					<Text style={label}>
						{this.props.title.toUpperCase()}
					</Text>
					<TextInput
						keyboardType={this.props.keyboardType}
						secureTextEntry={this.props.secureTextEntry}
						editable={true}
						autoCorrect={false}
						autoFocus={this.props.autoFocus}
						value={this.props.value}
						onChangeText={this.props.onChangeText}
						style={textInput}
						returnKeyType={this.props.returnKeyType}
						ref={"input"}
						onSubmitEditing={this.props.onEndEditing}
					/>
					<Text style={err_message}>{this.props.error}</Text>
				</View>
			</View>
		)
	}
}

const styles = {
	container: {
		width: '100%',
		marginBottom: 10,
		paddingHorizontal: 20
	},
	label: {
		fontFamily: 'Avenir',
		fontSize: 12,
		color: '#b6b6b6',
		textAlign: 'left',
		opacity: 0.8,
		fontWeight: "500",
	},
	textInput: {
		paddingHorizontal: 4,
		fontFamily: 'Avenir',
		height: 35,
		borderBottomWidth: 1,
		borderColor: '#B6B6B6',
		fontWeight: "500",
		letterSpacing: -0.41,
		color: "#1e1e1e",
		fontSize: 16,
	},
	err_message: {
		fontFamily: 'Avenir',
		color: "#F44336",
		textAlign: "left",
		height: 20
	}
}

export default LoginInput