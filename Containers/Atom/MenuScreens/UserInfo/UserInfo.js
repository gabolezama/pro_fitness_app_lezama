import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { UserFormStyles } from '../../../UserForm/UserForm.syles'
import UserInfoItem from './UserInfoItem'
import { TouchableButton } from '../../TochableButton'

export default function UserInfo(props) {
  const{
    orientation,
    navigation,
    font
  } = props

  const [infoFields] = useState(['Peso','Género','Biceps','Hombros','Abdominales','Glúteos','Muslo','Pantorrilla','Altura','Training Level'])
  const [clear, setClear] = useState(false)

  const handlePressRadio = (label, value)=>{
    console.log(label,value);
  }

  const handleTextInput = (label, text) =>{
    console.log(label,text);
  }

  return (
    <View style={UserFormStyles.container}>
      <Text style={{...UserFormStyles.title, fontFamily: font}}>Información del Usuario</Text>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          style={{ marginBottom: 20, width: '80%', padding: 5, backgroundColor: 'lightgrey', borderRadius: 20 }}
          data={infoFields}
          renderItem={({ item }) => <UserInfoItem orientation={orientation} label={item} 
                                    clear={clear} setClear={(set)=> setClear(set)}
                                    onPressRadio={(label, value)=>handlePressRadio(label, value)} 
                                    handleInput={(label, text) => handleTextInput(label, text)}/>}
        />
      </View>
      <View style={UserFormStyles.buttonWrap}>
        <TouchableOpacity onPress={() => handleBtnAceptar()}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Guardar'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserMenu')}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Cancelar'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setClear(true)}>
          <TouchableButton style={{ paddingLeft: 30 }} font={font} textTitle={'Limpiar'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}