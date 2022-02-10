import { StyleSheet } from 'react-native';
export const UserFormStyles = StyleSheet.create({
    title:{
      fontSize: 20,
      marginBottom: 10,
      marginLeft: 20
    },
    text:{

    },
    textIn:{
      fontSize: 10,
      backgroundColor:'white',
      marginBottom: 10,
      width:'40%',
      marginLeft: 5
    },
    wrapper:{
      justifyContent: 'space-between',
      backgroundColor: 'grey',
      padding: 10,
      width: '80%', 
      flexDirection:'row'
    },
    buttonWrap:{
      justifyContent: 'space-evenly',
      flexDirection:'row'
    },
    button:{
     tintColor: 'red'
    }
  });