import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,DeviceEventEmitter} from 'react-native';

export default class TabShopPage extends Component {
    static navigationOptions = {
        headerRight: (<TouchableOpacity
            onPress={() => {
                   console.log("购物车");
            }}>
            <Text style={{color: '#4a4a4a', fontSize: 16 }}>帮助</Text>
        </TouchableOpacity>
        )
    };



    render() {
        const { state, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('TabMyPage');
                    }}
                >
                    <Text>点击跳转到TabMyPage</Text>
                </TouchableOpacity>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

