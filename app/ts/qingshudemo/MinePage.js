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

export default class MinePage extends Component {
    static navigationOptions = {

    };

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this._skip.bind(this)}>再次打开DrawerNavigator</Text>
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