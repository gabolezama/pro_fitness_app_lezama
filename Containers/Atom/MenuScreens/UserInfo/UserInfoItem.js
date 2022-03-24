import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UserFormStyles } from '../../../UserForm/UserForm.syles';
import RadioForm from 'react-native-simple-radio-button';
import ItemForm from '../../../UserForm/ItemForm';

export default function UserInfoItem({orientation, label, onPressRadio, handleInput, clear, setClear}) {
    const [simpleSelection, setSimpleSelection] = useState(false)
    const radioGender = [
        {label: 'Masculino', value: 'masculino' },
        {label: 'Femenino', value: 'femenino' },
        {label: 'No Específico', value: 'indefinido' }
        ];
    const radioTraining = [
        {label: 'Nivel1', value: 'N1' },
        {label: 'Nivel2', value: 'N2' },
        {label: 'Nivel3', value: 'N3' },
        {label: 'Nivel4', value: 'N4' }
        ];

    useEffect(()=>{
        setSimpleSelection(label === 'Género' || label === 'Training Level')
    },[])

  return (
      <>
    { !simpleSelection?
        <ItemForm userInfo={true} orientation={orientation} label={label} handleInput={handleInput} clear={clear} setClear={setClear}/>
        :
        <View style={UserFormStyles.wrapSelection}>
            <Text style={UserFormStyles.text}>Introduzca su {label}: </Text>
            <RadioForm  style={{justifyContent: 'space-between', marginVertical: 5}}
                radio_props={label === 'Género'? radioGender: radioTraining}
                initial={0}
                formHorizontal={true}
                labelHorizontal={false}
                buttonColor={'#000'}
                buttonSize={10}
                onPress={(value) => onPressRadio(label, value)}
            />
        </View>
    }
    </>
  )
}