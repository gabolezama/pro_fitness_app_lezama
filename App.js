import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:'90%', backgroundColor:'white'}}>
        <TextInput style={{...StyleSheet.textIn, bordeBottomColor:'black'}}/>
        <Button onPress={()=>{ alert('Epale!!')}} title="Add"/>
      </View>
      <Text>Hola, Coder!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textIn:{
     
  },
  myButton:{
    marginTop:'10px'
  }
});