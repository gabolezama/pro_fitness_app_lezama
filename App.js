import React, { useEffect, useState } from 'react';
import {Image, View, Text} from 'react-native';
import { AppStyles } from './App.styles';
import gymSplash from './assets/gym-splash.jpeg'
import UserForm from './Containers/UserForm/UserForm';
import LevelContainer from './Containers/Level/LevelContainer';
import { UserFormStyles } from './Containers/UserForm/UserForm.syles';

export default function App() {

  const [splash, setSplash] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false)
    }, 5000)
  },[])

  return (
    <View style={AppStyles.container}>
      {splash && 
      <View style={AppStyles.splashContainer}>
        <Text style={AppStyles.splashTitle}> PRO FITNESS APP</Text>
        <Image style={AppStyles.splash} source={ gymSplash }/>
      </View>}
      {!splash && <UserForm/>}
    </View>
  );
}