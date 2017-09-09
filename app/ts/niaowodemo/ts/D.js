//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class D extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        onTabPress: (() => {
            alert('将要请求网络');
        })
    });
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ backgroundColor: '#ff2323' }}
                    onPress={() => {
                        this.props.navigation.navigate('A');
                    }}
                >
                    <Text>点击又D进入A</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>点击返回上一级</Text>
                </TouchableOpacity>

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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default D;
