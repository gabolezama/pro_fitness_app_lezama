import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Rutine(props) {
    const{
        title,
        font,
        showImg
    } = props

    return (
        <View style={{ display: 'flex', paddingHorizontal: 20, alignItems: 'center'}}>
            <Text style={{ fontSize: 20, fontFamily: font, marginVertical: 10}}>{title}</Text>
            <Image style={{width:300, height:100}} source={showImg} />
        </View>
    )
}