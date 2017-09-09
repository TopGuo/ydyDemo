import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

export default class TabHomePage extends Component {
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            headerRight: (
                <TouchableOpacity
                    onPress={() => {
                        state.params.navigatePress()
                    }}>
                    <View style={styles.titleRight}>
                        <Text>下一页</Text>
                    </View>

                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity
                    onPress={() => {
                        state.params.drawToggle()
                    }}
                >
                    <View style={styles.titleLeft}>
                        <Text>打开抽屉</Text>
                    </View>
                </TouchableOpacity>
            ),
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../icons/my.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        };
    };

    componentWillMount = () => {
        this.props.navigation.setParams({
            navigatePress: this.navigatePress,
            drawToggle: this.drawToggle,
        })
    };

    drawToggle = () => {
        this.props.navigation.navigate("DrawerOpen");
    };

    navigatePress = () => {
        alert('点击下一页');
    };


    render() {
        const { state, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>这里是首页</Text>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("DrawerOpen");
                    }}
                >
                    <Text>打开DrawerNavigator</Text>
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
        backgroundColor:'#FFF'
    },
    icon: {
        width: 24,
        height: 24,
    },
    titleLeft:{
        marginLeft:20,
    },
    titleRight:{
       marginRight:20,
    }
});
