/**
 * VARIABLES 
 **/
// Constante
const n1 = 10
// Variables
let n2 = 50
var n3 = 40
let flag = false
const suma = n1 + n2 + n3
// Mostrar datos por consola
console.log("Suma: ", suma)

/**Estructura de datos*/
let numeros = [10, 20, 30, 40, 50, 60]
console.log(numeros)
// añadir elementos
numeros.push(70)
console.log(numeros)
// eliminar último elemento
numeros.pop()
// eliminar un elemento por su posicion
//numeros.pop(2)
console.log("numeros-> ", numeros)
// iterar numeros
for (let i = 0; i < numeros.length; i++) {
  console.log("numeros-> ", numeros[i])
}

// Objetos
let persona = {
  nombre: "Juliana",
  apellido: "Hernandez",
  edad: 28,
  telefonos: ['31234', '4567']
}
console.log(persona)