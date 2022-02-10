import { StyleSheet } from 'react-native';
import { View } from 'react-native-web';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
export const AppStyles = StyleSheet.create({
    container: {
      top: 40,
      width: '100%',
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
    textIn:{
      fontSize: 16,
      backgroundColor:'pink', 
      borderBottomColor: 'black',
      marginBottom: 10,
    },
    button:{
      marginBottom: 10
    },
    splashContainer:{
      backgroundColor: 'red',
      width: '100%',
      height: '100%'
    },
    splash:{
      position: 'absolute',
      top: '30%',
      left: '20%',
      shadowColor: 'black',
      borderColor: 'black'
    }
  });