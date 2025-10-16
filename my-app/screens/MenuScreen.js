import { Text, StyleSheet, View, Button} from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'
import ImageBackgroungScreen from './ImageBackgroungScreen'
import ScrollScreen from './ScrollScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BotonesSheetScreen from './BotonesSheetScreen'


export default function MenuScreen() {

    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'TextInput':
            return <TextInputScreen/>
        case 'ImageBackgroung':
            return <ImageBackgroungScreen/>
        case 'ScrollScreen':
            return <ScrollScreen/>
        case 'ActivityIndicatorScreen':
            return <ActivityIndicatorScreen/>
        case 'FlatListScreen ':
            return <FlatListScreen/>
        case 'ModalScreen':
            return <ModalScreen/>
        case 'BotonesSheetScreen':
            return <BotonesSheetScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'menu':
            default:
                    return (
                        <View>
                        <Text>Menu de Practicas</Text>
                        <Button title='Pract:Contador' onPress={()=>setScreen('contador')}/>
                        <Button title='Pract:Buttons' onPress={()=>setScreen('botones')}/>
                        <Button title='Pract:TextInput' onPress={()=>setScreen('TextInput')}/>
                        <Button title='Pract:ImageBackgroung' onPress={()=>setScreen('ImageBackgroung')}/>
                        <Button title='Pract:ScrollScreen' onPress={()=>setScreen('ScrollScreen')}/>
                        <Button title='Pract:ActivityIndicatorScreen' onPress={()=>setScreen('ActivityIndicatorScreen')}/>
                        <Button title='Pract:FlatListScreen' onPress={()=>setScreen('FlatListScreen')}/>
                        <Button title='Pract:ModalScreen' onPress={()=>setScreen('ModalScreen')}/>
                        <Button title='Pract:BotonesSheetScreen' onPress={()=>setScreen('BotonesSheetScreen')}/>
                        </View>
                    )
    }
 

  
}

const styles = StyleSheet.create({})