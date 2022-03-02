import React, { useState } from 'react'
import { Entypo, Ionicons, AntDesign  } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import { StackActions } from '@react-navigation/native';

export default function IconMenuItem({ navigation, title, setGoScreen }) {

    const MenuIcon = ({name}) =>{

        const iconSelector = name === 'Home'?
        <Entypo name="home" size={24} color="black" style={{ padding:5 }} />:
        name === 'Info del Usuario'? 
        <Entypo name="info-with-circle" size={24} color="black" style={{ padding:5 }} />: 
        name === 'Settings'?
        <Ionicons name="settings-sharp" size={24} color="black" style={{ padding:5 }} />:
        name === 'Military Fitness'?
        <AntDesign name="contacts" size={24} color="black" style={{ padding:5 }} />:
        <AntDesign name="logout" size={24} color="black" style={{ padding:5 }} />

        return iconSelector
    }
    const handleItemAction = (name) =>{
        
        if(name === 'Home' && goScreen !== 0){
            navigation.dispatch( StackActions.pop( goScreen ) )
            return
        }

        setGoScreen()

        navigation.navigate(
            name === 'Info del Usuario'? 'UserInfo':
            name === 'Settings'? 'Settings':
            name === 'Military Fitness'? 'Contacts':
            'LogOut'
        )
    }

    return (
        <View style={{display:'flex', flexDirection:'row', width: 170, backgroundColor: 'grey' }}>
            <MenuIcon name={title}/>
            <Text style={{width: 150, marginBottom: 15, paddingTop: 5}} onPress={()=> handleItemAction(title)}>{title}</Text>
        </View>
    )
}