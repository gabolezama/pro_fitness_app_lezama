import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'

export default function UserInfo(props) {
  const{
    navigation,
    font
  } = props
  return (
    <View>
      <Text style={{fontFamily: font}}>UserInfo</Text>
    </View>
  )
}