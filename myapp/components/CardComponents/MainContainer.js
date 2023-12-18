import Navbar from "../MainContent/Navbar";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MainContainer = () => {
  return (
   <SafeAreaView> 
    <View>
    <Navbar/>
      <View>  
      <Text>MainContainer</Text>
      </View>
    </View>
    </SafeAreaView> 
  )
}

export default MainContainer ;

const styles = StyleSheet.create({})