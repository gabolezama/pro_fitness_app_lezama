import { StyleSheet, View, Text, FlatList } from 'react-native';

export const LvlStyles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      margin: 10,
      padding: 10,
      backgroundColor: '#fff',
      height: '90%'
    },
    text:{
      fontSize: 16,
      padding:20,
      backgroundColor:'lightblue',
      marginBottom: 10,
      borderRadius: 10,
      textAlign: 'center'
    },
    option:{
      flex: 1,
      padding: 20,
      fontSize: 16,
      color: 'white',
      backgroundColor:'grey',
      marginBottom: 10,
      borderRadius: 10,
      textAlign: 'center'
    },
    optionH:{
      fontSize: 16,
      color: 'white',
      backgroundColor:'grey',
      marginBottom: 10,
      borderRadius: 10,
      textAlign: 'center'
    },
    view:{
        padding: 50,
        paddingTop: 0,
        paddingBottom: 0,
    },
  });

  export const MultipleChoice = (props)=>{
      const{
        orientation,
        textTitle,
        displayArray,
        onAction,
      }= props;

      return(
        <View style={LvlStyles.view}>
          <Text style={LvlStyles.text}>{textTitle}</Text>
          <FlatList
            style={{ height: '35%' }}
            data={ displayArray }
            renderItem={({ item }) => {
              return <Text style={ orientation? LvlStyles.option : LvlStyles.optionH } onPress={() => onAction(item.name)}>{item.name}</Text>
            }}
          />
        </View>
      )
  }