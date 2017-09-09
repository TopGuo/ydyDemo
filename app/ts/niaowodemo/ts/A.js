//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

// create a component
class A extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ backgroundColor: '#dd66dd' }}
                    onPress={() => {
                        this.props.navigation.navigate('B');
                    }}
                >
                    <Text>点击又A进入B</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.navigation.navigate.goBack();
                    }}
                >
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
export default A;
