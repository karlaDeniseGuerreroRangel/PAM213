
//1. import: Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
//2. Main:Zona de componentes 
export default function App() {
   
  const [Contador, setContador]=useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.Texto}> Contador:  </Text> 
      <Text  style={styles.Texto2}> {Contador} </Text> 

      <View style={styles.botonesContainer} > 
      
        
      <Button  title="Agregar" onPress={()=>setContador(Contador+1)} color="#3c9b38ff"/>
      <Button  title=" Restar" onPress={()=>setContador(Contador-1)}color="#c70e8fff"/>
      <Button  title=" Reiniciar" onPress={()=>setContador(0)}color="#89acc9ff"/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
//3. Estilos: Zona de estetica y  posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4eaf0ff',
    alignItems: 'center',
    justifyContent: 'center',
  }, Texto:{
       color:'#2d939fff',
       fontSize: 30,
       fontFamily:'Times New Roman',
       fontWeight:'bold',
       fontStyle:'italic',
       textDecorationLine:'line-through',
  },
   Texto2:{
       color:'#b2bc21ff',
       fontSize: 35,
       fontFamily:'Courier',
       fontWeight:'700',
       fontStyle:'normal',
       textDecorationLine:'underLine',
  },
  botonesContainer:{
    marginTop: 15,
    flexDirection:'row',
     alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
