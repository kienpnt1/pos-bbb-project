import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Platform, Dimensions } from 'react-native';
import {
    Content,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge
} from "native-base";
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import profileIcon from '../media/appIcon/contact.png';

const drawerCover = require("../../assets/drawer-cover.png");
const drawerImage = require("../../assets/logo-kitchen-sink.png");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    drawerCover: {
        alignSelf: "stretch",
        height: deviceHeight / 3.5,
        width: null,
        position: "relative",
        marginBottom: 10
    },
    drawerImage: {
        position: "absolute",
        left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
        top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
        width: 210,
        height: 75,
        resizeMode: "cover"
    },
    text: {
        fontWeight: Platform.OS === "ios" ? "600" : "400",
        fontSize: 20,
        marginLeft: 100
    },
    badgeText: {
        fontSize: Platform.OS === "ios" ? 13 : 11,
        fontWeight: "400",
        textAlign: "center",
        marginTop: Platform.OS === "android" ? -3 : undefined
    }
});

const datas = [
    {
        name: "Orders",
        route: "Orders",
        icon: "keypad",
        bg: "#4DCAE0"
    },
    {
        name: "Setting",
        route: "Setting",
        icon: "information-circle",
        bg: "#1EBC7C"
    },
    {
        name: "Logout",
        route: "Logout",
        icon: "lock",
        bg: "#B89EF5"
    }
];


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4
        };
    }
    render() {
        const {
            container, profile, btnStyle, btnText,
            btnSignInStyle, btnTextSignIn, loginContainer,
            username
        } = styles;
        const { logout, loginScreen, isLoggedIn, orders, setting } = this.props;
        return (
            <Container>
                <Content
                    bounces={false}
                    style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
                >
                    <Image source={drawerCover} style={styles.drawerCover} />
                    <Image square style={styles.drawerImage} source={drawerImage} />

                    <List>
                        <ListItem noBorder>
                            <TouchableOpacity onPress={orders}>
                                <Left>
                                    <Icon
                                        name="keypad"
                                        style={{ color: "#777", fontSize: 26, width: 30 }}
                                    />
                                    <Text style={styles.text}>Orders</Text>
                                </Left>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem noBorder>
                            <TouchableOpacity onPress={setting}>
                                <Left>
                                    <Icon
                                        name="information-circle"
                                        style={{ color: "#777", fontSize: 26, width: 30 }}
                                    />
                                    <Text style={styles.text}>Setting</Text>
                                </Left>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem noBorder>
                            <TouchableOpacity onPress={logout}>
                                <Left>
                                    <Icon
                                        name="lock"
                                        style={{ color: "#777", fontSize: 26, width: 30 }}
                                    />
                                    <Text style={styles.text}>Logout</Text>
                                </Left>
                            </TouchableOpacity>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: 'Logout' }),
    orders: () => dispatch(NavigationActions.navigate({ routeName: 'Orders' })),
    setting: () => dispatch(NavigationActions.navigate({ routeName: 'Setting' })),
});


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
