// Deseo convertir a objeto la siguientes descripcion
/* Un sistema contiene un conjunto de usuarios, los cuales podrian ser administradores, empleados, clientes y invitados. Cada uno de estos usuarios contienen un nombre, edad y fecha de nacimiento. Así mismo el sistema contiene un apartado de configuración donde estaríamos almacenando el tema (oscuro o claro), idioma, y versión */
// La descripción del sistema debe estar vaciada en un objeto

const administradores = { name: "jose", edad: "29", fechaDeNacimiento: "04/08/1995"}; 
const empleados = { name: "jose", edad: "29", fechaDeNacimiento: "04/08/1995"};
const invitados = { name: "jose", edad: "29", fechaDeNacimiento: "04/08/1995"};
const color = "negro"
const idioma = "español"
const version = 0.1

const sistema = { administradores, empleados, invitados, color, idioma, version};

// se crearon un conjunto de objetos para dentro del objeto sistema.gi
console.log(sistema)