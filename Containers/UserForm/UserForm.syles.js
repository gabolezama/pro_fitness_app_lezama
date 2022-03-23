import { StyleSheet } from 'react-native';
export const UserFormStyles = StyleSheet.create({
    container: {
      padding: 10,
      justifyContent: 'center'
    },
    title:{
      fontSize: 20,
      marginBottom: 10,
      marginLeft: '12%'
    },
    text:{

    },
    textIn:{
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
    wrapHorizontal:{
      justifyContent: 'space-between',
      backgroundColor: 'lightgrey',
      marginLeft: 30,
      width: '90%', 
      flexDirection:'row'
    },
    wrapSelection:{
      justifyContent: 'space-between',
      backgroundColor: 'lightgrey',
      marginLeft: '6%',
      marginVertical: 5,
      width: '80%'
    },
    buttonWrap:{
      justifyContent: 'space-evenly',
      flexDirection:'row'
    },
    button:{
     tintColor: 'red'
    }
  });