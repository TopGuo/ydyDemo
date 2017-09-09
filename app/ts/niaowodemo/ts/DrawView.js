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
export default class DrawView extends Component {
    static navigationOptions = {
        drawerLabel: 'DrawerView',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/1.jpg')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>抽屉！</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})