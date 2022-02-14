import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export const TouchableButton = (props)=> {
    const {
        style,
        textTitle
    } = props;

    return (
        <View style={[style,touchableStyle.tochable]}>
            <Text>{textTitle}</Text>
        </View>
    );
}
export const touchableStyle = StyleSheet.create({
tochable:{
    backgroundColor: 'lightblue',
    width: 110,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center'
  }
});