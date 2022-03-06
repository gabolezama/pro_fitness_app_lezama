import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { View, Text, FlatList } from 'react-native'
import IconMenuItem from './IconMenuItem'
import { useSelector } from 'react-redux'

export default function UserIcon({navigation}) {
    
    const [showMenu, setShowMenu] = useState(false)
    const [menu] = useState(['Home','Info del Usuario', 'Settings', 'Military Fitness', 'Salir'])
    const [lastScreen, setLastScreen] = useState('')

    let selected = useSelector((state) =>state.screens),
        isValid = selected !== undefined && Object.keys(selected).length > 0 ,
        found = isValid && Object.keys(selected).find((key)=> selected[key] === true)

    useEffect(()=>{
        console.log(found);
        setLastScreen(found)
    }, [found])
    return (
    <View style={{marginRight: 20}}>
        <Entypo name="user" size={32} color="black" onPress={()=> setShowMenu(!showMenu)}/>
        {showMenu ?

            <FlatList
                style={{position:'absolute', top: 35, right: 1}}
                data={menu}
                renderItem={({ item }) => <IconMenuItem lastScreen={lastScreen} navigation={navigation} title={item}/> }
            />: null}
    </View>
  )
}