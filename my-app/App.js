
//1. import: Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
//2. Main:Zona de componentes 
export default function App() {
   
  const [Contador, setContador]=useState(0);

  return (
    <View style={styles.container}>
      <Text> Contador: {Contador} </Text> 
      <Button title="Agregar" onPress={()=>setContador(Contador+1)} color="#3c9b38ff"/>
        <Button title=" Restar" onPress={()=>setContador(Contador-1)}color="#c70e8fff"/>
          <Button title=" Reiniciar" onPress={()=>setContador(0)}color="#89acc9ff"/>
      <StatusBar style="auto" />
    </View>
  );
}
//3. Estilos: Zona de estetica y  posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
