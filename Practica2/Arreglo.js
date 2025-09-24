const personas = [
  { nombre: "Ana", edad: 18 },
  { nombre: "Karla", edad: 19 },
  { nombre: "Dulce", edad: 18 }
];

const personaKarla = personas.find(persona => persona.nombre === "Karla");
console.log("Persona encontrada:", personaKarla);

console.log("Lista de personas:");
personas.forEach(({ nombre, edad }) => {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
});

const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("Suma total de las edades:", totalEdades);
