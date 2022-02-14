import { StyleSheet } from 'react-native';
export const UserFormStyles = StyleSheet.create({
    title:{
      fontSize: 20,
      marginBottom: 10,
      marginLeft: '12%'
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
      backgroundColor: 'lightgrey',
      marginLeft: '1%',
      padding: 10,
      width: '100%', 
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