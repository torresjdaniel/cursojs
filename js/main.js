
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
    console.log(opcion.menu());

const ordenPrecio = opciones.sort(function (a,b){
     
    if(a.precio < b.precio){
            return 1;
        }
        if(a.precio > b.precio){
            return -1;
        }
        return 0;
    });

console.log(ordenPrecio);

nombre = prompt("¡Hola!, ¿Cómo es tu nombre?");

for (const orden of ordenPrecio)
    alert(nombre+" estos son nuestros precios de mayor a menor precio: " + orden.precio +"$");
