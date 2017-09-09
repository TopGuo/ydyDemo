import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Image} from 'react-native';

export default class TabMyPage extends Component {
    static navigationOptions = {
        headerRight: (<TouchableOpacity
                onPress={() => {
                   console.log("我的");
            }}>
                <Text style={{ color: '#4a4a4a', fontSize: 20 }}>帮助</Text>
            </TouchableOpacity>
        )
    };


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('MinePage');
                    }}
                >
                    <Text>点击进入MinePage</Text>
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
    },
    tabImg:{

    }
});
