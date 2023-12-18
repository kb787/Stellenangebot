import {SafeAreaView, StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
   <SafeAreaView> 
    <View style = {styles.mainContainer} >
      <Text>This is our card List</Text>
    <ScrollView horizontal={true}>  
    <View style = {styles.container}>
      <View style={styles.subContainerOne}>
        <Text style = {styles.textStyle}>
           Red
        </Text>
       </View>  
      <View style = {styles.subContainerTwo}>     
        <Text style = {styles.textStyle}>
          Blue
        </Text>
      </View>          
      <View style = {styles.subContainerThree}>          
        <Text style = {styles.textStyle}>
          Green
        </Text>
      </View>  
      <View style = {styles.subContainerFour}>
        <Text style = {styles.textStyle}>
          Voilet
        </Text>   
      </View> 
      <View style = {styles.subContainerFive}>
        <Text style = {styles.textStyle}>
          Orange
        </Text>   
      </View> 
      <View style = {styles.subContainerSix}>
        <Text style = {styles.textStyle}>
          Black
        </Text>   
      </View>  
    </View> 
    </ScrollView>
    </View> 
    </SafeAreaView> 
  )
}

export default FlatCards ;

const styles = StyleSheet.create({
       mainHeading : {
           fontSize:30
       } ,
       container : {
          display:'flex' ,
          alignItems:'center',
          justifyContent:'center' ,
          color:'#FFFFFF' ,
          margin:8,
          borderRadius:10 ,
          paddingTop:15 ,
          flex:1 ,
          flexDirection:'row' ,
          marginLeft:5 ,
          marginRight:5
          
       } ,
       subContainerOne : {
          width:75 ,
          height:75 , 
          backgroundColor:'red' ,
          color:'#FFFFFF' ,
          flex:1 ,
          alignItems:'center' ,
          justifyContent:'center' ,
          marginBottom:20 ,
          marginLeft:5 ,
          marginRight:5 ,
         
       } ,
       subContainerTwo : {
          backgroundColor:'blue' ,
          color:'#FFFFFF',
          width:75,
          height:75 ,
          flex:1 ,
          alignItems:'center' ,
          justifyContent:'center' ,
          marginBottom:20,
          marginLeft:5 ,
          marginRight:5 
       } ,
       subContainerThree : {
          backgroundColor:'green' ,
          color:'#FFFFFF' ,
          width:75 ,
          height:75 ,
          flex:1 ,
          alignItems:'center' ,
          justifyContent:'center' ,
          marginBottom:20,
          marginLeft:5 ,
          marginRight:5
       } ,
       subContainerFour :{
          backgroundColor:'purple',
          color:'#FFFFFF' ,
          width:75 ,
          height:75 ,
          flex:1 ,
          alignItems:'center' ,
          justifyContent:'center' ,
          marginBottom:20,
          marginLeft:5 ,
          marginRight:5
       } ,

       subContainerFive : {
        width:75 ,
        height:75 , 
        backgroundColor:'orange' ,
        color:'#FFFFFF' ,
        flex:1 ,
        alignItems:'center' ,
        justifyContent:'center' ,
        marginBottom:20 ,
        marginLeft:5 ,
        marginRight:5 ,
       
     } ,
     subContainerSix : {
      width:75 ,
      height:75 , 
      backgroundColor:'black' ,
      color:'#FFFFFF' ,
      flex:1 ,
      alignItems:'center' ,
      justifyContent:'center' ,
      marginBottom:20 ,
      marginLeft:5 ,
      marginRight:5 ,
     
   } ,

       textStyle : {
          color:'white' ,
          fontSize:15
       }


})