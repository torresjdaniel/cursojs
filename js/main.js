
class Opcion{
    constructor(numero, corte, tamanio, personas, precio, salsas) {
        this.numero = numero;
        this.corte = corte;
        this.tamanio = tamanio;
        this.personas = personas;
        this.precio = precio;
        this.salsas = salsas;
    }
    menu(){
        return "Opción "+this.numero+": "+this.corte+" "+this.tamanio+" (Comen " + this.personas + " personas) + "+this.salsas+" salsas y figazas. Costo: "+this.precio+"$" 
    }
}

const opcion1 = new Opcion(1, "PALETA", "CHICA", 10, 4300, 3);
const opcion2 = new Opcion(2, "PALETA", "GRANDE", 15, 4600, 3);
const opcion3 = new Opcion(3, "PERNIL", "" , 25, 6500, 5);

let nombre;
let opcion;
let cantidad;
let precioFinal;

console.log(opcion1.menu());
console.log(opcion2.menu());
console.log(opcion3.menu());

nombre = prompt("¡Hola!, ¿Cómo es tu nombre?");

opcion = prompt(nombre + " te contamos acerca de nuestras opciones: \n" + opcion1.menu() + "\n" + opcion2.menu() + "\n" + opcion3.menu() +
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
            return opcion1.precio * parseInt(cantidadElegida);
            break;
        case "2": 
            return opcion2.precio * parseInt(cantidadElegida);
            break;
        case "3":
            return opcion3.precio * parseInt(cantidadElegida);
            break;
        default:
            return 0;
            break;    
    }
}
