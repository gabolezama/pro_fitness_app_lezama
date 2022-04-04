import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import MuscleRutine from './MuscleRutine'
import Pecho from '../../Pecho.json'
import Biceps from '../../Biceps.json'


export default function Rutine(props) {
    const{
        title,
        font,
        font2,
        showImg,
        userData,
        navigation
    } = props
    console.log('lvl', userData.training_level);
    const userMuscleRutine = 
    navigation.getState().index === 0? 
    Pecho[userData.training_level] :
    navigation.getState().index === 1? 
    Biceps[userData.training_level] : [];
     
    return (
        <View style={{display: 'flex', paddingHorizontal: 20, alignItems: 'center'}}>
            <Text style={{ fontSize: 20, fontFamily: font, marginVertical: 10}}>{title}</Text>
            <Image style={{width:300, height:100}} source={showImg} />
            {   userMuscleRutine?
                <FlatList
                    style={{ marginVertical: 10, width: 300, height: 500, backgroundColor:'lightgrey', borderRadius:10}}
                    data={userMuscleRutine.Rutines}
                    renderItem={({ item }) => <MuscleRutine title={item.name} series={item.series} qty={item.rep_qty} font={font2} />}
                />:
                <Text>El array no se ha cargado</Text>
            }
        </View>
    )
}