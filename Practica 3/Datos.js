function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        nombre: "Karla Rangel",
        edad: 19,
      });
    }, 2000); 
  });
}


async function mostrarDatos() {
  console.log("Obteniendo datos...");
  const datos = await obtenerDatos();
  console.log("Datos recibidos:", datos);
}


mostrarDatos();
