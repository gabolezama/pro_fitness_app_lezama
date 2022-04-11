import React, { useEffect, useState } from 'react'
import {Text} from 'react-native'
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
        font,
        font2
    }= props;
    const muscles = ["Pecho","Biceps","Triceps","Espalda","Hombros","Trapecio","Gemelos","Gluteos","Abductores","Cuadriceps","Isquitibiales"]
    const [userData, setUserData] = useState({})

    const dispatcher = useDispatch();

    const DbData = useSelector( state => state.dbState.dataFromBd)
    const currentData = useSelector( state => state.dbState.dataToBd)
    const dataForCalculate = DbData.length === 0? currentData : DbData._array[DbData._array.length-1]
    console.log('ShowRut-->', DbData);
    console.log('ShowRut-2->', currentData);
    
    
    useEffect(()=>{
        dispatcher( readFromBD() )
        dispatcher( ScreenSetter('SHOW_RUTINE') )
        
        if(DbData?.length === 0 && currentData === null){
            alert
            (`Informacion Requerida`)
        }
        
        return () => dispatcher( ScreenResetter('SHOW_RUTINE') )
    },[])
    

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
            muscles.map((muscle, index)=>{
                return(<Tab.Screen key={index} name={`${muscle}`}>
                        {
                            (props)=> 
                            <Rutine {...props} title={muscle} showImg={imgSource(muscle)} 
                                    orientation={orientation} font={font} font2={font2} 
                                    userData={ dataForCalculate }
                                    />
                        }
                    </Tab.Screen>)
            })      
        }
        </Tab.Navigator>
    )
}