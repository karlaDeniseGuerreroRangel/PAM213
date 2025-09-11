document.write("<h1>Hola Mundo</h1>");
console.log("Mensaje en consola")
console.log(12)
console.log([8,9,10,11])
console.log({"Codigo":121323, "nombre":"karla"})

 const PI = 3.1416;//Valor constante
 let nombre = "Karla";
 let apellido = " Guerrero";
 nombre_completo = nombre + apellido;
console.log(nombre)
console.log(apellido)
console.log(nombre_completo)

let num_1 = 15;
let num_2 = 50;

let res1 = num_1 + num_2;
let res2 = num_1 - num_2;
let res3 = num_1 / num_2;
let res4 = num_1 * num_2;
let res5 = num_1 < num_2;
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)

let password = "12345";

let input = "98765";

let res6 = password == input;
//es condicional con if else y switch
if (res6 == true){
    console.log("Acceso concedido")
}else if (password == "12345") {
    console.log("Entrada especial")
} 
else {
    console.log("Acceso denegado")
}
//el switch es otra forma de hacer condicionales con casos
switch (password) {
    case true:
        console.log("Acceso concedido");
        break;
    case "12345":
        console.log("Entrada especial");
        break;
    default:
        console.log("Acceso denegado");
}

let i = 30;
while (i > 0) {
    console.log(i);
    i--;
}

let Comida = ["Tacos", "Aguachile", "Pollo asado", "Carne asada"];
for (let i = 0; i < Comida.length; i++) {
    console.log(Comida[i]);
}

for (let j = 30; j > 0; j--) {
    console.log( j);
}
// while y for son bucles para hacer repeticiones

// funciones sirven para reutilizar codigo
// funciones reciben parametros y retornan valores

let nomb
function saludar(nomb) {
    console.log("hola "+ nomb );
    return nomb;
}
saludar('Denise');
saludar('Paulina');

function sumar(n1, n2) {
    res7 = n1 + n2;
    console.log("la suma de "+n1+"+"+n2+"=" + res7 );
    return res7;
}
sumar(10, 20);
sumar(30, 50);