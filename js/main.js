
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



const opciones = [];

opciones.push(new Opcion(1, "PALETA", "CHICA", 10, 4300, 3));
opciones.push(new Opcion(2, "PALETA", "GRANDE", 15, 4600, 3));
opciones.push(new Opcion(3, "PERNIL", "" , 25, 6500, 5));

let nombre;
let seleccion;
let cantidad;
let precioFinal;

for (const opcion of opciones )
    console.log(opcion.menu())

nombre = prompt("¡Hola!, ¿Cómo es tu nombre?");

seleccion = prompt(nombre + " te contamos acerca de nuestras opciones: \n" + opciones[0].menu() + "\n" + opciones[1].menu() + "\n" + opciones[2].menu() +
                "\n¿Cúal te gustaría elegir? (Ingresar solo el número de la opción)");
                                
console.log("Elegiste la opción: " + seleccion);

cantidad = prompt("¿Qué cantidad queres de la opción elegida? (Ingresar solo números)");

console.log("Pediste " + cantidad + " de esa opción");

precioFinal = pedido(seleccion, cantidad)

alert("El costo de tu pedido es: " + precioFinal + "$");
console.log("El costo de tu pedido es: " + precioFinal + "$");


function pedido(opcionElegida, cantidadElegida) {
    switch (opcionElegida) {
        case "1":
            return opciones[0].precio * parseInt(cantidadElegida);
            break;
        case "2": 
            return opciones[1].precio * parseInt(cantidadElegida);
            break;
        case "3":
            return opciones[2].precio * parseInt(cantidadElegida);
            break;
        default:
            return 0;
            break;    
    }
}
