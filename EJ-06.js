/*
    Leer las siguientes expresiones y determinar el resultado o respuesta para cada una de ellas. Las respuesta deberán ser escritas inmediantamente despues de RESPUESTA:

    Código de ejercicio: EJ-06.
    Forma de entrega: Se hará mediante el estándar establecido en clases (pull requests).
*/

// 1. Verificar si un número es positivo
const num1 = 5;
if (num1 > 0) {
    // El número es positivo
}
// RESPUESTA: Si se cumple la condicion

// 2. Verificar si un número es negativo o cero
const num2 = -3;
if (num2 < 0) {
    // Negativo
} else {
    // Cero o positivo
}
// RESPUESTA: El numero es negativo

// 3. Comprobar si una persona es mayor de edad
const edad = 18;
if (edad >= 18) {
    // Mayor de edad
} else {
    // Menor de edad
}
// RESPUESTA: La persona es mayor de edad

// 4. Determinar si un número es par o impar
const num3 = 7;
if (num3 % 2 === 0) {
    // Par
} else {
    // Impar
}
// RESPUESTA: es impar

// 5. Uso de else if para calificaciones
const nota = 85;
if (nota >= 90) {
    // Excelente
} else if (nota >= 70) {
    // Aprobado
} else {
    // Reprobado
}
// RESPUESTA: La calificacion es aprobado

// 6. Verificar si una variable está definida
const variable = undefined;
if (typeof variable === "undefined") {
    // No definida
} else {
    // Definida
} 
// RESPUESTA: la variable esta defina

// 7. Uso de variables en distintos scopes
const x = 10;
if (x > 5) {
    const y = x * 2;
    // y dentro del if: y
}
// el valor de y es:  y
// RESPUESTA: si cumple la condicion

// 8. Comprobar si un string está vacío
const texto = "";
if (texto === "") {
    // Texto vacío
} else {
    // Texto no vacío
}
// RESPUESTA: si esta vacio

// 9. Verificar si un número está en un rango
const num4 = 15;
if (num4 >= 10 && num4 <= 20) {
    // En rango
} else {
    // Fuera de rango
}
// RESPUESTA: si esta en el tango

// 10. Uso de else if para días de la semana
const dia = 3;
if (dia === 1) {
    // Lunes
} else if (dia === 2) {
    // Martes
} else if (dia === 3) {
    // Miércoles
} else {
    // Otro día
}
// RESPUESTA:  esta en el dia miercoles

// 11. Verificar si un año es bisiesto
const anio = 2024;
if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    // Bisiesto
} else {
    // No bisiesto
}
// RESPUESTA: si es bisiesto

// 12. Verifique si una variable está en el scope correcto. Indique donde está el error
const v1 = 5;
if (v1 > 0) {
    const v2 = 10;
    // v1 y v2 están en el scope correcto
} else {
    // v2 v2
}
// RESPUESTA: ???

// 13. Verificar si un usuario tiene permisos
const esAdmin = false;
const esEditor = true;
if (esAdmin) {
    // Acceso total
} else if (esEditor) {
    // Acceso limitado
} else {
    // Sin acceso
}
// RESPUESTA: el usuario tiene acceso limitado

// 14. Determinar el mayor de dos números
const a = 8, b = 12;
if (a > b) {
    // a es mayor
} else if (a < b) {
    // b es mayor
} else {
    // Son iguales
}
// RESPUESTA: b es mayor que a

// 15. Uso de if anidados
const edad2 = 20;
if (edad2 >= 18) {
    if (edad2 < 65) {
        // Adulto
    } else {
        // Adulto mayor
    }
} else {
    // Menor de edad
}
// RESPUESTA:  es adulto

// 16. Verificar si un número es múltiplo de 3 y 5
const num5 = 15;
if (num5 % 3 === 0 && num5 % 5 === 0) {
    // Múltiplo de 3 y 5
} else {
    // No es múltiplo de 3 y 5
}
// RESPUESTA: Si es multiplo de 3 y 5

// 17. Uso de if para asignar valores a variables
let resultado;
const valor = 7;
if (valor > 10) {
    resultado = "Mayor que 10";
} else {
    resultado = "10 o menor";
}
// RESPUESTA: el resultado es 10 o menor

// 18. Verificar si una persona puede votar
const edad3 = 16;
const nacionalidad = "MX";
if (edad3 >= 18 && nacionalidad === "MX") {
    // Puede votar
} else {
    // No puede votar
}
// RESPUESTA: no puede votar

// 19. Uso de if para comprobar contraseñas
const password = "1234";
if (password === "secreto") {
    // Acceso concedido
} else {
    // Acceso denegado
}
// RESPUESTA: el acceso es denegado

// 20. Uso de if para comprobar si un array está vacío
const arr = [];
if (arr.length === 0) {
    // Array vacío
} else {
    // Array con elementos
}
// RESPUESTA: El array esta vacio

/*
21. Genere un programa que reciba la edad y el país de una persona, y determine si puede conducir un automóvil.
Las reglas son:
- En México, la edad mínima para conducir es 18 años.
- En Estados Unidos, la edad mínima es 16 años.
- En otros países, la edad mínima es 21 años.
Utiliza if, else if y else, y asegúrate de declarar variables en los scopes adecuados para mostrar mensajes personalizados según el caso.

En el caso de la edad, si es menor a la edad mínima, mostrar un mensaje indicando que no puede conducir.
Si es igual o mayor, mostrar un mensaje indicando que puede conducir.

Los valores como edad, país, etc, serán asignados directamente a variables en el código.
*/

// RESPUESTA: 

const edadP = 66;

const nacionalmx = "Mx";
const nacionaleeuu ="Usa";
const nacionalotros = "Otros";

if (edadP >= 16) {
    if (nacionalmx === "Mx") {
   if (nacionaleeuu === "Usa") {
     if (nacionalotros === "Otros"){
        console.log("si puede conducir")
    }
  }
}} else { console.log("no pude conducir");

}

