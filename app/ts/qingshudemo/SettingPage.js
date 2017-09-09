import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
export default class SettingPage extends Component {

    static navigationOptions = {
        drawerLabel: '设置',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./icons/my.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),

    };

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this._skip.bind(this)}>设置</Text>
            </View>
        );
    }

    _skip() {
        this.props.navigation.navigate("DrawerOpen");
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFF'
    },
    icon: {
        width: 24,
        height: 24,
    },
});