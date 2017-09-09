//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

// create a component
class B extends Component {
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            header:'ok',
            drawerLabel: '抽屉',
            //title: '上传信息',
            headerRight: (
                <TouchableOpacity
                    onPress={() => {
                        state.params.navigatePress()
                    }}>
                    <Text>下一页</Text>
                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity
                    onPress={() => {
                        state.params.drawToggle()
                    }}
                >
                    <Text>抽屉</Text>
                </TouchableOpacity>
            ),
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../assets/images/1.jpg')}
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
    }
    drawToggle = () => {
        console.log('==========================');
        console.log('aaa');
        console.log('==========================');
        this.props.navigation.navigate("DrawerOpen");
        // this.state.toggleOC == 'DrawerClose' ? this.state.toggleOC : this.setState({ toggleOC: 'DrawerOpen' })
        // this.props.navigation.navigate(this.state.toggleOC); // open drawer

        //this.props.navigation.navigate('DrawerClose'); // close drawer
        //this.props.navigation.navigate('Navigator');
    }
    navigatePress = () => {
        alert('点击headerRight');
        console.log('aaaaa');
    }
    constructor(props) {
        super(props);
        this.state = {
            toggleOC: 'DrawerClose'
        }
    }
    render() {
        const { state, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ backgroundColor: '#dd66dd' }}
                    onPress={() => {
                        //this.props.navigation.navigate('C');
                        this.props.navigation.navigate("DrawerOpen");
                    }}
                >
                    <Text>点击又B进入C</Text>
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
    },
    icon: {
        width: 24,
        height: 24,
    },
});

//make this component available to the app
export default B;
