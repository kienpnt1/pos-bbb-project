import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, Platform, StatusBar, ListView } from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	Left,
	Right,
	Body
} from "native-base";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from "react-native-easy-grid";

import HeaderLayout from './Header';
import CartHome from './cart/CartHome';

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFF"
	},
	list: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	item: {
		backgroundColor: 'gray',
		margin: 5,
		height: 300,
		width: 290
	}
});

const datas = [
	{
		name: "Anatomy",
		route: "Anatomy",
		icon: "phone-portrait",
		bg: "#C5F442"
	},
	{
		name: "Actionsheet",
		route: "Actionsheet",
		icon: "easel",
		bg: "#C5F442"
	},
	{
		name: "Header",
		route: "Header",
		icon: "phone-portrait",
		bg: "#477EEA",
		types: "8"
	},
	{
		name: "Footer",
		route: "Footer",
		icon: "phone-portrait",
		bg: "#DA4437",
		types: "4"
	},
	{
		name: "Badge",
		route: "NHBadge",
		icon: "notifications",
		bg: "#4DCAE0"
	},
	{
		name: "Button",
		route: "NHButton",
		icon: "radio-button-off",
		bg: "#1EBC7C",
		types: "9"
	},
	{
		name: "Card",
		route: "NHCard",
		icon: "keypad",
		bg: "#B89EF5",
		types: "5"
	},
	{
		name: "Check Box",
		route: "NHCheckbox",
		icon: "checkmark-circle",
		bg: "#EB6B23"
	},
	{
		name: "Deck Swiper",
		route: "NHDeckSwiper",
		icon: "swap",
		bg: "#3591FA",
		types: "2"
	},
	{
		name: "Fab",
		route: "NHFab",
		icon: "help-buoy",
		bg: "#EF6092",
		types: "2"
	},
	{
		name: "Form & Inputs",
		route: "NHForm",
		icon: "call",
		bg: "#EFB406",
		types: "12"
	},
	{
		name: "Icon",
		route: "NHIcon",
		icon: "information-circle",
		bg: "#EF6092"
	},
	{
		name: "Layout",
		route: "NHLayout",
		icon: "grid",
		bg: "#9F897C",
		types: "5"
	},
	{
		name: "List",
		route: "NHList",
		icon: "lock",
		bg: "#5DCEE2",
		types: "7"
	},
	{
		name: "ListSwipe",
		route: "ListSwipe",
		icon: "swap",
		bg: "#C5F442",
		types: "2"
	},
	{
		name: "Picker",
		route: "NHPicker",
		icon: "arrow-dropdown",
		bg: "#F50C75"
	},
	{
		name: "Radio",
		route: "NHRadio",
		icon: "radio-button-on",
		bg: "#6FEA90"
	},
	{
		name: "SearchBar",
		route: "NHSearchbar",
		icon: "search",
		bg: "#29783B"
	},
	{
		name: "Segment",
		route: "Segment",
		icon: "menu",
		bg: "#0A2C6B",
		types: "2"
	},
	{
		name: "Spinner",
		route: "NHSpinner",
		icon: "navigate",
		bg: "#BE6F50"
	},
	{
		name: "Tabs",
		route: "NHTab",
		icon: "home",
		bg: "#AB6AED",
		types: "3"
	},
	{
		name: "Thumbnail",
		route: "NHThumbnail",
		icon: "image",
		bg: "#cc0000",
		types: "2"
	},
	{
		name: "Toast",
		route: "Toast",
		icon: "albums",
		bg: "#C5F442"
	},
	{
		name: "Typography",
		route: "NHTypography",
		icon: "paper",
		bg: "#48525D"
	}
];

class Home extends React.Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2, r3, r4) => r1 !== r2 && r2 !== r3 && r3 !== r4 });
		this.state = {
			dataSource: ds.cloneWithRows(datas),
		};
	}

	openMenu() {
		const { open } = this.props;
		open();
	}

	render() {
		const { logout, loginScreen, isLoggedIn } = this.props;
		return (
			<Container style={styles.container}>
				<HeaderLayout onOpen={this.openMenu.bind(this)} />
				<Grid style={{ margin: 20 }}>
					<Col size={75} style={{ marginRight: 20, borderColor: "gray", borderWidth: 1 }}>
						<View>
							<ListView contentContainerStyle={styles.list}
								dataSource={this.state.dataSource}
								renderRow={(rowData) => <Text style={styles.item}>{rowData.name}</Text>}
							/>
						</View>
					</Col>
					<Col size={25} style={{ borderColor: "gray", borderWidth: 1 }}>
						<CartHome />
					</Col>
				</Grid>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch({ type: 'Logout' }),
	loginScreen: () =>
		dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
