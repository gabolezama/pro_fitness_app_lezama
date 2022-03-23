// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {Button, Dimensions} from 'react-native';
import ShowRutine from './Containers/Rutine/ShowRutine';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Containers/Splash/SplashScreen';
import UserIcon from './Containers/Atom/UserIcon';
import { Provider } from 'react-redux'
import indexStore from './Containers/Store/indexStore';
import UserSignOn from './Containers/UserSignOn/UserSignOn';
import Camera from './Containers/Camera/Camera';
import UserMenu from './Containers/UserMenu/UserMenu';
import UserInfo from './Containers/Atom/MenuScreens/UserInfo';
import Settings from './Containers/Atom/MenuScreens/Settings';
import Contacts from './Containers/Atom/MenuScreens/Contacts';

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
      <Provider store={ indexStore }>
        <NavigationContainer style={vertical ? {flex:1, width:'50%', height:'50%'} : {width:'50%', height:'25%'} }>
          <Stack.Navigator
          // initialRouteName='Show Rutine'
          screenOptions={(props)=>({headerStyle:{ backgroundColor:'lightblue'}, headerTitleStyle:{fontFamily:'Lobster-Regular'},
                          headerRight: () => <UserIcon navigation={props.navigation}/>})}
          >
            <Stack.Screen name="UserSignOn">
              {(props)=> <UserSignOn {...props} orientation={vertical} font={'Lobster-Regular'}/>}
            </Stack.Screen>
            <Stack.Screen name="ShowRutine">
              {(props)=> <ShowRutine {...props} orientation={vertical} font={'Lobster-Regular'}/>}
            </Stack.Screen>
            <Stack.Screen name='Camera'>
              {(props)=> <Camera {...props} orientation={vertical} font={'Lobster-Regular'}/>}
            </Stack.Screen>
            <Stack.Screen name='UserMenu' options={{headerLeft: ()=> null}}>
              {(props)=> <UserMenu {...props} orientation={vertical} font={'Lobster-Regular'}/>}
            </Stack.Screen>
            <Stack.Screen name='UserInfo' component={UserInfo} font={'Lobster-Regular'} options={{headerLeft: ()=> null}}/>
            <Stack.Screen name='Settings' component={Settings} font={'Lobster-Regular'} options={{headerLeft: ()=> null}}/>
            <Stack.Screen name='Contacts' component={Contacts} font={'Lobster-Regular'} options={{headerLeft: ()=> null}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      }
    </>
  );
}