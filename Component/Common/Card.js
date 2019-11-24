import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Card extends Component {
    render() {
        const {children} = this.props;
        return (
            <View style={styles.wrapper}>{children}</View>
        )
    }
}

const styles=StyleSheet.create({
    wrapper: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
        borderWidth:0.2,
        borderRadius:8,
        // marginHorizontal:25,
        marginBottom:20,
        overflow:'hidden',
        // backgroundColor:'#bf360c'

    }
})
