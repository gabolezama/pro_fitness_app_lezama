// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {Dimensions} from 'react-native';
import UserForm from './Containers/UserForm/UserForm';
import LevelContainer from './Containers/Level/LevelContainer';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Containers/Splash/SplashScreen';


const Stack = createStackNavigator();

export default function App() {

  const {width, height} = Dimensions.get('window')

  const [vertical, setVertical] = useState(height > width)
  const [splash, setSplash] = useState(true)

  Dimensions.addEventListener('change', ({window:{width,height}})=>{
      setVertical(height > width)
    })
  
  const [loaded, error] = useFonts({
    'Lobster-Regular': require ('./assets/fonts/Lobster-Regular.ttf')
  })
  if(!loaded) return <AppLoading/>

  return (
    <>
      {splash ?
      <SplashScreen orientation={vertical} font={'Lobster-Regular'} setSplash={setSplash}/>
      :
      <NavigationContainer style={vertical ? {flex:1, width:'50%', height:'50%'} : {width:'50%', height:'25%'} }>
        <Stack.Navigator  screenOptions={{headerStyle:{ backgroundColor:'lightblue'}}}>
          <Stack.Screen name="Sign In">
            {(props)=> <UserForm {...props} orientation={vertical} font={'Lobster-Regular'}/>}
          </Stack.Screen>
          <Stack.Screen name="Training Level">
            {(props)=> <LevelContainer {...props} orientation={vertical} font={'Lobster-Regular'}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      }
    </>
  );
}