import { StyleSheet, Text, View,TextInput,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View style = {styles.mainContainerRegister}>
         <View style = {styles.registerContainer}>
              <TextInput keyboardType='text' placeholder="Enter your username" style = {styles.registerTextInput} placeholderTextColor='yellow'   />
              <TextInput keyboardType='email-address' placeholder="Enter your email address" style = {styles.registerTextInput2} placeholderTextColor='yellow'  />
              <TextInput type='password' placeholder="Enter password" style = {styles.registerTextInput3} placeholderTextColor='yellow' secureTextEntry={true}  />
              <TouchableOpacity style={styles.registerButton}>
                   <Text style = {styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
         </View>
    </View>

  )
}

export default Register ;

const styles = StyleSheet.create({
     mainContainerRegister : {
          backgroundColor:'rgba(64,64,64,1)' ,
          height:'100%' ,
          width:'100%'
     },
     registerContainer : {
          backgroundColor:'black' ,
          marginLeft:65,
          marginRight:65,
          color:'yellow' ,
          marginTop:85,
          height:300,
          borderRadius:15          

     },
     registerTextInput : {
          width:45 ,
          height:40 , 
          width:'80%',
          borderWidth:1,
          borderColor:'white',
          marginTop:70,
          marginLeft:25,
          borderRadius:10,
          color:'yellow',
          fontSize:15,
     } ,

     registerTextInput2 : {
        width:45 ,
        height:10 , 
        width:'80%',
        height:40,
        borderWidth:1,
        borderColor:'white',
        marginTop:12,
        marginLeft:25,
        borderRadius:10,
        color:'yellow',
        fontSize:15,
   } ,
   registerTextInput3 : {
    width:45 ,
    height:10 , 
    width:'80%',
    height:40,
    borderWidth:1,
    borderColor:'white',
    marginTop:12,
    marginLeft:25,
    borderRadius:10,
    color:'yellow',
    fontSize:15,
} ,
     
     registerButton:{
          width:100,
          backgroundColor:'blue',
          marginLeft:70,
          marginRight:70,
          borderRadius:5,
          justifyContent:'center',
          alignItems:'center',
          marginTop:20,
          fontSize:25,
          color:'white',

     } ,

     registerButtonText:{
          color:'white',
          
     }

})