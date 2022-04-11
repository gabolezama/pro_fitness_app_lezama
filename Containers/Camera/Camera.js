import { View, Text, Alert, Button, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location';
import { useDispatch, useSelector } from 'react-redux';
import { addImageToFile, sampleImageUrl, souvenirsFromBd, souvenirsToBd } from '../Store/actions/actions';
import { TouchableButton } from '../Atom/TochableButton';
const API_KEY = 'AIzaSyBFlpq18XzVrsV7f19lQiqktzso1HyGI3I';

const Camera = ({font}) => {
    const dispatcher = useDispatch()

    const seeSouvenir = useSelector( state => state.dbState.souvenirFromBd)
    console.log('dataSuvr-->', seeSouvenir);

    useEffect(()=>{
            dispatcher( souvenirsFromBd() )
    },[seeSouvenir])

    const verifyPermissions = async() =>{
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()

        if(granted){
            return true
        }

        Alert.alert(
            'Permisos Insuficientes',
            'Necesita otorgar permisos de la cámara',
            [{ text: 'OK'}]
        )

        return false
    }

    const handleTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if(!isCameraOk) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [20,20],
            quality: 0.8,
        })

        dispatcher( addImageToFile( image.uri ))
    }

    const imgUri = useSelector( state => state.camera.imageUri) ?? seeSouvenir?.picture ?? null;

    const handleTakeLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
        alert("No tiene permisos para Locations")
        return;
        }

        let location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });

        const { coords } = location
        const myLocation = {lat: coords.latitude, lng: coords.longitude};

        dispatcher( sampleImageUrl(
            `https://maps.googleapis.com/maps/api/staticmap?center=${myLocation.lat},${myLocation.lng}&zoom=13&size=400x400&markers=color:blue%7Clabel:F%7C${myLocation.lat},${myLocation.lng}&key=${API_KEY}`
        ))
    }
    const imgUriLocation = useSelector( state => state.camera.imageUriLocation) ?? seeSouvenir?.location ?? null;

    const saveSouvenirs = () =>{
        dispatcher( souvenirsToBd(imgUri.toString(), imgUriLocation.toString()) )
    }

    return (
        <View style={{marginVertical: 20, alignItems:'center'}}>
            <TouchableOpacity style={{marginVertical: 10}} onPress={()=> handleTakeImage() }>
                <TouchableButton style={{ paddingLeft: 30 }} textTitle={'Camara!!'} font={font}/>
            </TouchableOpacity>
            {
                imgUri !== undefined && imgUri !== null && imgUri !== ''?
                <Image style={{height: 250, width: 200}} source={{ uri: imgUri}}/>:
                <Text> No hay imagen para mostrar</Text>
            }
            <TouchableOpacity style={{marginVertical: 10}} onPress={()=> handleTakeLocation() }>
                <TouchableButton style={{ paddingLeft: 30 }} textTitle={'Location!!'} font={font}/>
            </TouchableOpacity>
            {
                imgUriLocation !== undefined && imgUriLocation !== null && imgUriLocation !== ''?
                <Image style={{height: 250, width: 200}} source={{ uri: imgUriLocation}}/>:
                <Text>Presione el boton para obtener ubicación</Text>
            }
            {   imgUri && imgUriLocation &&
                <TouchableOpacity style={{marginVertical: 10}} onPress={()=> saveSouvenirs() }>
                    <TouchableButton style={{ paddingLeft: 20 }} textTitle={'Guardar!!'} font={font}/>
                </TouchableOpacity>
            }
        </View>
    );
};

export default Camera