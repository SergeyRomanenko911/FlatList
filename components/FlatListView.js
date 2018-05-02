import React, {Component} from 'react';
import { 
    StyleSheet, 
    AppRegistry, 
    TextInput, 
    View, 
    Text,
    Image,
    ScrollView,
    Dimensions,
    FlatList
        } from 'react-native';
import FlatListData from '../data/FlatList';

class ListItemCOmponent extends Component{
    render(){
        return(
            <View 
                style={{
                    flex:1,
                    flexDirection:'row',
                    backgroundColor: 'mediumseagreen',
                    borderBottomColor:'white',
                    borderBottomWidth:1
                }}
            >
                <Image
                    source={{uri:this.props.item.image}}
                    style={{width:100,height:100, margin:5}}
                />
                <View
                    style={{flex:1, flexDirection:'column'}}
                >
                    <Text style={styles.item}>{this.props.item.name}</Text>
                    <Text style={styles.item}>{this.props.item.title}</Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        color:'white',
        padding:18,
        fontSize:16,
    }
})

export default class FlatListView extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    data={FlatListData}
                    renderItem={({item,index})=>{
                        return(
                            <ListItemCOmponent item={item} index={index}/>
                        );
                    }}
                ></FlatList>
            </View>
        );
    }
}