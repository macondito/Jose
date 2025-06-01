// Reemplazo de valores de propiedades de un objeto (no usar let)
// Definición de un objeto con propiedades
const objeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

objeto.edad = 31; // Cambia la edad a 31

// Uso de constantes en un objeto
const objetoConstantes = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// Armar un objeto a partir de un enunciado
// El nombre de la persona es Juan, tiene 30 años y vive en Madrid, además tiene un auto de marca toyota, modelo corolla, año 2020 y color rojo

const persona = { // Abro llave persona
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    auto: { // Abro llave auto
        marca: "Toyota",
        modelo: "Corolla",
        año: 2020,
        color: "rojo",
        puertas: {  // Abro llave puertas
            delanteras: 2,
            traseras: 2
        } // Cierro llave puertas
    } // Cierro llave auto
}; // Cierro llave persona

// console.log(persona.auto["año"]);


// Acceder a cualquiera de las propiedades del objeto
// console.log('Accediendo como propiedad: ', objeto.nombre); // Juan
// console.log('Accediendo como índice: ', objeto["nombre"]); // Juan

// Los Arrays son objetos a su vez que un tipo de dato

const diffConArray = {
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
};

// console.log(diffConArray["dos"]); // 2

const array = [1, 2, 3, 4, 5, "casa", true, null, undefined, { nombre: "Juan", edad: 30 }, [1, 2, 3]];

const nombre = array[9].nombre; // Accedo al objeto dentro del array y luego a la propiedad nombre

const obj = {
    9: {
        nombre: "Juan", // nivel 2
        edad: 30
    },
    nueve: {
        nombre: "Pedro", // nivel 2
        edad: 25
    },
}
console.log(obj[9].nombre); // Accedo al objeto dentro del array y luego a la propiedad nombre
console.log(obj["nueve"].nombre); // Accedo al objeto dentro del array y luego a la propiedad nombre

// const usuarios = [ // Abro corchetes usuarios
//     { tipoUsuario: "administrativo", nombre: "Juan" }, // indice 0
//     { tipoUsuario: "contable", nombre: "Maria" }, // indice 1
// ] // Cierro corchetes usuarios

// const sistema = { // Abro llave sistema
//     usuarios // Utilizo la variable usuarios que contiene un array de objetos que describen a los usuarios
// }   // Cierro llave sistema

// console.log(sistema.usuarios[0].nombre);

// anidamiento

const a = {
    text: "hola",
    b: { // 1 nivel
        text: "mundo", // 2 nivel,
        c: {
            text: "!!!" // 3 nivel
        }
    }
};
