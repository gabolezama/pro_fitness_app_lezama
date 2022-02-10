import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import ItemForm from './ItemForm';
import { UserFormStyles } from './UserForm.syles';
import app from '../../database/FirebaseDB'
import { getFirestore, collection, getDocs, doc, setDoc,addDoc } from 'firebase/firestore/lite';

export default function UserForm() {

  const [formData, setFormData] = useState(['Nombre','Apellido','Edad','Telefono', 'Email'])
  const [inputFormValues, setInputFormValues] = useState({})
  const [readyForSend, setReadyForSend] = useState(false)

  const db = getFirestore(app);
  
  useEffect(async()=>{
    console.log(inputFormValues.Nombre);
    try {
      readyForSend && inputFormValues && await setDoc(doc(db, "Users", `${inputFormValues.Nombre}`), inputFormValues);
      
    } catch (error) {
      console.log(error);
    }
  }, [readyForSend])
  
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

    }else{
      alert('no has completado todos los campos del formulario')
    }
  }

  const handleBtnCancelar = () =>{

  }

  return (
    <View>
      <Text style={UserFormStyles.title}>Introduzca sus datos personales: </Text>
      <FlatList
        style={{marginLeft:30, marginBottom: 20, width: '100%'}}
        data={formData}
        renderItem={({item})=> <ItemForm label={item} handleInput={(label, text)=>handleTextInput(label, text)}/>}
      />
      <View style={UserFormStyles.buttonWrap}>     
        <Button style={UserFormStyles.button} onPress={()=> handleBtnAceptar()} title="Aceptar"/>
        <Button style={UserFormStyles.button} onPress={()=> handleBtnCancelar()} title="Cancelar"/>
      </View>
    </View>
  );
}
