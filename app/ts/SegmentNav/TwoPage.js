'use strict';

import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import LinkButton from '../art/artcomponent/LinkButton'
export default class TwoPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.nameAnimated}`,
        header:null,
    });


    render(){
        return(
            <View style={styles.container}>
                <Text>TwoPage</Text>
                <LinkButton msgName="点击跳转" onPressCall={()=>{
                   this.goPage("FourPage","FourPage")}}
                />
            </View>
        );
    }

    goPage=(pageName,pageTitle)=>{
        this.props.navigation.navigate(pageName,{ nameAnimated: pageTitle });
    }
}

const  styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});