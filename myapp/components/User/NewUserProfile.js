import { StyleSheet, Text, View,TextInput,TouchableOpacity,SafeAreaView,ScrollView, Platform, Image } from 'react-native'
import React,{useState} from 'react' 
import { useNavigation } from '@react-navigation/native'
import axios from 'axios' 
import Toast from 'react-native-toast-message'
import Navbar from '../MainContent/Navbar'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' 
import {faUser} from '@fortawesome/free-solid-svg-icons'
import ImagePicker from 'react-native-image-picker'

const NewUserProfile = () => {
  const navigator = useNavigation()
  const [userImage,setUserImage] = useState([]) ;
  const [userFullName,setUserFullName] = useState('') ;
  const [userJobTitle,setUserJobTitle] = useState('') ;
  const [userProfileDescription,setUserProfileDescription] = useState('') ;
  const [userSkills,setUserSkills] = useState('') ;
  const [userPreferredLocation,setUserPreferredLocation] = useState('') ;
  const [userPreferredLocationType,setUserPreferredLocationType] = useState('') ;
  const [userUniversityName,setUserUniversityName] = useState('') ;
  const [userDegreeName,setUserDegreeName] = useState('') ;
  const [userDegreeTime,setUserDegreeTime] = useState('') ;
  const [userDegreeGPA,setUserDegreeGPA] = useState('') ;
  const [userCompanyName,setUserCompanyName] = useState('') ;
  const [userWorkDescription,setUserWorkDescription] = useState('') ;
  const [userWorkTenure,setUserWorkTenure] = useState('') ;
  const [projectName,setProjectName] = useState('') ;
  const [projectDescription,setProjectDescription] = useState('') ;
  const [projectLink,setProjectLink] = useState('') ;
  const [showInputForms1 , setShowInputForms1] = useState(false) ;
  const [showInputForms2 , setShowInputForms2] = useState(false) ;
  const [showInputForms3 , setShowInputForms3] = useState(false) ;
   
  const handleUploadPhoto = () => {
     const options = {
          noData:true ,
     }
  
  ImagePicker.launchImageLibrary(options,(response) => {
      if(response.uri){
          setUserImage(response)
      }
  })
  const data = new FormData()
  data.append('photo',{
     name:userImage.fileName,
     type:userImage.type,
     uri:Platform.OS === 'android' ? photo.uri : photo.replace('file://','') ,
  })
} 
 const handleUserClickInput1 = () => {
      setShowInputForms1(!showInputForms1)
 }

 const handleUserClickInput2 = () => {
      setShowInputForms2(!showInputForms2)
 }

 const handleUserClickInput3 = () => {
      setShowInputForms3(!showInputForms3)
 }

  const handleNewUserProfile = async() => {
        try {
             const postResponse = await axios.post("http://192.168.43.148:3500/v8/api/postUserProfile",{
                    userImage:userImage,
                    userFullName:userFullName,
                    userJobTitle:userJobTitle,
                    userProfileDescription:userProfileDescription,
                    userSkills:userSkills,
                    userPreferredLocation:userPreferredLocation,
                    userPreferredLocationType:userPreferredLocationType,
                    userUniversityName:userUniversityName,
                    userDegreeName:userDegreeName,
                    userDegreeTime:userDegreeTime,
                    userDegreeGPA:userDegreeGPA,
                    userCompanyName:userCompanyName,
                    userWorkDescription:userWorkDescription,
                    userWorkTenure:userWorkTenure,
                    projectName:projectName,
                    projectDescription:projectDescription,
                    projectLink:projectLink
                }
             )
             console.log(postResponse) ;
             if(postResponse.data && postResponse.data.success){
                  
                  navigator.navigate("Login")
                  Toast.show('Registration successfull')     
             }
             else {
                  Toast.show('Invalid credentials')
             }
        }
        catch(error){
             console.log(error) 
             Toast.show('Server side error occured') 
        } 
  }   
  return ( 
     <ScrollView>
     <Navbar/>     
    <View style = {styles.mainContainerRegister}>
         <View style = {styles.registerContainer}>
         <View>
            <Text style={styles.registrationHeading}>Complete your profile details</Text> 
          </View> 
              <Image 
                source = {{uri:userImage.uri}}
                style = {styles.imageStyling}
               />
               <View>
             {/*  <TouchableOpacity style = {styles.registerButton}>
                    <Text style = {styles.registerButtonText}>Select</Text>
  </TouchableOpacity>*/}
               <TouchableOpacity style = {styles.registerButton} onPress={handleUploadPhoto} >
                    <Text style = {styles.registerButtonText}>Upload</Text>     
               </TouchableOpacity> 
               </View>
              <TextInput type='text' placeholder="Enter your username" style = {styles.registerTextInput} placeholderTextColor='yellow' value = {userFullName} onChangeText = {(text) => setUserFullName(text)}   />
              <TextInput type='text' placeholder="Enter job role" style = {styles.registerTextInput2} placeholderTextColor='yellow' value = {userJobTitle} onChangeText = {(text) => setUserJobTitle(text) }  />
              <TextInput type='text' placeholder="Describe about yourself" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {userProfileDescription} onChangeText = {(text) => setUserProfileDescription(text)}   />
              <TextInput type='text' placeholder="Enter your skills" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {userSkills} onChangeText = {(text) => setUserSkills(text)}   />
              <TextInput type='text' placeholder="Enter your preferred location" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {userPreferredLocation} onChangeText = {(text) => setUserPreferredLocation(text)}   />
              <TextInput type='text' placeholder="Location Type - Remote/In-Office" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {userPreferredLocationType} onChangeText = {(text) => setUserPreferredLocationType(text)}/>
              <View>
                    <TouchableOpacity onPress={handleUserClickInput1}>
                    <Text style = {styles.formText}>     
                    Add educational details
                    </Text>
                    </TouchableOpacity> 
                    { showInputForms1 && (
                    <View>
                       <TextInput type='text' placeholder="Enter university name" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {userUniversityName} onChangeText = {(text) => setUserUniversityName(text)}   />
                       <TextInput type='text' placeholder="Enter degree name" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {userDegreeName} onChangeText = {(text) => setUserDegreeName(text)}   />
                       <TextInput type='text' placeholder="Enter graduation completion year Ex .2021" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {userDegreeTime} onChangeText = {(text) => setUserDegreeTime(text)}   />
                    </View>
                     )}
              </View>
              <View>
                  <TouchableOpacity onPress={handleUserClickInput2}>
                  <Text style = {styles.formText}>     
                    Add Work Experience
                    </Text>
                  </TouchableOpacity> 
                   { showInputForms2 && (
                   <View>
                   <TextInput type='text' placeholder="Enter user company name" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {userCompanyName} onChangeText = {(text) => setUserCompanyName(text)}   />
                   <TextInput type='text' placeholder="Enter your work description " style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {userWorkDescription} onChangeText = {(text) => setUserWorkDescription(text)}   />
                   <TextInput type='number' placeholder="Enter your work tenure" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {userWorkTenure} onChangeText = {(text) => setUserWorkTenure(text)}   />
                   </View>
                    )}  
              </View>
              <View>
                 <TouchableOpacity onPress = {handleUserClickInput3}>
                    <Text style = {styles.formText}>
                    Add project details     
                    </Text>
                 </TouchableOpacity>
                  { showInputForms3 && ( 
                  <View>  
                  <TextInput type='text' placeholder="Enter your project name"  style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {projectName} onChangeText = {(text) => setProjectName(text)} />
                  <TextInput type='text' placeholder="Descibe about the project" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {projectDescription} onChangeText = {(text) => setProjectDescription(text)}   />
                  <TextInput type='text' placeholder="Enter project link" style = {styles.registerTextInput3} placeholderTextColor='yellow' value = {projectLink} onChangeText = {(text) => setProjectLink(text)}   />
                   </View>
              )} 
              </View>
              <TouchableOpacity style={styles.registerButton} onPress={handleNewUserProfile}>
                   <Text style = {styles.registerButtonText}>Save</Text>
              </TouchableOpacity>
         </View>
    </View>
    </ScrollView>

  )
}

export default NewUserProfile ;

const styles = StyleSheet.create({
     mainContainerRegister : {
          backgroundColor:'rgba(64,64,64,1)' ,
          height:'100%' ,
          width:'100%',
          paddingBottom : 200, 
     },
     registerContainer : {
          backgroundColor:'black' ,
          marginLeft:15,
          marginRight:15,
          color:'yellow' ,
          marginTop:40,
          height:'cover',
          borderRadius:15          
     },
     registerTextInput : {
          width:45 ,
          height:40 , 
          width:'80%',
          borderWidth:1,
          borderColor:'white',
          marginTop:8,
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
          width:110,
          backgroundColor:'blue',
          marginLeft:100,
          marginRight:100,
          borderRadius:5,
          justifyContent:'center',
          alignItems:'center',
          marginTop:20,
          fontSize:35,
          color:'white',
          height:35,
          marginBottom:15

     } ,

     registerButtonText:{
          color:'white',
     } ,
 
     registrationHeading:{
          color:'yellow',
          fontSize:18,
          paddingTop:20,
          paddingLeft:30
     },
     loginHeading:{
          color:'yellow',
          fontSize:15,
          paddingTop:20,
          paddingLeft:16
     },
     formText : {
          fontSize:15,
          color:'yellow',
          marginTop:12,
          marginLeft:30,
     },
     imageStyling : {
          borderColor:'yellow',
          width:150,
          height:150,
          borderWidth:2 ,
          marginTop:20,
          marginLeft:75,
          marginRight:60,
          borderRadius:75
     } ,
     buttonCollection:{
          display:'flex' ,
          flexDirection:'row' ,
     }
     



})
