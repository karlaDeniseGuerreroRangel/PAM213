import { View, Text, FlatList, StyleSheet } from 'react-native'
import {useState} from 'react'

class Producto{
  constructor(id, titulo, descripcion, precio){
    this.id= id;
    this.titulo= titulo;
    this.descripcion= descripcion;
    this.precio= precio;
  }
}

export const productos2 = [
  new producto('1', 'Auriculares', 'Experimenta', 100),
  new producto('2', 'Libros', 'Experimenta', 100),
  new producto('3', 'Agua', 'Experimenta', 100),
  new producto('4', 'Sabritas', 'Experimenta', 100),
 
];

const FlatListScreen = () => {
  const[prodctList, setProductList] = useState(productos2);

  return (
    <View>
     <FlatList
     data={productList}
     keyExtractor={(item) => item.id}
     renderItem={({item}) =>( 
      <View>
        <Text>{item.titulo}</Text>
        <Text>{item.descripcion}</Text>
        <Text>{item.precio}</Text>
        <Text>Ver detalles</Text>
      </View>
     )} 
   />
     </View>
  )
}

//Estilos
const styles = StyleSheet.create({
    lista: {
      paddingVertical: 200
  
    },

    item: {
      padding: 15, // Espacio interno del item
      marginVertical: 8, // Separación vertical entre items
      marginHorizontal: 16, // Separación horizontal desde los bordes
      backgroundColor: '#f0f0f0', 
    }
});



export default FlatListScreen