import React from "react"
import {useState,useEffect} from'react' 
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import {View,Text} from 'react-native'


const CardFetching = () => {
     const [data,setData] = useState([]) ;
     useEffect(() => {
          const handleFetchGeneralJobsData = async() => {
                try {
                    let fetchResponse = await fetch("http://192.168.43.148:3500/v7/api/getDataCategory5") ;
                    if(!fetchResponse){
                         Toast.message('Unable to get data')
                    }
                    else {
                        jsonData = fetchResponse.json() ;
                        setData(jsonData)
                    }
                 }
                catch(error) {
                    Toast.message('Server side error occured')  
                }
          }
          handleFetchGeneralJobsData()},[])

          return  ( 
            (data?.map((item) =>  
                <View>
                <View key = {item._id}>
                    <View>
                         <View>{item.jobTitle}</View>
                         <View>{item.jobCompany}</View>
                         <View>{item.jobLocation}</View>
                         <View>{item.jobSkills}</View>
                         <View>{item.jobLocationType}</View>         
                    </View>
                </View>
            </View>
                
                )

            )      
          )
}

export default CardFetching;