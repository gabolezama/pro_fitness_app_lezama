import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { UserFormStyles } from './UserForm.syles';

const ItemForm = ({ userInfo, orientation, label, handleInput, clear, setClear }) => {
  
  useEffect(()=>{
    
    return ()=> setClear(false)
  },[clear])
  
  return (
    <View style={orientation ? UserFormStyles.wrapper : UserFormStyles.wrapHorizontal}>
      <Text style={UserFormStyles.text}>Introduzca {label}: </Text>
        <TextInput
          value={clear ? '' : null}
          onChangeText={(text)=> handleInput(label, text)}
          keyboardType={ `${label === 'Edad' || label === 'Telefono' || userInfo? 'numeric': label === 'Email'? 'email-address' : label === 'Contraseña'? 'visible-password' : 'default'}`} 
          style={UserFormStyles.textIn} />
    </View>
  );
};

export default ItemForm;
