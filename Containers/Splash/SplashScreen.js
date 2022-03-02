import React, { useEffect, useState } from 'react'
import { View, Text, Animated, Image } from 'react-native'
import gymSplash from '../../assets/logo-app.jpg'
import { AppStyles } from '../../App.styles'

export default function SplashScreen({ orientation, font, setSplash }) {

    const opacity = useState(new Animated.Value(1))[0]

    useEffect(()=>{
        FadeOutSplash()
        setTimeout(()=>{
          setSplash(false)
        },3000)
      },[])

    function FadeOutSplash(){
        Animated.timing(opacity,{
          toValue: 0,
          duration:5000,
          useNativeDriver:true
        }).start()
    }

    return (
        <Animated.View style={{
            ...AppStyles.splashContainer,
            opacity
        }}>
            <Text style={orientation ? {...AppStyles.splashTitle, fontFamily: font} : {...AppStyles.splashTitleH, fontFamily: font}}>
                PRO FITNESS APP
            </Text>
            {!orientation ? 
            <Text style={{...AppStyles.splashTitle, fontFamily: font, top:'60%', left:'45%'}}>
                WELCOME!!
            </Text>: null}
            <Image style={orientation ? AppStyles.splash : AppStyles.splashH} source={ gymSplash }/>
        </Animated.View>
    )
}