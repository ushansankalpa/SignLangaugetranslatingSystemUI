//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button,TouchableOpacity,Text,Image} from 'react-native';
//import all the components we are going to use.



export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'Sign Master',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#4e2ab8',
      
      
    },
    headerTintColor: '#fff',
   
    headerTitleStyle: {
      fontWeight: 'bold',
      
      
    },

    alignItems:'center',



    

    
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{backgroundColor:'#C0C0C0'}}>
        
        <View style={styles.buttonContainer}>  
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>navigate('FourthPage')}>
              <Text style={styles.textStyle}>
                Live Video
              </Text>
            </TouchableOpacity>
        </View>

        

        {/* <View style={styles.buttonContainer}>  
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>navigate('SecondPage')}>
              <Text style={styles.textStyle}>
                Upload Video
              </Text>
            </TouchableOpacity>
        </View> */}

        <View style={styles.buttonContainer}>  
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>navigate('SecondPage')}>
              <Text style={styles.textStyle}>
                Sign Dictionary
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>navigate('ThirdPage')}>
              <Text style={styles.textStyle}>
                Help
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttomImage}>  
        <Image source = {require('../images/bottom.png')} />
        </View>


      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop:60,
    margin:0,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16
    
  },
  buttonStyle:{
    alignItems: 'center',
    backgroundColor: "#5e34f7",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight:50,
    marginLeft:50
  },
  textStyle:{
    color:'white',
    fontSize:18,
    display:'flex',
    alignItems:'flex-end',
    
  }
});