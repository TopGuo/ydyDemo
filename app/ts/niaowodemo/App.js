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
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
    DrawerItems,
    TabBarBottom,
} from 'react-navigation';
// 先引入这个方法
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import HomeScreen from './HomePage';
import MineScreen from './MinePage';
import B from './ts/B';
import C from './ts/C';
import D from './ts/D';

let { width, height } = Dimensions.get('window');
const MainView = TabNavigator({
    B: { screen: B },
    C: { screen: C },
    D: { screen: D },

}, {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        showIcon: true,
        // activeTintColor: '#F4F5F7',
        //mode:'card',
        headerMode: 'float',
        transitionConfig:()=>({
            screenInterpolator:CardStackStyleInterpolator.forHorizontal,
        }),
        lazy:true,
        initialRouteName:'C',
        backBehavior:'none',
        tabBarOptions: { 
            style: { height:69 }, 
            activeBackgroundColor:'white', 
            activeTintColor:'#4ECBFC', 
            inactiveBackgroundColor:'white', 
            inactiveTintColor:'#aaa', 
            showLabel:true, 
            indicatorStyle:{height:0},//android底部的一条线 
            scrollEnabled:true,
        }
    });

const App = DrawerNavigator({
    MainView:{screen:MainView},
    Home: { screen: HomeScreen },
    Mine: { screen: MineScreen },
    
},
    {
        drawerWidth: width / 4 * 3,
        //header: null,
        drawerPosition: 'left',
        //contentComponent: props => <ScrollView><Text>郭东生</Text></ScrollView>
        contentOptions: {
            initialRouteName: 'B', // 默认页面组件
            activeItemKey: 'Notifications',
            labelStyle: {//标签样式
                // color : 'red',
                height: 20,
            },
            activeTintColor: 'white',  // 选中文字颜色
            activeBackgroundColor: '#ff8500', // 选中背景颜色
            inactiveTintColor: '#666',  // 未选中文字颜色
            inactiveBackgroundColor: '#fff', // 未选中背景颜色
            style: {  // 样式
                marginVertical: 0,
            },
        },
        contentComponent: props => {
            return (
                <ScrollView>
                    <View>
                        <View style={{ paddingVertical: 20, paddingHorizontal: 15, backgroundColor: '#ffff' }}>
                            <Text style={{ color: '#ff3233' }}>个人照片</Text>
                            <Image source={require('./assets/images/2.jpg')} />
                        </View>
                        <DrawerItems {...props} />
                    </View>
                </ScrollView>
            )
        },


    }
);

// const App = StackNavigator({
//     MainView:{screen:MainView},
// });

export default App; 


// //把项目/node_modules/react-navigation/src/routers/StackRouter.js文件里的 
// const backRoute = 
//               state.routes.find((route: *) => route.key === action.key);
// 改成 
// const backRoute = 
//               state.routes.find(route => route.routeName === action.key); 
// 但不是很完美, 这里的component要填想返回的组件的前一个组件的routeName,
// 比如你的栈里顺序是home1, home2, home3, home4, 在home4里要返回home2, 
// 使用this.props.navigation.goBack('home3');; 
// 并且又会带出一个问题: goBack()方法没反应了, 必须加个null进去, 
// 写成goBack(null)...