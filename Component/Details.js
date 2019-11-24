import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Details extends Component {
    render() {
        const {itm}=this.props;
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Title:  {itm.title}</Text>
                <Text style={styles.text}>Publisher:  {itm.publisher}</Text>
                <Text style={styles.text}>Recipe ID:  {itm.recipe_id}</Text>
                <Text style={styles.text}>Social Rank:  {itm.social_rank}</Text>
                <Text style={styles.text}>Publisher Link:  {itm.publisher_url}</Text>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    wrapper: {
        backgroundColor:'#efebe9',
        paddingLeft:24,
        paddingVertical:24,

    },
    text: {
        paddingVertical:4,
        fontSize:18,
        fontStyle:'italic'

        // fontWeight:'bold'
    },
})
