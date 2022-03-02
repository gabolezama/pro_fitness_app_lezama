import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { View, Text, FlatList } from 'react-native'
import IconMenuItem from './IconMenuItem'

export default function UserIcon({navigation}) {
    
    const [showMenu, setShowMenu] = useState(false)
    const [goScreen, setGoScreen] =useState(0)
    const [menu, setMenu] = useState(['Home','Info del Usuario', 'Settings', 'Military Fitness', 'Salir'])

    useEffect(()=>{
        console.log(goScreen);
        return ()=> setShowMenu(false)
    } , [goScreen])

    return (
    <View style={{marginRight: 20}}>
        <Entypo name="user" size={32} color="black" onPress={()=> setShowMenu(!showMenu)}/>
        {showMenu ?

            <FlatList
                style={{position:'absolute', top: 35, right: 1}}
                data={menu}
                renderItem={({ item }) => <IconMenuItem navigation={navigation} title={item} setGoScreen={()=> setGoScreen(goScreen+1)}/> }
            />: null}
    </View>
  )
}