// screens/detalle.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Detalle({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalles Usuario</Text>
      <Text style={styles.subtitle}>Usando Navegación Stack</Text>
      
      {/* Botón para regresar a la pantalla anterior del Stack (Profile) */}
      <Button 
        title="Regresar a Perfil"
        onPress={() => navigation.goBack()}
        color="#007BFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: 'gray',
  },
});