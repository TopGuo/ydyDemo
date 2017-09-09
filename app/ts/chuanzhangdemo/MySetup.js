import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';

export default  class MySetup extends Component{
    static navigationOptions = {
        title:'设置',
        drawerLabel: '设置',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./image/1.png')}
                style={[styles.tabIcon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
             <View style={{backgroundColor:'#fff'}}>
                <Button
                    style={{padding:20}}
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="点击打开侧滑菜单"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回我的界面"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
    },
});

