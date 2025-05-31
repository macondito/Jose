// 1. Crear un array de 5 números y mostrarlo por consola.
const array = [1,2,3,4,5]
console.log(array) //mostrar los valores del array por la consola
// 2. Acceder al primer elemento del array antes creado.
console.log(array[0]) // Acceder al primer elemento del array 
// 3. Acceder al último elemento del array antes creado.
console.log(array[4]) // Acceder al último elemento del array
// 4. Cambiar el valor del segundo elemento del array antes creado.
array [1]=99 
console.log(array[1]) //Cambiar el valor del segundo elemento a 99
// 5. Crear un array de strings con nombres de frutas y mostrar el tercero.
const frutas = ["pera", "mango", "limon"]
console.log(frutas[2]) // Mostrar el tercer elemento del array de frutas: "limon"
// 6. Añadir un elemento al final de un array.
frutas.push =  ("manzana")
console.log(frutas) // Mostrar el tercer elemento del array de frutas: "limon"
// 7. Eliminar el primer elemento de un array.
frutas.shift()
console.log(frutas) // Eliminar el primer elemento ("pera")
// 8. Crear una matriz (array de arrays) de 2x2 y mostrarla.
const matriz = [
    [1,2],
    [3,4]
];
console.log(matriz) //creacion de una matriz 2x2

// 9. Acceder al elemento en la fila 2, columna 1 de la matriz antes creada.
console.log(matriz[1][0]) // Acceder al elemento en la fila 2, columna 1 a travez del cosole
// 10. Cambiar el valor de la posición [0][1] de la matriz a 99.
matriz[0][1] = 99
console.log(matriz) // Cambiar el valor de [0][1] a 99 y mostrar la matriz actualizada