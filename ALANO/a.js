const persona = {
    nombre:"Alan Aguilar",
    edad:37,
    direccion: {
        ciudad:"Qro",
        pais:"México"
    }
};

const {nombre, edad, direccion : {ciudad, pais}} = persona;

console.log(persona)

console.log("Me llamo " + nombre + ", " + "tengo " + edad + " años y vivo en "+ ciudad + " en " + pais)