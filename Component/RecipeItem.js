import React, { Component } from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
import Card from './Common/Card';
import Button from './Common/Button';
import Information from './Information';

export default class RecipeItem extends Component {
    goToDetails=()=> {
        const {navigation,item}=this.props;
        navigation.navigate('Details',{item});
        // console.log("W");
    }

    render() {
        const {item} = this.props;
        return (
            <TouchableOpacity onPress={this.goToDetails}>
              <View style={{marginHorizontal:16}}>
                <Card>
                    <Image style={{height:200,flex:1,borderTopLeftRadius:8,borderTopRightRadius:8}} 
                    resizeMode="cover" source={{uri: item.image_url}} />

                    <Information title={item.title} publisher={item.publisher}/>
                    <Button onPressButton={this.goToDetails} title={"View Details"} />
             
                </Card>
              </View>
            </TouchableOpacity>
        )
    }
}


