import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'

export default function UserInfo({navigation}) {
  const isFocused = useIsFocused()
  
  useEffect(()=>{
    return ()=> isFocused ? null : navigation.pop('UserInfo')
  },[])
  return (
    <View>
      <Text>UserInfo</Text>
    </View>
  )
}