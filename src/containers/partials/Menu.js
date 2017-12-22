import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Platform, Dimensions, ListView } from 'react-native';
import { Content, List, ListItem, Icon, Container, Left } from "native-base";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import profileIcon from '../../media/appIcon/contact.png';
const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4
        };
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2, r3) => r1 !== r2 && r2 !== r3 });
        this.state = {
            dataSource: ds.cloneWithRows(navigationBar),
        };
    }
    render() {
        const { auth } = this.props;

        const logoutJSX = (
            <View>
                <TouchableOpacity style={styles.buttonLogin}
                    activeOpacity={0.8}
                    onPress={() => Actions.login_screen()}
                >
                    <Left>
                        <Text style={styles.textButtonLogin}>Sign In</Text>
                    </Left>
                </TouchableOpacity>
            </View>
        );

        const loginJSX = (
            <View>
                <Image source={drawerCover} style={styles.drawerCover} />
                <Image square style={styles.drawerImage} source={drawerImage} />

                <List>
                    <ListView 
                        noBorder
                        dataSource={this.state.dataSource}
                        renderRow={
                            (rowData) => (<TouchableOpacity>
                                <Left>
                                    <Icon
                                        name={rowData.icon}
                                        style={{ color: "#777", fontSize: 26, width: 30 }}
                                    />
                                    <Text style={styles.text}>{rowData.name}</Text>
                                </Left>
                            </TouchableOpacity>
                            )}
                    />
                </List>
            </View>
        );
        const mainJSX = auth.isAuthenticated ? loginJSX : logoutJSX;

        return (
            <Container>
                <Content
                    bounces={false}
                    style={styles.menu}
                >
                    {mainJSX}
                </Content>
            </Container>
        );
    }
}

const navigationBar = [
    {
        name: "Orders",
        route: "Orders",
        icon: "keypad"
    },
    {
        name: "Setting",
        route: "Setting",
        icon: "information-circle"
    },
    {
        name: "Logout",
        route: "Logout",
        icon: "lock"
    }
];

const styles = StyleSheet.create({
    menu: {
        borderColor: "#eee",
        borderWidth: 1,
        backgroundColor: "#fff", top: -1
    },
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
    },
    textButtonLogin: {
        fontSize: 30,
        color: '#fff',
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: "Avenir",
        lineHeight: 50,
        fontWeight: "500"
    },
    buttonLogin: {
        height: 74,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#17a2b8'
    }
});

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};
export default connect(mapStateToProps)(Menu);