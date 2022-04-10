import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ContactInfo from '../../../ContactInfo.json'


  const Contacts = (props) => {
  
  const {Military_Training, Developer} = ContactInfo;

  return (
    <View style={ContactStyles.container}>
      <Text style={ContactStyles.title}>Información del Negocio:</Text>
      <Text style={ContactStyles.text}>Propietario: {Military_Training.Owner}</Text>
      <Text style={ContactStyles.text}>País: {Military_Training.Coutry}</Text>
      <Text style={ContactStyles.text}>Teléfono: {Military_Training["Businness Phone"]}</Text>

      <Text style={ContactStyles.title}>Información del desarrollador:</Text>
      <Text style={ContactStyles.text}>Propietario: {Developer.Name}</Text>
      <Text style={ContactStyles.text}>País: {Developer.Country}</Text>
      <Text style={ContactStyles.text}>País: {Developer.Address}</Text>
      <Text style={ContactStyles.text}>Teléfono: {Developer["Contact phone"]}</Text>
      <Text style={ContactStyles.text}>Esta app fué creada utilizando: {Developer.Resources}</Text>
    </View>
  )
}

const ContactStyles = StyleSheet.create({
  container:{
    padding: 20,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine:'underline'
  },
  text:{
    fontStyle:'italic',
    marginVertical:10,
    fontSize: 15
  }
});

export default Contacts