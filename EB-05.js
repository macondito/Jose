// Cada ejercicio deberá ser respondido con true o false, o con una breve explicación de por qué se cumple o no la condición.
// El código del ejercicio es EB-05
// Deberá ser completado y cargado al repositorio con el estándar establecido.

/*
Ejercicios de operadores lógicos y de comparación
*/

// 1. ¿5 es mayor que 3?
// 5 > 3 true

// 2. ¿10 es igual a '10' (comparación débil)?
// 10 == '10' true

// 3. ¿10 es estrictamente igual a '10'?
// 10 === '10' false

// 4. ¿7 es menor o igual a 7?
// 7 <= 7 true

// 5. ¿8 no es igual a 5?
// 8 != 5 true

// 6. ¿4 es mayor que 2 y menor que 10?
// 4 > 2 && 4 < 10  true

// 7. ¿6 es menor que 3 o mayor que 2?
// 6 < 3 || 6 > 2 true

// 8. ¿No es cierto que 9 es igual a 9?
// !(9 === 9) false

// 9. ¿'a' es diferente de 'b'?
// 'a' !== 'b' true

// 10. ¿20 dividido por 2 es igual a 10?
// 20 / 2 === 10 true

// 11. ¿El número 0 es falso en lógica?
// !0 true

// 12. ¿El string vacío es falso en lógica?
// !"" true

// 13. ¿null es igual a undefined (comparación débil)?
// null == undefined true

// 14. ¿null es estrictamente igual a undefined?
// null === undefined false

// 15. ¿5 es mayor que 3 y menor que 10?
// 5 > 3 && 5 < 10 true


/*
Ejercicios usando if
*/

// 1. Verifica si un número es positivo
const num1 = 7;
if (num1 > 0) {
    // ¿Entra a la condición? // Responder aquí: si 
} console.log(num1 > 0)

// 2. Verifica si dos valores son iguales
const a = 5, b = 5;
if (a === b) {
    // ¿Entra a la condición? // Responder aquí: si 
} console.log(a === b)

// 3. Verifica si un número es par
const num2 = 8;
if (num2 % 2 === 0) {
    // ¿Entra a la condición? // Responder aquí: si 
} console.log(num2 % 2 === 0)

// 4. Verifica si una persona es mayor de edad
const edad = 18;
if (edad >= 18) {
    // ¿Entra a la condición? // Responder aquí: si 
} console.log(edad >= 18)

// 5. Verifica si una cadena no está vacía
const texto = "Hola";
if (texto !== "") {
    // ¿Entra a la condición? // Responder aquí: si 
} console.log(texto !== "")