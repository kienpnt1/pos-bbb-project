import React from 'react';
import { StyleSheet, View } from 'react-native';

class DividerLine extends React.Component {
    render() {
        return (
            <View style={{
                borderBottomColor: '#eee',
                borderBottomWidth: 1,
                margin: 15
            }}></View>
        );
    }
}

export default DividerLine;
