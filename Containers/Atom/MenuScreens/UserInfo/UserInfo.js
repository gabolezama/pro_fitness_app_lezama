import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { UserFormStyles } from '../../../UserForm/UserForm.syles'
import UserInfoItem from './UserInfoItem'
import { TouchableButton } from '../../TochableButton'
import { useDispatch } from 'react-redux'
import { insertToBD, releaseData } from '../../../Store/actions/actions'

export default function UserInfo(props) {
  const{
    orientation,
    navigation,
    font
  } = props

  const dispatcher = useDispatch()

  const [infoFields] = useState(['Peso','Altura','Biceps','Hombros','Abdominales','Gluteos','Muslo','Pantorrilla','Genero','Training Level'])
  const [clear, setClear] = useState(false)
  const [inputUserInfo, setInputUserInfo] = useState({
    "Genero": 'indefinido',
    "Training Level": 'N1',
    "Biceps": '0',
    "Hombros": '0',
    "Abdominales": '0',
    "Gluteos": '0',
    "Muslo": '0',
    "Pantorrilla": '0'
    })

  useEffect(async()=>{
    console.log(inputUserInfo);
  }, [inputUserInfo, clear])

  const handlePressRadio = (label, value)=>{
    setInputUserInfo({...inputUserInfo, [label]: value})
  }

  const handleTextInput = (label, text) =>{
    if(text.trim() !== '')
    setInputUserInfo({...inputUserInfo, [label]: text})
    else
      delete inputUserInfo[label]
  }

  const handleBtnAceptar = () =>{
    if(inputUserInfo.hasOwnProperty("Peso") && inputUserInfo.hasOwnProperty("Altura")){
      if( parseInt(inputUserInfo.Peso) > 40 && inputUserInfo.Altura.length > 2){

        dispatcher(insertToBD(inputUserInfo))
        dispatcher( releaseData(true) )
      }else{

        alert('Los valores de Peso y/o Altura no están correctos')
      }
    }else{

      alert('Peso y Altura, son datos obligatorios')
    }
  }

  return (
    <View style={[UserFormStyles.container,{height:'90%'}]}>
      <Text style={{...UserFormStyles.title, fontFamily: font}}>Información del Usuario</Text>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          style={{ marginVertical: 20, width: '70%', height: '70%', padding: 5, backgroundColor: 'lightgrey', borderRadius: 20 }}
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