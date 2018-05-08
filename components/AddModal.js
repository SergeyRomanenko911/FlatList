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
  Alert,
  Platform,
  TouchableHighlight
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import FlatListData from '../data/FlatList';


var screen = Dimensions.get('window');

export default class AddModal extends Component{
  constructor(props){
    super(props);

  }
  showModal=()=>{
    this.refs.myModal.open();
  }
  render(){
    return(
      <Modal
        ref={"myModal"}
        style={{
        justifyContent:'center',
        borderRadius: Platform.OS === 'ios' ? 30 : 0,
        shadowRadius: 10,
        width: screen.width - 80,
        height:280
      }}
      position='center'
      backdrop={true}
      onClosed={()=>{
        alert('modal closed');
      }}

      >
        <Text>New information</Text>
      </Modal>
    );
  }
}

