import app from '../../../database/FirebaseDB'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getFirestore, setDoc } from "firebase/firestore/lite"
import * as FileSystem from 'expo-file-system'

export const ScreenSetter = (tag) =>{
    return {
    type: tag,
    active: true
}}

export const ScreenResetter = (tag) =>{
    return {
    type: tag,
    active: false
}}

export const userLogInResetter = () =>{
    return{
        type: 'SIGN_IN_USER',
        status: false
    }}

export const menuState = (set) =>{
    return{
        type: 'MENU_STATE',
        status: set
    }}

export const sampleImageUrl = (set) =>{
    return{
        type: 'IMAGE_URL',
        uriLocation: set
    }}

export const WriteUserInfo = (inputFormValues) =>{
    return async dispatch =>{
        const db = getFirestore(app);

        try {
            inputFormValues ? await setDoc(doc(db, "Users", `${inputFormValues.Nombre}`), inputFormValues) : null;
            
            dispatch({
                type: 'WRITE_USER_INFO',
                status: true
            })
          } catch (error) {
            console.error(error);

            dispatch({
                type: 'WRITE_USER_INFO',
                status: false
            })
          }
    }
}

export const registerUser = (email, password) =>{
    return async dispatch =>{
        const auth = getAuth(app);

        try {
            
            const response = await createUserWithEmailAndPassword( auth, email, password)

            dispatch({
                type: 'AUTH_USER',
                status: true
            })
          } catch (error) {
            console.error(error);

            dispatch({
                type: 'AUTH_USER',
                status: false
            })
          }
    }
}

export const consfirmUser = (email, password) =>{
    return async dispatch =>{
        const auth = getAuth(app);

        const response = await signInWithEmailAndPassword( auth, email, password)
        console.log(response);

        dispatch({
            type: 'SIGN_IN_USER',
            status: 'wait'
        })

        setTimeout(()=>{

            dispatch({
                type: 'SIGN_IN_USER',
                status: response? 'true' : 'false'
            })
        }, 2000)
    }
}

export const addImageToFile = ( imageUri ) =>{
    return async dispatch =>{
        /* const filename = imageUri.split('/').pop()
        const Path = FileSystem.documentDirectory + filename
        console.log('path', Path); */

        try {
            /* FileSystem.moveAsync({
                from: imageUri,
                to: Path,
            }) */
            
            dispatch({
                type: 'ADD_IMAGE', 
                uri: imageUri
            })

        } catch (error) {
            console.log(error);

            dispatch({
                type: 'ADD_IMAGE', 
                uri: false
            })
        }
    }
}