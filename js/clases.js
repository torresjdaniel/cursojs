
class Opcion{
    constructor(numero, corte, tamanio, personas, precio, salsas, pan) {
        this.numero = numero;
        this.corte = corte;
        this.tamanio = tamanio;
        this.personas = personas;
        this.precio = precio;
        this.salsas = salsas;
        this.pan = pan;
    }
    menu(){
        return `Opción ${this.numero}: ${this.corte} ${this.tamanio} (Comen ${this.personas} personas) + ${this.salsas} salsas + ${this.pan} Kilos de figazas. Costo: ${this.precio}$` 
    }
    
}

class Presupuesto{
    constructor(nombreElegido, opcionElegida, cantidadElegida, precioFinalElegido){
        this.nombreElegido = nombreElegido;
        this.opcionElegida = opcionElegida;
        this.cantidadElegida = cantidadElegida;
        this.precioFinalElegido = precioFinalElegido;
    }
}


// class Pedido{
//     constructor(nombre, opcionPedida, cantidadPedida, precioFinal, email, cel){
//         this.nombre = nombre;
//         this.opcionPedida = opcionPedida;
//         this.cantidadPedida = cantidadPedida;
//         this.precioFinal = precioFinal;
//         this.email = email;
//         this.cel = cel;
//     }
// }