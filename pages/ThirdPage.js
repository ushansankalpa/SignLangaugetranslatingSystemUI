import React, { Component } from 'react';
import {View, Text,platform, StyleSheet} from 'react-native';

//tharindu


export default class ThirdPage extends Component {
  static navigationOptions = {
    title: 'Help',
    //Sets Header text of Status Bar
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={styles.textPara01}>Sign Master is a American Sign Language translator app for android users who's in need of understanding American Sign Language. Sign Master provides following features to it's users.</Text>
        
        
            <Text style={styles.textedit}> 1) Live Video</Text><Text style={styles.text02}>User can choose this option to translate a live video from the camera feed</Text>

            <Text style={styles.textedit}> 2) Sign Dictionary</Text>

            <Text style={styles.text02}>Users who's in need to learn American Sign Language can choose this option to learn basic alphabetical signs</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textedit: {
    color:'blue',
    fontSize: 22,
    paddingTop:20,
    paddingLeft:35,
    fontWeight:"bold",
  },
  textPara01: {
    paddingTop:20, 
    paddingLeft: 20,
    fontSize: 20,
  },
  text02: {
    paddingTop:10,
    paddingLeft: 20,
    fontSize: 20,
  },
});