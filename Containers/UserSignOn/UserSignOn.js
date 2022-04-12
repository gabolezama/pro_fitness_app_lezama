import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserForm from '../UserForm/UserForm';
import UserLogIn from '../UserLogIn/UserLogIn';
import { menuState, readFromBD, ScreenResetter, ScreenSetter } from '../Store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const UserSignOn = (props) => {
    const{
        route,
        orientation,
        navigation,
        font
      }= props;
      
    const [registerUser, setRegisterUser] = useState(false)
    const dispatcher = useDispatch()
    
    const dataDeleted = useSelector( state => state.dbState.dataFromBd)
    // console.log('fromBD-->', dataDeleted?.length );

    useEffect(()=>{
        dispatcher( readFromBD() )
        dispatcher( ScreenSetter('USER_FORM') )
        
        return () => dispatcher( ScreenResetter('USER_FORM') )
    },[registerUser])

    useEffect(()=>{
        if(dataDeleted?.length === 0){
            alert
            (`Ud no posee datos registrados. Necesitamos que pueda darnos algunos datos basicos para que la app funcione`)
            navigation.navigate('UserInfo')
        }
    }, [dataDeleted])
    return (
        <View>
            {registerUser?
                <UserForm {...props} setRegisterUser={(set)=>setRegisterUser(set)}/>:
                <UserLogIn {...props} setRegisterUser={(set)=>setRegisterUser(set)} registerUser={registerUser}/>
            }
        </View>
    );
};

export default UserSignOn