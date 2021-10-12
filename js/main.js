const paletaChica = 4300;
const  paletaGrande = 4600;
const pernil = 6500;

let nombre;
let opcion;
let cantidad;
let precioFinal;
let opcion1 = "Opción 1: PALETA CHICA (Comen 10 personas) + 3 salsas y figazas. Costo: " + paletaChica + "$";
let opcion2 = "Opción 2: PALETA CHICA (Comen 15 personas) + 3 salsas y figazas. Costo: " + paletaGrande + "$";
let opcion3 = "Opción 3: PALETA CHICA (Comen 25 personas) + 5 salsas y figazas. Costo: " + pernil + "$";


nombre = prompt("¡Hola!, ¿Cómo es tu nombre?");

opcion = prompt(nombre + " te contamos acerca de nuestras opciones: \n" + opcion1 + "\n" + opcion2 + "\n" + opcion3 +
                "\n¿Cúal te gustaría elegir? (Ingresar solo el número de la opción)");
                                
console.log("Elegiste la opción: " + opcion);

cantidad = prompt("¿Qué cantidad queres de la opción elegida? (Ingresar solo números)");

console.log("Pediste " + cantidad + " de esa opción");

precioFinal = pedido(opcion, cantidad)

alert("El costo de tu pedido es: " + precioFinal + "$");
console.log("El costo de tu pedido es: " + precioFinal + "$");

function pedido(opcionElegida, cantidadElegida) {
    switch (opcionElegida) {
        case "1":
            return paletaChica * parseInt(cantidadElegida);
            break;
        case "2": 
            return paletaGrande * parseInt(cantidadElegida);
            break;
        case "3":
            return pernil * parseInt(cantidadElegida);
            break;
        default:
            return 0;
            break;    
    }
}
