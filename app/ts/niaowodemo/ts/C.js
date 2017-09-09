//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class C extends Component {
    static navigationOptions = {
        title: '发信息',
        headerStyle: {
            backgroundColor: '#0269D3',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            alignSelf: 'center',
        },
        headerRight: (<TouchableOpacity
            onPress={() => {
                PubSub.publish('bang');
            }}>
            <Text style={{ color: '#ffffff', fontSize: 20 }}>帮助</Text>
        </TouchableOpacity>
        )
    }
    render() {
        const { state, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ backgroundColor: '#dd66dd' }}
                    onPress={() => {
                        this.props.navigation.navigate('D');
                    }}
                >
                    <Text>点击又C进入D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        goBack();
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
export default C;
