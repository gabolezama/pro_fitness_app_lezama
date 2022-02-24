import { useState } from 'react';
import { StyleSheet} from 'react-native';


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
      backgroundColor: 'lightblue',
      width: '100%',
      height: '100%'
    },
    splashTitle:{
      zIndex:10,
      fontSize: 20,
      position: 'absolute',
      top: '20%',
      left: '28%'
    },
    splashTitleH:{
      zIndex:10,
      fontSize: 20,
      position: 'absolute',
      top: '50%',
      left: '40%'
    },
    splash:{
      position: 'absolute',
      top:  '30%',
      left: '10%',
      width: '80%',
      height: '50%'
    },
    splashH:{
      position: 'absolute',
      top: '20%',
      left: '15%',
      width: '70%',
      height: '65%'
    }
  });