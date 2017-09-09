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
        drawerLabel: '我',
        //header:null,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./assets/images/2.jpg')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this._skip.bind(this)}>我</Text>
            </View>
        );
    }

    /**  
     * 跳转  
     */
    _skip() {
        //this.props.navigation.goBack();
        this.props.navigation.navigate("DrawerOpen");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
});