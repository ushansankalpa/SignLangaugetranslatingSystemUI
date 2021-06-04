import React, {Component} from 'react'
import {StyleSheet,Text,View,TouchableOpacity,Image, ScrollView} from 'react-native'



export default class SecondPage extends Component{

  static navigationOptions = {
    title: 'Sign Dictionary',
    //Sets Header text of Status Bar
  };

  render(){
    let {container,cardText,card,cardImage,imageFixSize}=styles

    
    return (
      <ScrollView> 
        
      <Text h1 style={{fontSize:40,alignItems:'center',alignSelf: 'center',color:'#00bfff'}}> Sign Dictionary</Text>
      

      <View style={container}>

        <Image style={imageFixSize}  source={require('../SignImages/a.png')}/>
        <Text style={cardText} >A </Text>
        
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />
                               

        <Image style={imageFixSize}  source={require('../SignImages/b.png')}/>
        <Text style={cardText} >B </Text>

        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize}  source={require('../SignImages/c.jpg')}/>
        <Text style={cardText} >C </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/d.png')}/>
        <Text style={cardText} >D </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image  style={imageFixSize} source={require('../SignImages/e.png')}/>
        <Text style={cardText} >E </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image  style={imageFixSize} source={require('../SignImages/f.jpg')}/>
        <Text style={cardText} >F </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image  style={imageFixSize} source={require('../SignImages/g.png')}/>
        <Text style={cardText} >G </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/h.png')}/>
        <Text style={cardText} >H </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image  style={imageFixSize} source={require('../SignImages/i.png')}/>
        <Text style={cardText} >I </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/j.png')}/>
        <Text style={cardText} >J </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/k.jpg')}/>
        <Text style={cardText} >K </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/l.png')}/>
        <Text style={cardText} >L </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/m.png')}/>
        <Text style={cardText} >M </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/n.png')}/>
        <Text style={cardText} >N </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/o.png')}/>
        <Text style={cardText} >O </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/p.png')}/>
        <Text style={cardText} >P </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/q.jpg')}/>
        <Text style={cardText} >Q </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/r.png')}/>
        <Text style={cardText} >R </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/s.png')}/>
        <Text style={cardText} >S </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/t.png')}/>
        <Text style={cardText} >T </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/u.png')}/>
        <Text style={cardText} >U </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/v.jpg')}/>
        <Text style={cardText} >V </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/w.png')}/>
        <Text style={cardText} >W </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/x.png')}/>
        <Text style={cardText} >X </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/y.png')}/>
        <Text style={cardText} >Y </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />

        <Image style={imageFixSize} source={require('../SignImages/z.png')}/>
        <Text style={cardText} >Z </Text>
        <View style={{
            borderBottomColor: '#00bfff',
            borderBottomWidth: 2,
        }}
        />
        

        


       

      </View>
      
      </ScrollView>
    )
    
         
    
  }
  
}

        
        


  
  
 

const styles = StyleSheet.create({
  container:{
    marginTop:40
    

},

imageFixSize:{
  width:180,
  height:200,
  alignSelf: 'center'

},
cardText:{
  fontSize:30,
  padding:10,
  alignSelf: 'center'
  
  
},

card:{
  backgroundColor:'red',
  marginBottom:10,
  marginLeft:'2%',
  width:'96%',
  shadowOpacity:1,
  shadowOffset:{
    width:3,
    height:4
  }
  
  

},
cardImage:{
  width:'100%',
  height:200,
  resizeMode:'cover',
  alignItems:'center'

  
},
loader:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
}



})