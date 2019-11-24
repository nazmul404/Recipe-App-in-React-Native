import React, { Component } from 'react'
import { Text,StyleSheet, TouchableOpacity } from 'react-native'

export default class Button extends Component {
    render() {
        const {onPressButton,title}=this.props;
        return (
            <TouchableOpacity onPress={onPressButton} style={styles.wrapper}>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
        )
    }
}
 
const styles=StyleSheet.create({
    wrapper: {
        // marginTop:8,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        padding:12,
        backgroundColor:'#f9683a'
        
    },
    btnText: {
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
        flex:1,
    }
})