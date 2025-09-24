const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

// Filtramos productos con precio > 1000
const filtrados = productos.filter(({ precio }) => precio > 1000);

// Creamos nuevo arreglo con solo los nombres
const nombres = filtrados.map(({ nombre }) => nombre);

// Imprimimos resultados
console.log("Productos filtrados:", filtrados);
console.log("Nombres de productos caros:", nombres);