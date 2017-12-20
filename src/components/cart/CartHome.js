import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, Platform, StatusBar, ListView } from 'react-native';
import {
    Left,
    Right
} from "native-base";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DividerLine from '../common/DividerLine';

const iconUser = require("../../media/appIcon/contact.png");
const iconCartPoduct = require("../../media/appIcon/cart0.png");

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        margin: 10
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',        
        borderColor: "#eee",
        borderWidth: 1,
        alignSelf: 'stretch',
        marginTop: 10,
        marginBottom: 10
    },
    item: {
        backgroundColor: 'gray',
        margin: 5,
    },
    boxContact: {
        marginTop: 20
    },
    itemBox: {
        paddingBottom: 10
    }
});

const datas = [
    {
        name: "KienPNT",
        icon: "phone-portrait",
        bg: "#C5F442",
        email: "kienpnt1@gmail.com"
    },
    {
        name: "KienPnt-1",
        route: "Actionsheet",
        icon: "easel",
        bg: "#C5F442",
        email: "kienpnt2@gmail.com"
    }
];

class CartHome extends React.Component {
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
            <View style={styles.container}>
                <View style={{ flexWrap: "wrap" }}>
                    <Text style={{ justifyContent: 'center' }}>CART(2)</Text>
                </View>
                <View style={styles.list}>
                    <Left>
                        <View style={{ width: 45, height: 50 }}>
                            <Image source={iconUser} style={{ marginLeft: 10, width: 45, height: 50 }} />
                        </View>
                    </Left>
                    <Right>
                        <View style={{ width: 200, height: 90 }}>
                            <View style={styles.boxContact}>
                                <Text style={styles.itemBox}>Customer name: KienPNT</Text>
                                <Text style={styles.itemBox}>Email: kienpnt1@gmail.com</Text>
                            </View>
                        </View>
                    </Right>
                </View>

                <DividerLine />

                <View style={styles.list}>
                    <Left>
                        <View style={{ width: 45, height: 50 }}>
                            <Image source={iconCartPoduct} style={{ marginLeft: 10, width: 45, height: 50 }} />
                        </View>
                    </Left>
                    <Right>
                        <View style={{ width: 200, height: 90 }}>
                            <View style={styles.boxContact}>
                                <Text style={styles.itemBox}>Customer name: KienPNT</Text>
                                <Text style={styles.itemBox}>Email: kienpnt1@gmail.com</Text>
                            </View>                            
                        </View>
                    </Right>
                </View>
                <View style={styles.list}>
                    <Left>
                        <View style={{ width: 45, height: 50 }}>
                            <Image source={iconCartPoduct} style={{ marginLeft: 10, width: 45, height: 50 }} />
                        </View>
                    </Left>
                    <Right>
                        <View style={{ width: 200, height: 90 }}>
                            <View style={styles.boxContact}>
                                <Text style={styles.itemBox}>Customer name: KienPNT</Text>
                                <Text style={styles.itemBox}>Email: kienpnt1@gmail.com</Text>
                            </View>
                        </View>
                    </Right>
                </View>

                <DividerLine />
            </View >
        );
    }
}

export default CartHome;
