import {Text,View,SafeAreaView,StyleSheet,useColorScheme} from 'react-native' ;
import FlatCards from '../CardComponents/FlatCards';

const MainContent = () => {
      return (
           <SafeAreaView>
              <FlatCards/> 
           </SafeAreaView>
      )   
}

let styles = StyleSheet.create({
    mainContainer : {
        backgroundColor:'rgba(64,64,64,1)' ,
        color:'white' ,
    }
})

export default MainContent ;

