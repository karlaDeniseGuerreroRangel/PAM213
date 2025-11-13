 import React, {useState} from "react";
 import{Text, StyleSheet, View, Button, ActivityIndicator} from 'react-native';
  
 export default function ActivityIndicatorScreen(){
   const[cargando, setCargando]= useState(false);
   const[mostrarContenido, setmostrarContenido]= useState(false);
   const[mensajePrompt, setmensajePrompt]= useState(false);
   const manejarCarga=()=>{
    setCargando(true);
    setmostrarContenido(false);
    setmensajePrompt('cargando... oir favor espere.');
    setTimeout(()=>{
    setCargando(false);
    setmostrarContenido(false);
    setmensajePrompt('Accion completada');


    },5000);

   }
   const cancelarCarga=()=>{
    setCargando(false);
    setmostrarContenido(false);
    setmensajePrompt('Accion cancelada');
  };
  return(
    <View style={StyleSheet.contenedor}>
      <Text style={styles.titulo}>practica: ActivityIndicator</Text>
      <Text style={styles.prompt}>{mensajePrompt}</Text>

       <View style={StyleSheet.botones}>
        <Button color="#fb5c97ff" title="Accion" onPress={manejarcarga}></Button>
         <View style={{width: 10}}>
          <Button color="#ada0a5ff" title="Cancelar" onPress={cancelarcarga}></Button>
       </View>
       </View>
     {cargando&&(
      <ActivityIndicatorScreen
      size="large"
      color="#7c0f39ff"
      style={styles.indicador}
      />
     )}

    </View>
  );
 }
 //Estilos
 const styles= StyleSheet.create({
  contenedor:{
    flex:1, 
    justifyContent: 'center',
    padding: 20, 
    backgroundColor:"#ffffff",
  },
  titulo:{
    fontSize:24, 
    marginBottom: 20, 
    fontWeight: 'bold',
    color: "#00000f",
  },
  prompt:{
    fontSize: 16, 
    marginBottom: 20,
    color: "#2e2ed1ff",
  },
  botones:{
    flexDirection: 'row',
    marginBottom: 20,
  },
  indicador:{
    marginVertical: 20,
  },
  contenido:{
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    fontWeight: '600',

  },

});