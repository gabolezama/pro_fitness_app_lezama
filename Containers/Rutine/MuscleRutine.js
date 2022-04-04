import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MuscleRutine = (props) => {
    const {
        title,
        series,
        qty,
        font
    }= props;

    return (
        <View style={RutineCard.container}>
            <Text style={[RutineCard.title, {fontFamily: font}]}>{title}</Text>
            <Text style={[RutineCard.text, {fontFamily: font}]}>Series: {series}</Text>
            <Text style={[RutineCard.text, {fontFamily: font}]}>Repeticiones: {qty}</Text>
        </View>
    )
}

const RutineCard = StyleSheet.create({
    container:{
        width: 260,
        height:'auto',
        padding: 10,
        borderColor: 'black',
        textAlign:'center',
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 5,
        borderRadius: 10,
    },
    title:{
        fontSize:20, 
        textAlign: 'center',
        color: 'black',
        textDecorationLine:'underline'
    },
    text:{
        fontSize:18
    }
});

export default MuscleRutine