import React, { useEffect } from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { View, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { souvenirsFromBd } from '../Store/actions/actions'


export default function UserIcon({navigation}) {
    const dispatcher = useDispatch()
    
    const seeSouvenir = useSelector( state => state.dbState.souvenirFromBd)
    // console.log('Icon-->', seeSouvenir);

    useEffect(()=>{
        dispatcher( souvenirsFromBd() )
    },[])

    let selected = useSelector((state) =>state.screens),
        isValid = selected !== undefined && Object.keys(selected).length > 0 ,
        found = isValid && Object.keys(selected).find((key)=> selected[key] === true)

    const handleMenuState = () =>{
        navigation.navigate('UserMenu') 
    }

    return (
    <View style={{marginRight: 20, flexDirection: 'row'}}>
        { seeSouvenir?.picture? 
        <Image style={{height: 40, width: 40, marginHorizontal: 40, borderRadius: 30}} source={{ uri: seeSouvenir.picture}}/>: null }
        <FontAwesome style={{marginHorizontal: 10}} name="camera-retro" size={30} color="black" onPress={()=> navigation.navigate('Camera') }/>
        <Entypo style={{marginHorizontal: 10}} name="user" size={32} color="black" onPress={()=> handleMenuState()}/>
    </View>
  )
}