import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { LvlStyles, MultipleChoice } from './Level.styles';
import {TouchableButton} from '../Atom/TochableButton'

export default function LevelContainer(props){
    const{
        selected,
        navigation
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

    const chioce = Object.values(customize).length === 0;
    const title = chioce ? 'Indica tu nivel de Experiencia en el fitness' : 'Indica el nivel de Intesidad';
    const arrayIterator = chioce ? experience : trainingLevel;
    const action = chioce ? handleExperince : handleTraining;

    return(
        <View style={LvlStyles.container}>
                <MultipleChoice textTitle={ title } displayArray={ arrayIterator } onAction={(name)=> action(name)}/>
        </View>
    )
}