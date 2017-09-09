import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Platform,
    Animated,
    Dimensions,
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import MineView from './controller/MineView';
import TargetView from './controller/TargetView';
import FindView from './controller/FindView';
//引导页面
import guideView from './guide/guideView';
import splashView from './guide/splashView';

const TargetIcon = require('./assets/home.png');
const FindIcon = require('./assets/msg.png');
const MyIcon = require('./assets/my.png');

const MyTabNavigator = TabNavigator({
    TargetView: {
        screen: TargetView,
        navigationOptions: () => tabOption('目标', TargetIcon, TargetIcon),
    },
    FindView: {
        screen: FindView,
        navigationOptions: () => tabOption('发现', FindIcon, FindIcon),
    },
    MineView: {
        screen: MineView,
        navigationOptions: () => tabOption('我的', MyIcon, MyIcon),
    },
},
    {
        //----------------------
        tabBarPosition: 'bottom',//显示在底部 android默认显示在顶部
        swipeEnabled: false,//禁止滑动
        animationEnabled: false,//切换页面时不显示动画
        backBehavior: 'none',//按住 back键 是否返回第一个tab
        lazy: true,//延迟加载
        tabBarOptions: {
            labelStyle: {
                margin: 2,
                paddingTop: 5,
                fontSize: 18,//z字体大小
            },
            iconStyle: {
                marginTop: 5,
                height: 45,
                width: 45,
            },
            style: {
                height: 69,
                backgroundColor: 'white',//tabbar 背景色
            },
            activeBackgroundColor: 'white',
            activeTintColor: '#FF3344',
            inactiveBackgroundColor: 'white',
            inactiveTintColor: '#aaa',
            showIcon: true,
            showLabel: false,
            pressOpacity: 0.3,//透明度
            indicatorStyle: {
                height: 0,
            }
        },

    }

);
const App = StackNavigator({
    splashView: {
        screen: splashView,
        navigationOptions: {
            header: null,
        }
    },
    guideView: {
        screen: guideView,
        navigationOptions: {
            header: null,
        }
    },
    MyTabNavigator: {
        screen: MyTabNavigator
    },
}, {
        transitionConfig: () => ({
            // 只要修改最后的forVertical就可以实现不同的动画了。 forHorizontal 从右向左 forFadeFromBottomAndroid  安卓那种的从下向上
            screenInterpolator: CardStackStyleInterpolator.forVertical,//forVertical 从下向上
        })
    });


const tabOption = (tabBarTitle, normalImage, selectedImage) => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({ tintColor, focused }) => {
        return (
            <View style={styles.tabImg}>
                <Image
                    source={!focused ? normalImage : selectedImage}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
                <Text style={{ color: focused ? '#FF3344' : '#43484d' }}>{tabBarTitle}</Text>
            </View>
        )
    });
    const headerLeft = null
    const headerTitleStyle = { fontSize: (Platform.OS === 'ios') ? 20 : 24, color: '#fff', alignSelf: 'center' };
    const tabBarVisible = true;
    return { tabBarLabel, tabBarIcon, headerTitleStyle, tabBarVisible, headerLeft };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});

export default App;