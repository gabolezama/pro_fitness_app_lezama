import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { UserFormStyles } from './UserForm.syles';
import RadioForm from 'react-native-simple-radio-button';

const ItemForm = ({ orientation, label, handleInput, clear, setClear, onPressRadio }) => {
  const [simpleSelection, setSimpleSelection] = useState(false)

  const radioGender = [
    {label: 'Masculino', value: 'masculino' },
    {label: 'Femenino', value: 'femenino' },
    {label: 'No Específico', value: 'indefinido' }
  ];
  const radioTraining = [
    {label: 'Bajo', value: 'bajo' },
    {label: 'Medio', value: 'medio' },
    {label: 'Alto', value: 'alto' }
  ];

  useEffect(()=>{
    setSimpleSelection(label === 'Género' || label === 'Training Level')
    return ()=> setClear(false)
  },[clear])
  
  return (
    <>
      { !simpleSelection?
          <View style={orientation ? UserFormStyles.wrapper : UserFormStyles.wrapHorizontal}>
            <Text style={UserFormStyles.text}>Introduzca su {label}: </Text>
              <TextInput
                value={clear ? '' : null}
                onChangeText={(text)=> handleInput(label, text)}
                keyboardType={`${label === 'Edad' || label === 'Telefono'? 'numeric': label === 'Email'? 'email-address' : 'default'}`} 
                style={UserFormStyles.textIn} />
          </View>:
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
  );
};

export default ItemForm;
