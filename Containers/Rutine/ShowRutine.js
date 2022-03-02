import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import Rutine from './Rutine'

import pecho from '../../assets/muscles/pecho.jpg'
import biceps from '../../assets/muscles/biceps.jpg'
import espalda from '../../assets/muscles/espalda.jpg'
import gemelos from '../../assets/muscles/gemelos.jpg'
import gluteos from '../../assets/muscles/gluteos.jpg'
import hombros from '../../assets/muscles/hombros.jpg'
import triceps from '../../assets/muscles/triceps.jpg'
import trapecio from '../../assets/muscles/trapecio.jpg'
import abductores from '../../assets/muscles/abductores.jpg'
import cuadriceps from '../../assets/muscles/cuadriceps.jpg'
import isquiotibiales from '../../assets/muscles/isquiotibiales.jpg'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function ShowRutine(props) {

    const muscles = ["Pecho","Biceps","Triceps","Espalda","Hombros","Trapecio","Gemelos","Gluteos","Abductores","Cuadriceps","Isquitibiales"]
    const{
        route,
        orientation,
        navigation,
        font
    }= props;

    const imgSource = (str) =>{
        let img = null
        switch(str){
            case "Pecho":
                img= pecho;
                break;
            case "Biceps":
                img= biceps;
                break;
            case "Espalda":
                img= espalda;
                break;
            case "Gemelos":
                img= gemelos;
                break;
            case "Gluteos":
                img= gluteos;
                break;
            case "Hombros":
                img= hombros;
                break;
            case "Triceps":
                img= triceps;
                break;
            case "Trapecio":
                img= trapecio;
                break;
            case "Abductores":
                img= abductores;
                break;
            case "Cuadriceps":
                img= cuadriceps;
                break;
            case "Isquitibiales":
                img= isquiotibiales;
                break;
        }
        return img
    }

    return (
        <Tab.Navigator
            screenOptions={{ tabBarScrollEnabled: true}}
        >       
        {
            muscles.map((muscle)=>{
                return(<Tab.Screen name={`${muscle}`}>
                        {(props)=> <Rutine {...props} title={muscle} showImg={imgSource(muscle)} orientation={orientation} font={font}/>}
                    </Tab.Screen>)
            })      
        }
        </Tab.Navigator>
    )
}