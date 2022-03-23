import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserForm from '../UserForm/UserForm';
import UserLogIn from '../UserLogIn/UserLogIn';
import { menuState, ScreenResetter, ScreenSetter } from '../Store/actions/actions';
import { useDispatch } from 'react-redux';

const UserSignOn = (props) => {
    const{
        route,
        orientation,
        navigation,
        font
      }= props;
      
    const [registerUser, setRegisterUser] = useState(false)
    const dispatcher = useDispatch()

    useEffect(()=>{
        dispatcher( ScreenSetter('USER_FORM') )
        
        return () => dispatcher( ScreenResetter('USER_FORM') )
    },[registerUser])

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