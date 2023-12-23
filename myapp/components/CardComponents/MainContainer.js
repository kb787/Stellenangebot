import Navbar from "../MainContent/Navbar";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardContainerGeneral from "./CardContainerGeneral";

const MainContainer = () => {
  return (
   <SafeAreaView> 
    <View>
    <Navbar/>
    <CardContainerGeneral/>     
    </View>
    </SafeAreaView> 
  )
}

export default MainContainer ;

const styles = StyleSheet.create({})