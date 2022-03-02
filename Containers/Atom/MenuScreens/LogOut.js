import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'

export default function LogOut({navigation}) {
  const isFocused = useIsFocused()
  
  useEffect(()=>{
    return ()=> isFocused ? null : navigation.pop('ShowRutine')
  },[])
  return (
    <View>
      <Text>LogOut</Text>
    </View>
  )
}