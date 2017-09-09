import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from 'react-native';
export default class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
        };
    }
    componentDidMount() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,                      // 动画中的变量值
            {
                toValue: 1,                             // 透明度最终变为1，即完全不透明
            }
        ).start();
        //1s执行动画
        this.timerShow;
    }
    //封装一个timer
    timerShow = () => {
        while (true) {
            setTimeout(function () {
                Animated.timing(                            // 随时间变化而执行的动画类型
                    this.state.fadeAnim,                      // 动画中的变量值
                    {
                        toValue: 1,                             // 透明度最终变为1，即完全不透明
                    }
                ).start();
            }, 1000);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.Text
                    style={{ opacity: this.state.fadeAnim }}
                >
                    杨丫丫大傻瓜
                </Animated.Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fa3232'
    },
})