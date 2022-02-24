import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { UserFormStyles } from './UserForm.syles';

const ItemForm = ({ orientation, label, handleInput, clear, setClear }) => {

  useEffect(()=>{
    return ()=> setClear(false)
  },[clear])
  
  return (
    <View style={orientation ? UserFormStyles.wrapper : UserFormStyles.wrapHorizontal}>
        <Text style={UserFormStyles.text}>Introduzca su {label}: </Text>
        <TextInput
          value={clear && ''}
          onChangeText={(text)=> handleInput(label, text)}
          keyboardType={`${label === 'Edad' || label === 'Telefono'? 'numeric': label === 'Email'? 'email-address' : 'default'}`} 
          style={UserFormStyles.textIn} />
    </View>
  );
};

export default ItemForm;
