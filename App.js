// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {Image, View, Text, Animated} from 'react-native';
import { AppStyles } from './App.styles';
import gymSplash from './assets/logo-app.jpg'
import UserForm from './Containers/UserForm/UserForm';
import LevelContainer from './Containers/Level/LevelContainer';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {

  const [splash, setSplash] = useState(true)

  const opacity = useState(new Animated.Value(1))[0]

  function FadeOutSplash(){
    Animated.timing(opacity,{
      toValue: 0,
      duration:5000,
      useNativeDriver:true
    }).start()
  }

  useEffect(()=>{
    FadeOutSplash()
    setTimeout(()=>{
      setSplash(false)
    },3000)
  },[])
  
  const [loaded, error] = useFonts({
    'Lobster-Regular': require ('./assets/fonts/Lobster-Regular.ttf')
  })
  if(!loaded) return <AppLoading/>

  return (
    <>
      {splash ?
      <Animated.View style={{
        ...AppStyles.splashContainer,
        opacity
      }}>
          <Text style={{...AppStyles.splashTitle, fontFamily:'Lobster-Regular'}}> PRO FITNESS APP</Text>
          <Image style={AppStyles.splash} source={ gymSplash }/>
      </Animated.View>
      :
      <NavigationContainer style={{flex:1, width:'50%', height:'50%'}}>
        <Stack.Navigator>
          <Stack.Screen name="Sign In">
            {()=> <UserForm font={'Lobster-Regular'} />}
          </Stack.Screen>
          <Stack.Screen name="Training Level" component={LevelContainer} />
        </Stack.Navigator>
      </NavigationContainer>
      }
    </>
  );
}