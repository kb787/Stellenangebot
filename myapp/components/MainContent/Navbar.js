import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity } from 'react-native'
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' 
// import {faBell,faMessage,faSuitcase,faUser} from '@fortawesome/free-solid-svg-icons'
import React from 'react' ;

const Navbar = () => {
   return (
       <SafeAreaView>
           <View style = {styles.mainContainerNavbar}>
                <View style = {styles.mainSubContainer}>
                    <Text style = {styles.navbarTitle}>
                       Stellenangebot
                    </Text>
                    <TextInput 
                       placeholder="Enter your role"
                       style = {styles.navbarInputForms}
                    /> 
                    <TextInput
                       placeholder="Enter your preferred location"
                       style = {styles.navbarInputForms}
                    />
                  {/*  
                    <FontAwesomeIcon icon = {faMessage} />
                    <FontAwesomeIcon icon = {faBell} />
                    <FontAwesomeIcon icon = {faSuitcase} />
                    <FontAwesomeIcon icon = {faUser} />
                  */}  
                </View>
           </View>
       </SafeAreaView>

   )
}

export default Navbar ;

const styles = StyleSheet.create(
   {
       mainContainerNavbar : {
           display:'flex' ,
           backgroundColor:'black' ,
           color:'yellow', 
           height:40
       } ,
       mainSubContainer:{
          flex:1 ,
          display:'flex' ,
          flexDirection:'row' ,
          justifyContent:'space-between',
          alignContent:'flex-start'
          } ,
       navbarTitle : {
          fontSize:10 ,
          color:'yellow',
          paddingTop:9 
         } ,
       navbarInputForms : {
          color:'yellow',
          width:'22%',
          height:10,
          borderWidth:1 ,
          borderColor:'white',
          marginTop:5,
          alignItems:'flex-start'
       },
   }
)