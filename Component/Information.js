import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'

export default class Information extends Component {
    render() {
        const {title,publisher} = this.props;
        return (
            <View style={styles.wrapper}>
                <Text>
                    <Text style={styles.title}>Recipe Name </Text>
                        <Text> - </Text>
                        <Text style={styles.detailsTxt}> {title}</Text>
                    </Text>
                    <Text>
                        <Text style={styles.title}>Recipe Cook </Text>
                        <Text> - </Text>
                        <Text style={styles.detailsTxt}> {publisher}</Text>
                    </Text>                   
            </View>
        )
    }
}

const styles=StyleSheet.create({
    wrapper: {
        backgroundColor:'#fff',
        paddingLeft:12,
        paddingVertical:14,

    },
    title: {
        fontSize:16,
        fontWeight:'bold',

    },
    detailsTxt: {
        fontSize:16,
    }
})
