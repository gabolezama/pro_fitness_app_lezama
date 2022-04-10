import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LvlStyles, MultipleChoice } from '../Level/Level.styles'
import { useDispatch, useSelector } from 'react-redux'
import { releaseData } from '../Store/actions/actions'

const UserMenu = (props) => {
    const{
        route,
        orientation,
        navigation,
        font
    } = props

    const [lastScreen, setLastScreen] = useState('')
    const [options] = useState(['Información del Usuario','Contactos', 'Liberar Datos', 'Salir'])
    const dispatcher = useDispatch()

    let selected = useSelector((state) =>state.screens),
        isValid = selected !== undefined && Object.keys(selected).length > 0 ,
        found = isValid && Object.keys(selected).find((key)=> selected[key] === true)

    useEffect(()=>{
        setLastScreen(found)
    }, [found])

    const handleCustom = (name) => {
        if( name === 'Salir') {
            lastScreen !==''? navigation.navigate(lastScreen): null
            return
        }
        
        if( name === 'Liberar Datos') {
            dispatcher( releaseData() )
        }

        navigation.navigate(
            name === 'Información del Usuario'? 'UserInfo':
            name === 'Contactos'? 'Contacts' : 'UserSignOn')
    }

    return (
        <View style={LvlStyles.container}>
            <MultipleChoice orientation={orientation} textTitle={ 'Menú del Usuario' } displayArray={ options } font={font} onAction={(name)=> handleCustom(name)}/>
        </View>
  )
}

export default UserMenu