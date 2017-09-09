//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, WebView, TextInput, ToastAndroid } from 'react-native';

// create a component
class FindView extends Component {
    static navigationOptions = {
        title: '发现',
        headerStyle: {
            backgroundColor: '#FF3344',
        },
    }
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://www.cnblogs.com/gdsblog',
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <WebView source={{ uri: this.state.url }}
                    ref={webView => this.webView = webView}></WebView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

//make this component available to the app
export default FindView;
