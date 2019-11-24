import React, { Component } from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'
import Card from '../Component/Common/Card';
import Details from '../Component/Details';

export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Recipe Details'
    };

    render() {
        const {navigation} = this.props;
        const item = navigation.getParam('item',{});
        // console.log("Item Found "+item.publisher);
        return (
            <View style={{marginHorizontal:16,marginTop:24,}}>
                <Card>

                    <Image style={{height:300,borderTopLeftRadius:8,borderTopRightRadius:8}}
                    resizeMode='cover'
                    source={{uri:item.image_url}}
                    />

                    <Details itm={item}/>
                </Card>
            </View>
        )
    }
}
