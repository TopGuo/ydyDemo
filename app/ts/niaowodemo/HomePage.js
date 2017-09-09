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
export default class HomePage extends Component {

    static navigationOptions = {
        drawerLabel: '首页',
        //header:null,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./assets/images/1.jpg')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),

    };

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this._skip.bind(this)}>首页</Text>
            </View>
        );
    }

    _skip() {
        this.props.navigation.navigate("DrawerOpen");
    }
}
/**
 * 
 * contentComponent: props => {
            console.log('contentComponent');
            console.log(props);
            return (
                <ScrollView>
                    <View>
                        <View style={{ paddingVertical: 20, paddingHorizontal: 15, backgroundColor: '#000' }}>
                            <Text style={{ color: '#FFF' }}>ser Name</Text>
                        </View>
                        <DrawerItems {...props} />
                    </View>
                </ScrollView>
            )
        },
 */

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