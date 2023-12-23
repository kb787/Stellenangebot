import React from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import {View,Text} from 'react-native' 
import CardFetching from "./CardFetching";

const CardContainerGeneral = () => {
     return (
           <View>
               <CardFetching/>
           </View>
     )
}

export default CardContainerGeneral ;