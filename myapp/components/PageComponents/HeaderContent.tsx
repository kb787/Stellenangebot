import {View,StyleSheet,SafeAreaView,Text,useColorScheme } from "react-native";

const HeaderContent = () => {
    return (
           <SafeAreaView>
                 <View>
                      <Text style = {styles.container}>
                             <Text style = {styles.navbarItems}>
                                 Home 
                             </Text>
                             <Text style = {styles.navbarItems}>
                                 About   
                             </Text>
                             <Text style = {styles.navbarItems}>
                                 Explore Products   
                             </Text> 
                      </Text> 
                 </View>
           </SafeAreaView>   
    )
}

let styles = StyleSheet.create(
    {
        container : {
             backgroundColor:'black' ,
             color:'yellow' ,
             fontFamily:'Verdana' ,
            
        } ,
        navbarItems : {
             display:'flex' ,
             gap:10,
             justifyContent:'center'
        }
    }
)

export default HeaderContent ;