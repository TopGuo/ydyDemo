//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import TargetMiddle from '../component/TargetMiddle';

let { width, height } = Dimensions.get('window');
let Images = [
    { src: require('../assets/images/1.jpg') },
    { src: require('../assets/images/2.jpg') },
    { src: require('../assets/images/3.jpg') },
    { src: require('../assets/images/4.jpg') }
];
const loading = require('../assets/images/loading.gif');

// create a component
class TargetView extends Component {
    static navigationOptions = {
        title: '目标',
        headerStyle: {
            backgroundColor: '#FF3344',
        },
    }

    _renderSwiper() {
        return (
            <Swiper
                style={styles.swiperStyle}
                height={200}
                horizontal={true}
                autolay={true}
                loop={true}
                paginationStyle={{ bottom: 10 }}
                showsPagination={true}
                index={0}
                dotStyle={{ backgroundColor: 'rgba(0,0,0,.2)', width: 6, height: 6 }}
                activeDotStyle={{ backgroundColor: 'rgba(0,0,0,.5)', width: 6, height: 6 }}>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[0].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[1].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[2].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[3].src}></Image>
                </View>
            </Swiper>
        )
    }


    render() {
        return (
            <View
                style={styles.container}>
                <ScrollView>
                    {this._renderSwiper()}
                </ScrollView>
                <TargetMiddle/>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    swiperStyle: {
        marginTop: 10,
        width: width,
    },
    swiperItem: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    imageStyle: {
        flex: 1,
        width: width,
    },
});

//make this component available to the app
export default TargetView;
