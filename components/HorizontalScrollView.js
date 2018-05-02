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

export default class HorizontalScrollView extends Component{
    render(){
        let screenWidth= Dimensions.get('window').width;
        let screenHeight= Dimensions.get('window').height;
        
        
        return(
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
            >
                <View
                    style={{
                        backgroundColor:'#5f9ea0',
                        flex:1,
                        marginTop:20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:screenWidth

                    }}
                >
                    <Text
                        style={{
                            color:'white',
                            fontSize:24,
                            padding:15,
                            textAlign:'center'
                        }}
                    >
                        Screen 1
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor:'tomato',
                        flex:1,
                        marginTop:20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:screenWidth

                    }}
                >
                    <Text
                        style={{
                            color:'white',
                            fontSize:24,
                            padding:15,
                            textAlign:'center'
                        }}
                    >
                        Screen 2
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor:'#668800',
                        flex:1,
                        marginTop:20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:screenWidth

                    }}
                >
                    <Text
                        style={{
                            color:'white',
                            fontSize:24,
                            padding:15,
                            textAlign:'center'
                        }}
                    >
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        );
    }
}