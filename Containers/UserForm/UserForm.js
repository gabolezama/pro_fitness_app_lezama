import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import ItemForm from './ItemForm';
import { UserFormStyles } from './UserForm.syles';
import app from '../../database/FirebaseDB'
import { getFirestore, collection, getDocs, doc, setDoc,addDoc } from 'firebase/firestore/lite';
import { TouchableButton } from '../Atom/TochableButton';

export default function UserForm(props) {

  const{
    navigation,
    font
  }= props;

  const [formData, setFormData] = useState(['Nombre','Apellido','Edad','Telefono', 'Email'])
  const [inputFormValues, setInputFormValues] = useState({})
  const [readyForSend, setReadyForSend] = useState(false)
  const [clear, setClear] = useState(false)

  const db = getFirestore(app);
  
  useEffect(async()=>{
    try {
      readyForSend && inputFormValues && await setDoc(doc(db, "Users", `${inputFormValues.Nombre}`), inputFormValues);
      
    } catch (error) {
      console.log(error);
    }
  }, [readyForSend, clear])
  
  const handleTextInput = (label, text) =>{
    if(text.trim() !== '')
      setInputFormValues({...inputFormValues, [label]: text})
    else
      delete inputFormValues[label]
  }

  const handleBtnAceptar = async () =>{
    if( Object.keys(inputFormValues).length === 5 && Object.values(inputFormValues).length === 5){
      
      setReadyForSend(true)
      alert('Todo ok')
      navigation.navigate('Training Level')
    }else{
      alert('no has completado todos los campos del formulario')
    }
  }

  return (
    <View style={UserFormStyles.container}>
      <Text style={{...UserFormStyles.title, fontFamily: font}}>Formulario de Registro</Text>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          style={{ marginBottom: 20, width: '80%', padding: 5, backgroundColor: 'lightgrey', borderRadius: 20 }}
          data={formData}
          renderItem={({ item }) => <ItemForm setClear={(set) => setClear(set)} clear={clear} label={item} handleInput={(label, text) => handleTextInput(label, text)} />}
        />
      </View>
      <View style={UserFormStyles.buttonWrap}>
        <TouchableOpacity onPress={() => handleBtnAceptar()}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Aceptar'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setClear(true)}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Limpiar'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
