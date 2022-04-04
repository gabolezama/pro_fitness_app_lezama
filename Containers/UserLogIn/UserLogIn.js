import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UserFormStyles } from '../UserForm/UserForm.syles';
import { TouchableButton } from '../Atom/TochableButton';
import { useDispatch, useSelector } from 'react-redux';
import { consfirmUser, userLogInResetter } from '../Store/actions/actions';
import { StatusBar } from 'expo-status-bar';

const UserLogIn = (props) => {
    const{
        route,
        orientation,
        navigation,
        font,
        registerUser,
        setRegisterUser
      }= props;

    const [inputMail, setInputMail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [sendTouched, setSendTouched] = useState(false)

    const dispatcher = useDispatch()
    const isValidUser = useSelector( (state) => state.httpStatus.signInStatus )
    
    useEffect(()=>{

        if(isValidUser === 'true'){
            navigation.navigate('ShowRutine') 
            
        } else if(sendTouched && isValidUser === 'false'){
            setSendTouched(false)
            alert('Mail o Contraseña inválidos!!')
        }
        
        return () => dispatcher( userLogInResetter() )
    },[isValidUser, sendTouched])
    
    const handleInputMail = (text) =>{
        setInputMail(text)
    }

    const handleInputPassword = (text) =>{
        setInputPassword(text)
    }

    const handleLogIn = () =>{
        dispatcher( consfirmUser(inputMail, inputPassword) )        
        setSendTouched(true)
    }

    return (
        <View style={LogInStyles.container}>
            <Text style={UserFormStyles.text}>Ingrese su Email: </Text>
            <TextInput
            value={inputMail}
            onChangeText={(text)=> handleInputMail(text)}
            keyboardType={'email-address'} 
            style={LogInStyles.input} />
            <Text style={UserFormStyles.text}>Ingrese su Contraseña: </Text>
            <TextInput
            value={inputPassword}
            onChangeText={(text)=> handleInputPassword(text)}
            keyboardType={'visible-password'} 
            style={LogInStyles.input} />

            <TouchableOpacity onPress={() => navigation.navigate("ShowRutine")}>
                <TouchableButton style={{ paddingLeft: 33 }} font={font} textTitle={'Jump'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLogIn()}>
                <TouchableButton style={{ paddingLeft: 33 }} font={font} textTitle={'Entrar'} />
            </TouchableOpacity>
            <Text style={{marginVertical: 10}}>No estás registrado?</Text>
            <TouchableOpacity onPress={() => setRegisterUser(true)}>
                <TouchableButton style={{ paddingLeft: 15 }} font={font} textTitle={'Registrarme'} />
            </TouchableOpacity>
            <StatusBar animated={true} barStyle={'dark-content'} backgroundColor="#000000" showHideTransition={'slide'} hidden={false}/>
        </View>
    )
}

const LogInStyles = StyleSheet.create({
    container: {
        top: 40,
        width: '80%',
        padding: 15,
        marginHorizontal: 40,
        borderRadius: 20,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center'
      },
      input:{
        width: '80%',
        marginVertical: 10,
        fontSize: 18,
        backgroundColor: '#fff'
      }
})
export default UserLogIn