/* Teniendo el objeto empresa, requiero mostrar por consola, el nombre de la empresa, la dirección completa, el nombre del empleado y ultimo desarrollo realizado por cada uno de ellos, además, requiero saber de que departamento son jefe cada uno */

/* El ejercicio deberá ser entregado con la metodología expuesta en el último video sobre repositorios. El código del ejercicio es EJ-01, cargado en una rama con el mismo nombre. El pull request deberá ser asignado al usuario eliasmaneiro quien hará las observaciones y aprobará su integración a la rama main siempre y cuando no hayan errores observables. */

const empresa = {
    nombre: "Tech Solutions",
    ubicacion: {
        pais: "España",
        ciudad: "Madrid",
        direccion: {
            calle: "Gran Vía",
            numero: 45,
            codigoPostal: "28013"
        }
    },
    empleados: [
        {
            nombre: "Ana",
            edad: 30,
            puesto: "Desarrolladora",
            habilidades: ["JavaScript", "React", "Node.js"],
            proyectos: [
                { nombre: "WebApp", año: 2023 },
                { nombre: "API REST", año: 2024 }
            ]
        },
        {
            nombre: "Luis",
            edad: 28,
            puesto: "Diseñador",
            habilidades: ["Photoshop", "Figma"],
            proyectos: [
                { nombre: "Rediseño UI", año: 2024 }
            ]
        }
    ],
    departamentos: [
        {
            nombre: "Desarrollo",
            jefe: "Ana",
            tecnologias: ["JavaScript", "Python"]
        },
        {
            nombre: "Diseño",
            jefe: "Luis",
            herramientas: ["Figma", "Sketch"]
        }
    ]
};

console.log(empresa.nombre,empresa.ubicacion.direccion) // se muestra el nombre de la empresa y su direccion
console.log(empresa.empleados[0].nombre,empresa.empleados[0].proyectos[1].nombre,empresa.departamentos[0].nombre) // se muesta el nombre del primer empleado, cual fue su ultimo proyecto y se indica de que departamento es jefa
console.log(empresa.empleados[1].nombre,empresa.empleados[1].proyectos[0].nombre,empresa.departamentos[1].nombre) // se muesta el nombre del segundo empleado, cual fue su ultimo proyecto y se indica de que departamento es jefe