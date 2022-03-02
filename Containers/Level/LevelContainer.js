import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { LvlStyles, MultipleChoice } from './Level.styles';
import {TouchableButton} from '../Atom/TochableButton'

export default function LevelContainer(props){
    const{
        route,
        orientation,
        navigation,
        font
    } = props

    const [experience, setExperience] = useState([{name: "Menos de un año", id: 0}, {name: "mas de un año", id: 1}, {name: "más de dos años", id: 2}])
    const [trainingLevel, setTrainingLevel] = useState([{name: "Alto", id: 0},{name:"Medio", id:1}, {name:"Tranqui", id:2}])
    const [gender, setGender] = useState([{name: "Masculino", id: 0},{name:"Femenino", id:1}])
    const [customize, setCustomize]= useState({})

    const chioce1 = Object.values(customize).length === 0;
    const choice2 = Object.values(customize).length === 2;
    const title = choice2 ? 'Indique su genero' : chioce1 ? 'Indica tu nivel de Experiencia en el fitness' : 'Indica el nivel de Intesidad';
    const arrayIterator = choice2 ? gender : chioce1 ? experience : trainingLevel;
    // const action = choice2 ? handleGender : chioce1 ? handleExperince : handleTraining;
    let customizeObj = {}

    useEffect(()=>{
        console.log(customize);
    }, [customize])

    const handleCustom = (name)=>{
        customizeObj[choice2 ? "gender" : chioce1 ? "experience" : "trainingLevel"] = name;
        setCustomize({...customize, ...customizeObj})
        choice2 ? navigation.navigate('ShowRutine') : null
    }

    return(
        <View style={LvlStyles.container}>
                <MultipleChoice orientation={orientation} textTitle={ title } displayArray={ arrayIterator } onAction={(name)=> handleCustom(name)}/>
        </View>
    )
}