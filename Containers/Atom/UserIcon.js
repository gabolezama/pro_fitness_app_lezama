import React, { useEffect, useState } from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

export default function UserIcon({navigation}) {
    
    const [lastScreen, setLastScreen] = useState('')

    let selected = useSelector((state) =>state.screens),
        isValid = selected !== undefined && Object.keys(selected).length > 0 ,
        found = isValid && Object.keys(selected).find((key)=> selected[key] === true)

    const handleMenuState = () =>{
        navigation.navigate('UserMenu') 
    }

    return (
    <View style={{marginRight: 20, flexDirection: 'row'}}>
        <FontAwesome style={{marginHorizontal: 10}} name="camera-retro" size={30} color="black" onPress={()=> navigation.navigate('Camera') }/>
        <Entypo style={{marginHorizontal: 10}} name="user" size={32} color="black" onPress={()=> handleMenuState()}/>
    </View>
  )
}