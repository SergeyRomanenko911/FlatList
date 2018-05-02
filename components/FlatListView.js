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
    FlatList,
    Alert
        } from 'react-native';

import Swipeout from 'react-native-swipeout';
import FlatListData from '../data/FlatList';

class ListItemCOmponent extends Component{
    constructor(props){
        super(props);
        this.state={
            activeRowKey:null
        }
    }
    render(){
        const swipeSettings = {
            autoClose:true,
            onClose:(secId, rowId, direction)=>{
                if(this.state.activeRowKey!==null){
                    this.setState({
                        activeRowKey:null
                    });
                }
            },
            onOpen:(secId, rowId, direction)=>{
                this.setState({
                    activeRowKey:this.props.item.key
                });
            },
            right:[
                {
                    onPress:()=>{
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are u sure you want to delete?',
                            [
                                {text:'No', onPress:()=>console.log('Cancel Pressed'), style:'cancel'},
                                {text:'Yes', onPress: ()=>{
                                    FlatListData.splice(this.props.index, 1);
                                    //Rfresh!
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},
                            ],
                            {cancelable:true}
                        );
                    },
                    text:'Delete', type:'delete'
                }
            ],
            rowId:this.props.index,
            sectionId:1

        }
        return(
            <Swipeout
                {...swipeSettings}
            >
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
            </Swipeout>
            
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
    constructor(props){
        super(props);
        this.state={
            deleteRowKey:null
        }
    }
    refreshFlatList = (delKey) => {
        this.setState((prevState)=>{
            return {
                deleteRowKey: delKey
            }
        })
    }
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    data={FlatListData}
                    renderItem={({item,index})=>{
                        return(
                            <ListItemCOmponent item={item} index={index} parentFlatList = {this}/>
                        );
                    }}
                ></FlatList>
            </View>
        );
    }
}