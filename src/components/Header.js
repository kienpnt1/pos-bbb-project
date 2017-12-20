import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, Platform } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Subtitle
} from "native-base";
const { height } = Dimensions.get('window');

export default class HeaderLayout extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Button
                    transparent
                    onPress={this.props.onOpen}
                >
                    <Icon name="menu" style={{ fontSize: 80 }} />
                </Button>
            </View>

        );
    }
}

const styles = StyleSheet.create({

});
