import React, {Component} from 'react';
import { 
    StyleSheet, 
    AppRegistry, 
    TextInput, 
    View, 
    Text,
    Image,
    ScrollView,
    Dimensions
        } from 'react-native';
import Button from 'react-native-button'

export default class VerticalScrollView extends Component{
    render(){
        let screenWidth= Dimensions.get('window').width;
        
        return(
            <ScrollView
                keyboardDismissMode='on-drag'
                maximumZoomScale={3}
                minimumZoomScale={0.2}
            >
                <Image 
                    source={require('../p1.jpg')}
                    style={{width:screenWidth, height:screenWidth*1600/2400}}
                ></Image>
                <Text
                    style={{
                        fontSize:20,
                        padding:15,
                        color:'white',
                        textAlign:'center',
                        backgroundColor:'green'
                    }}
                >This is a text</Text>
                <Text
                    style={{
                        fontSize:20,
                        padding:15,
                        color:'white',
                        textAlign:'center',
                        backgroundColor:'red'
                    }}
                >This is a text</Text>
                
                <TextInput
                    style={{
                        padding:10,
                        margin:10,
                        borderWidth:1
                    }}
                    placeholder='Enter text'
                    underlineColorAndroid='transparent'
                ></TextInput>
                <Image 
                    source={require('../p1.jpg')}
                    style={{width:screenWidth, height:screenWidth*1600/2400}}
                ></Image>
                <Image 
                    source={require('../p1.jpg')}
                    style={{width:screenWidth, height:screenWidth*1600/2400}}
                ></Image>
                <Image 
                    source={require('../p1.jpg')}
                    style={{width:screenWidth, height:screenWidth*1600/2400}}
                ></Image>
            </ScrollView>
        );
    }
}