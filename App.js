// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {Button, Dimensions} from 'react-native';
import UserForm from './Containers/UserForm/UserForm';
import ShowRutine from './Containers/Rutine/ShowRutine';
import LevelContainer from './Containers/Level/LevelContainer';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Containers/Splash/SplashScreen';
import UserIcon from './Containers/Atom/UserIcon';
import UserInfo from './Containers/Atom/MenuScreens/UserInfo';
import Settings from './Containers/Atom/MenuScreens/Settings';
import Contacts from './Containers/Atom/MenuScreens/Contacts';
import LogOut from './Containers/Atom/MenuScreens/LogOut';


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
        <Stack.Navigator
        // initialRouteName='Show Rutine'
        screenOptions={(props)=>({headerStyle:{ backgroundColor:'lightblue'}, headerTitleStyle:{fontFamily:'Lobster-Regular'}, headerRight: () => <UserIcon navigation={props.navigation}/>})}
        >
          <Stack.Screen name="SignIn">
            {(props)=> <UserForm {...props} orientation={vertical} font={'Lobster-Regular'}/>}
          </Stack.Screen>
          <Stack.Screen name="TrainingLevel">
            {(props)=> <LevelContainer {...props} orientation={vertical} font={'Lobster-Regular'}/>}
          </Stack.Screen>
          <Stack.Screen name="ShowRutine">
            {(props)=> <ShowRutine {...props} orientation={vertical} font={'Lobster-Regular'}/>}
          </Stack.Screen>
          <Stack.Screen name='UserInfo' component={UserInfo} options={{headerLeft: ()=> null}}/>
          <Stack.Screen name='Settings' component={Settings} options={{headerLeft: ()=> null}}/>
          <Stack.Screen name='Contacts' component={Contacts} options={{headerLeft: ()=> null}}/>
          <Stack.Screen name='LogOut' component={LogOut} options={{headerLeft: ()=> null}}/>
        </Stack.Navigator>
      </NavigationContainer>
      }
    </>
  );
}