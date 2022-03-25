import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { ScreenSetter, ScreenResetter, menuState, readFromBD } from '../Store/actions/actions'

const Tab = createMaterialTopTabNavigator();

export default function ShowRutine(props) {

    const{
        route,
        orientation,
        navigation,
        font
    }= props;
    const muscles = ["Pecho","Biceps","Triceps","Espalda","Hombros","Trapecio","Gemelos","Gluteos","Abductores","Cuadriceps","Isquitibiales"]

    const dispatcher = useDispatch();

    const dataForCalulate = useSelector( state => state.dbState.dataFromBd)
    
    useEffect(()=>{
        dispatcher( readFromBD() )
        dispatcher( ScreenSetter('SHOW_RUTINE') )
        
        return () => dispatcher( ScreenResetter('SHOW_RUTINE') )
    },[])

    useEffect(()=>{
        dataForCalulate !== undefined && dataForCalulate !== null ? console.log(dataForCalulate) : null
    },[dataForCalulate])

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
                        {(props)=> <Rutine {...props} title={muscle} showImg={imgSource(muscle)} orientation={orientation} font={font} userData={dataForCalulate}/>}
                    </Tab.Screen>)
            })      
        }
        </Tab.Navigator>
    )
}