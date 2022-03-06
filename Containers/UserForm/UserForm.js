import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import ItemForm from './ItemForm';
import { UserFormStyles } from './UserForm.syles';
import app from '../../database/FirebaseDB'
import { getFirestore, collection, getDocs, doc, setDoc,addDoc } from 'firebase/firestore/lite';
import { TouchableButton } from '../Atom/TochableButton';
import { ScreenSetter, ScreenResetter } from '../Store/actions/actions';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

export default function UserForm(props) {

  const{
    route,
    orientation,
    navigation,
    font
  }= props;

  const [formData, setFormData] = useState(['Nombre','Apellido','Edad','Telefono', 'Email'])
  const [inputFormValues, setInputFormValues] = useState({})
  const [clear, setClear] = useState(false)

  const db = getFirestore(app);
  
  const dispatcher = useDispatch();
  
  useEffect(async()=>{
      console.log(inputFormValues);
      dispatcher( ScreenSetter('USER_FORM') )
        
      return () => dispatcher( ScreenResetter('USER_FORM') )
  }, [inputFormValues, clear])
  

  const handleTextInput = (label, text) =>{
    if(text.trim() !== '')
      setInputFormValues({...inputFormValues, [label]: text})
    else
      delete inputFormValues[label]
  }

  const handleBtnAceptar = async () =>{
    if( Object.keys(inputFormValues).length === 5 && Object.values(inputFormValues).length === 5){

      try {
        inputFormValues ? await setDoc(doc(db, "Users", `${inputFormValues.Nombre}`), inputFormValues) : null;
        navigation.navigate('LevelContainer')
        alert('Todo ok')
        
      } catch (error) {
        console.log(error);
      }
    
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
          renderItem={({ item }) => <ItemForm orientation={orientation} setClear={(set) => setClear(set)} clear={clear} label={item} handleInput={(label, text) => handleTextInput(label, text)} />}
        />
      </View>
      <View style={UserFormStyles.buttonWrap}>
        <TouchableOpacity onPress={() => handleBtnAceptar()}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Aceptar'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LevelContainer')}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Jump'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setClear(true)}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Limpiar'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
