import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar  } from 'react-native';

const SPLASH_IMAGE = require('../assets/Recursos/Paisaje1.jpg');
const MAIN_IMAGE = require('../assets/Recursos/Prin.jpg');
const LOGO_IMAGE = require('../assets/Recursos/Prin2.jpg');


export default function ImageBackgroundScreen(){

  const[isLoading, setIsLoading]= useState(true);

  useEffect(() => {
    const timer = setTimeout(() =>{
      setIsLoading(false);
    }, 3000);
    return()=> clearTimeout(timer);
  }, []);

  if (isLoading){
    return(
      <ImageBackground
      source={SPLASH_IMAGE}
      resizeMode="cover"
      imageStyle={styles.splashBackground}
      style={styles.splashBackground}
      >
        

      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <View style={styles.splashOverlay}>
      <Image source={LOGO_IMAGE} style={styles.logo} resizeMethod="contain"/>
      <Text style={styles.splashTitle}>Mi app</Text>
       <Text style={styles.splashSubtitle}>Cargando aplicación...</Text>
      </View>
      </ImageBackground>
    );
  }

  return(
    <ImageBackground
    source={MAIN_IMAGE}
    resizeMode="cover"
    imageStyle={styles.mainBackground}
    style={styles.mainBackground}>

      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <View style={styles.mainOverlay}>
        <Text style={styles.welcome}>¡Bienveniso a la app!</Text>
        <TouchableOpacity
         style={styles.button}
         onPress={()=> alert('Botón presionado')}>
          <Text style={styles.buttonText}>Empezar</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  splashBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImageStyle: {
    opacity: 0.85,
  },

  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)', 
    padding: 24,
    borderRadius: 12,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  splashTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  splashSubtitle: {
    color: '#dbeafe',
    marginTop: 8,
  },

  mainBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImageStyle: {
    opacity: 0.9,
  },
  mainOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)', 
    padding: 20,
    borderRadius: 12,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#61dafb',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: '700',
  },
});