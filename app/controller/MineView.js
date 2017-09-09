//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
class MineView extends Component {
    static navigationOptions = {
        title: '我的',
        headerStyle: {
            backgroundColor: '#FF3344',
        },
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>MineView</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default MineView;
