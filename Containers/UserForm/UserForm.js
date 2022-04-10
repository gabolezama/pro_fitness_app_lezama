import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import ItemForm from './ItemForm';
import { UserFormStyles } from './UserForm.syles';
import { TouchableButton } from '../Atom/TochableButton';
import { WriteUserInfo, registerUser } from '../Store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function UserForm(props) {

  const{
    route,
    orientation,
    navigation,
    font,
    setRegisterUser
  }= props;

  const [formData] = useState(['Nombre','Apellido','Edad','Telefono', 'Email','Contraseña'])
  const [inputFormValues, setInputFormValues] = useState({})
  const [clear, setClear] = useState(false)
  const checkRegister = useSelector( state=> state.httpStatus.authStatus )
  const dispatcher = useDispatch()

  useEffect(async()=>{
    console.log(inputFormValues);
  }, [inputFormValues, clear])
  
  useEffect(()=>{
    if(checkRegister){
      dispatcher( WriteUserInfo(inputFormValues) )
      setRegisterUser(false)
    }
  }, [checkRegister])

  const handleTextInput = (label, text) =>{
    if(text.trim() !== '')
      setInputFormValues({...inputFormValues, [label]: text})
    else
      delete inputFormValues[label]
  }

  const handleBtnAceptar = async () =>{
    if( Object.keys(inputFormValues).length === 6 && Object.values(inputFormValues).length === 6){

      dispatcher( registerUser(inputFormValues.Email, inputFormValues.Contraseña) )
    
    }else{
      alert('no has completado todos los campos del formulario')
    }
  }

  return (
    <View style={[UserFormStyles.container,{height:450}]}>
      <Text style={{...UserFormStyles.title, fontFamily: font}}>Formulario de Registro</Text>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          style={{ marginBottom: 20, width: '80%', padding: 5, backgroundColor: 'lightgrey', borderRadius: 20 }}
          data={formData}
          renderItem={({ item }) => <ItemForm orientation={orientation} setClear={(set) => setClear(set)}
                                    clear={clear} label={item} handleInput={(label, text) => handleTextInput(label, text)}
                                    onPressRadio={ (label, value)=> handlePressRadio(label, value)} userinfo={false}/>}
        />
      </View>
      <View style={UserFormStyles.buttonWrap}>
        <TouchableOpacity onPress={() => handleBtnAceptar()}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Registrar'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRegisterUser(false)}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Cancelar'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setClear(true)}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Limpiar'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
