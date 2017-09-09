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
const images = [
    { src: require('../assets/guide/1.png') },
    { src: require('../assets/guide/2.png') },
    { src: require('../assets/guide/3.png') },
    { src: require('../assets/guide/4.png') }
];
export default class TargetMiddle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={styles.touchable}
                >
                    <Image source={images[0].src} />
                    <Text>个人健康报告</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={styles.touchable}
                >
                    <Image source={images[1].src} />
                    <Text>个人饮食计划</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={styles.touchable}
                >
                    <Image source={images[2].src} />
                    <Text>家庭健康报告</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={styles.touchable}
                >
                    <Image source={images[3].src} />
                    <Text>家庭饮食计划</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height:80,
        flexDirection:'row',
        backgroundColor:'#fff',
        //marginBottom:410,
    },
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10,
    }
})