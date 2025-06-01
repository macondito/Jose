/*

Un usuario requiere conocer el total del mercado realizado. Los productos obtenidos son:

1kg de arroz = 1$
1kg de harina = 1.5$
2kg de carne = 7$
3kg de tomate = 3$

El usuario, tambien conocer el costo por kg de cada uno de los productos.
En la tienda, si es tu cumpleaños hacen una rebaja del 10% del total.

El ejercicio será cargado a git mediante el estándar de pull request y su código es EJ-07

*/ 

const productos = [
  { nombre: 'arroz', precio: 1, cantidad: 1 },    // 1kg de arroz = 1$
  { nombre: 'harina', precio: 1.5, cantidad: 1 }, // 1kg de harina = 1.5$
  { nombre: 'carne', precio: 7, cantidad: 2 },    // 2kg de carne = 7$
  { nombre: 'tomate', precio: 3, cantidad: 3 }    // 3kg de tomate = 3$
];

const precioporktomate = productos[3].precio / productos[3].cantidad; // Precio por kg de tomate = 1$
const precioporkgarroz = productos[0].precio / productos[0].cantidad; // Precio por kg de arroz = 1$
const precioporkgharina = productos[1].precio / productos[1].cantidad; // Precio por kg de harina = 1.5$
const precioporkgcarne = productos[2].precio / productos[2].cantidad; // Precio por kg de carne = 3.5$
const total = productos[0].precio + productos[1].precio + productos[2].precio + productos[3].precio; //total de la compra = 12$
const descuento = total * 0.1; // descuento si es tu dia de cumpleaños

console.log("precio por kilo del arrzoz es",precioporkgarroz, "$");
console.log("precio por kilo del harina es",precioporkgharina, "$");
console.log("precio por kilo del carne es",precioporkgcarne, "$"),
console.log("precio por kilo del tomate es",precioporktomate, "$"),
    
console.log("Total de la compra",total, "$"),
console.log("si es tu cumpleaños tienes un descuento de",descuento, "$");
