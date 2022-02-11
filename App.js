// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {Image, View, Text, Animated} from 'react-native';
import { AppStyles } from './App.styles';
import gymSplash from './assets/gym-splash.jpeg'
import UserForm from './Containers/UserForm/UserForm';
import LevelContainer from './Containers/Level/LevelContainer';
import { UserFormStyles } from './Containers/UserForm/UserForm.syles';
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
    },2000)
  },[])
  
  return (
    <>
      {splash ?
      <Animated.View style={{
        ...AppStyles.splashContainer,
        opacity
      }}>
          <Text style={AppStyles.splashTitle}> PRO FITNESS APP</Text>
          <Image style={AppStyles.splash} source={ gymSplash }/>
      </Animated.View>
      :
      <NavigationContainer style={{flex:1, width:'50%', height:'50%'}}>
        <Stack.Navigator>
          <Stack.Screen name="Training Level" component={LevelContainer} />
          <Stack.Screen name="User Form" component={UserForm} />
        </Stack.Navigator>
      </NavigationContainer>
      }
    </>
  );
}