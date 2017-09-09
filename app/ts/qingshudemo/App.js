import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Platform
} from 'react-native';

let { width, height } = Dimensions.get('window');
import {
    TabNavigator,
    DrawerNavigator,
    DrawerItems,
    StackNavigator
} from 'react-navigation';

import SettingPage from './SettingPage';
import MinePage from './MinePage';
import TabHomePage from './ts/TabHomePage';
import TabShopPage from './ts/TabShopPage';
import TabMyPage from './ts/TabMyPage';

const HomeIcon = require('./icons/home.png');
const MsgIcon = require('./icons/msg.png');
const MyIcon = require('./icons/my.png');

const HomePageStack = StackNavigator({
    TabHomePage : {
        screen : TabHomePage,
        navigationOptions : () => TabOptions('首页', HomeIcon, HomeIcon, '首页'),
    },
}, {
    mode : 'modal',
});

const MyPageStack = StackNavigator({
    TabMyPage : {
        screen : TabMyPage,
        navigationOptions : () => TabOptions('我的', MyIcon, MyIcon, '我的'),
    },

}, {
    mode : 'modal',
});

const ShopPageStack = StackNavigator({
    TabShopPage : {
        screen : TabShopPage,
        navigationOptions : () => TabOptions('购物车', MsgIcon, MsgIcon, '购物车'),
    },
}, {
    mode : 'modal',
});

const MainView = TabNavigator({
    TabHomePage : {
        screen : HomePageStack,
        navigationOptions : {

        }
    },
    TabShopPage : {
        screen : ShopPageStack,
        navigationOptions : {

        }
    },
    TabMyPage : {
        screen : MyPageStack,
        navigationOptions : {

        }
    },
}, {
    tabBarPosition : 'bottom',
    swipeEnabled : false,
    animationEnabled : false,
    backBehavior : 'none',
    lazy : true,
    tabBarOptions : {
        labelStyle : {
            margin : 2,
            paddingTop : 2,
        },
        iconStyle : {
            height : 35,
            width : 35,
            margin : 0
        },
        style : {
            height : 49,
            backgroundColor : 'white'
        },
        activeBackgroundColor : 'white',
        activeTintColor : '#FF3344',
        inactiveBackgroundColor : 'white',
        inactiveTintColor : '#aaa',
        showIcon : true,
        showLabel : false,
        pressOpacity : 0.3,
        indicatorStyle : {
            height : 0,
        }
    },

});

const App = DrawerNavigator({
        MainView : { screen : MainView },
        SettingPage : { screen : SettingPage },
        MinePage : { screen : MinePage },
    }, {
        drawerWidth : width / 4 * 3,
        drawerPosition : 'left',
        contentOptions : {
            initialRouteName : 'B',
            activeItemKey : 'Notifications',
            labelStyle : {
                height : 20,
            },
            activeTintColor : 'white',
            activeBackgroundColor : '#ff8500',
            inactiveTintColor : '#666',
            inactiveBackgroundColor : '#fff',
            style : {
                marginVertical : 0,
            },
        },

        contentComponent : props => {
            return (
                <ScrollView>
                    <View>
                        <View style={{backgroundColor: '#ffff' }}>
                            <TouchableOpacity
                                onPress={() => {
                                  props.navigation.navigate('MinePage');
                               }}>
                                <Text style={styles.titleMsg}>个人照片</Text>
                                <Image source={require('./icons/one.png')} style={styles.img}/>
                            </TouchableOpacity>
                        </View>
                        <DrawerItems {...props} />
                    </View>
                </ScrollView>
            )
        },
    },
);

const TabOptions = (tabBarTitle, normalImage, selectedImage) => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({ tintColor, focused }) => {
        return (
            <View style={styles.tabImg}>
                <Image
                    source={!focused ? normalImage : selectedImage}
                    style={[{height:26,width:26}, {tintColor: tintColor}]}
                />
                <Text style={{color:focused?'#FF3344':'#43484d'}}>{tabBarTitle}</Text>
            </View>
        )
    });

    const headerTitleStyle = { fontSize : (Platform.OS === 'ios') ? 20 : 24, color : 'white', alignSelf : 'center' };
    const tabBarVisible = true;
    return { tabBarLabel, tabBarIcon, headerTitleStyle, tabBarVisible };
};

const styles = StyleSheet.create({
    tabImg : {
        alignItems : 'center',
        justifyContent : 'center',
    },
    img : {
        height : 100,
    },
    titleMsg : {
        textAlign : 'center',
        color : '#ff3233',
        paddingTop : 40,
        paddingBottom : 20,
    }
});

export default App; 