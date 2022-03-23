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
    textH:{
      fontSize: 16,
      padding:20,
      backgroundColor:'lightblue',
      marginBottom: 10,
      borderRadius: 10,
      textAlign: 'center',
      width: '60%'
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
      width: '100%',
      marginBottom: 10,
      borderRadius: 5,
      textAlign: 'center'
    },
    view:{
        padding: 50,
        paddingTop: 0,
        paddingBottom: 0,
    },
    viewH:{
        alignItems:'center',
        width: '100%',
        paddingTop: 0,
        paddingBottom: 0,
    },
  });

  export const MultipleChoice = (props)=>{
      const{
        font,
        orientation,
        textTitle,
        displayArray,
        onAction,
      }= props;

      return(
        <View style={orientation? LvlStyles.view: LvlStyles.viewH}>
          <Text style={orientation? [LvlStyles.text, {fontFamily: font}] : [LvlStyles.textH, {fontFamily: font}] }>{textTitle}</Text>
          <FlatList
            style={orientation? { height: '50%' }: {width: '60%'}}
            data={ displayArray }
            renderItem={({ item }) => {
              return <Text style={ orientation? LvlStyles.option : LvlStyles.optionH } onPress={() => onAction(item)}>{item}</Text>
            }}
          />
        </View>
      )
  }