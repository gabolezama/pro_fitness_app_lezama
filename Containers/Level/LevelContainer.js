import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { LvlStyles } from './Level.styles';
import app from '../../database/FirebaseDB';

export default function LevelContainer(props){
    const{
        selected
    } = props

    const [experience, setExperience] = useState([{name: "Menos de un año", id: 0}, {name: "mas de un año", id: 1}, {name: "más de dos años", id: 2}])
    const [trainingLevel, setTrainingLevel] = useState([{name: "Alto", id: 0},{name:"Medio", id:1}, {name:"Tranqui", id:2}])
    const [customize, setCustomize]= useState({})
    let customizeObj = {}

    useEffect(()=>{
        console.log(customize);
    }, [customize])

    const handleExperince = (name)=>{
        customizeObj.experience = name;
        setCustomize( customizeObj )
    }
    const handleTraining = (name)=>{
        customizeObj.trainingLevel = name;
        setCustomize({...customize, trainingLevel: name})
    }

    return(
        <View style={LvlStyles.container}>
                {Object.values(customize).length === 0 ?
                <View style={LvlStyles.view}>
                    <Text style={LvlStyles.text}>Indica Tu nivel de experiencia fitness</Text>
                    <FlatList
                        data={experience}
                        renderItem={ ({item})=>{
                            return <Text style={LvlStyles.option} onPress={()=> handleExperince(item.name)}>{item.name}</Text>
                        }}
                    />
                </View> :
                <View style={LvlStyles.view}>
                    <Text style={LvlStyles.text}>Indica el nivel de entrenamiento</Text>                
                    <FlatList
                        data={trainingLevel}
                        renderItem={ ({item})=>{
                            return <Text style={LvlStyles.option} onPress={()=> handleTraining(item.name)}>{item.name}</Text>
                        }}
                    />
                </View>}
        </View>
    )
}