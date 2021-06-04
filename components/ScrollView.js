import React , {Component} from 'react';
import {platform, ScrollView, SegmentedControlIOSBase, StyleSheet, Text,View}from 'react-native';
import Data from './Data';

export default class List extends Component{
    constructor(props){
        super(props);
        this.initData=Data;
        this.state={
            data:this.initData,
        }
    }
    render(){
        const items=this.state.data.map(item =>{
            return <View key={item.id} style={styles.item}>
                <View style={styles.marginLeft}>

                   
                  
                </View> 
                <Text style={styles.text}>{item.text} </Text>


            </View>
        })
        return (
            <View style={styles.contentContainer}>
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.headerText} >____                   SIGN DICTATIONARY                   _____</Text>
                    </View>  
                    <View>
                        {items}
                    </View>
                </ScrollView>
            </View>
        )
    }

    
}
const styles=StyleSheet.create({
    contentContainer:{
        backgroundColor:'white',
    },
    item:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'grey',
        alignItems:'center',
        
    },
    text:{
        marginVertical:30,
        fontSize:20,
        fontWeight:'bold',
        marginLeft:10,

    },
    marginLeft:{
        marginLeft:5,
    },
    menu:{
        width:20,
        height:2,
        backgroundColor:'#111',
        margin:2,
        borderRadius:3,

    },
})