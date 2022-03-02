import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'

export default function Contacts({navigation}) {
  const isFocused = useIsFocused()
  
  useEffect(()=>{
    return ()=> isFocused ? null : navigation.pop('Contacts')
  },[])
  return (
    <View>
      <Text>Contacts</Text>
    </View>
  )
}