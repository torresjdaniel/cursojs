
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
        return `Opción ${this.numero}: ${this.corte} ${this.tamanio} (Comen ${this.personas} personas) + ${this.salsas} salsas y figazas. Costo: ${this.precio}\$` 
    }
}

const opciones = [];

opciones.push(new Opcion(1, "PALETA", "CHICA", 10, 4300, 3));
opciones.push(new Opcion(2, "PALETA", "GRANDE", 15, 4600, 3));
opciones.push(new Opcion(3, "PERNIL", "REGULAR" , 25, 6500, 5));

let nombre;
let seleccion;
let cantidad;
let precioFinal;
let cartilla = "";
let resumen = document.getElementById("article");

for (const opcion of opciones ){
    cartilla += `${opcion.menu()}
`;
}

console.log(`Cartilla: 
${cartilla}`);

nombre = prompt("¡Hola!, ¿Cómo es tu nombre?");

seleccion =  parseInt( prompt(`${nombre} te contamos acerca de nuestras opciones:
${cartilla}¿Cúal te gustaría elegir? (Ingresar solo el número de la opción)`));
                                
console.log(`Elegiste la opción: ${seleccion}`);

cantidad = parseInt(prompt("¿Qué cantidad queres de la opción elegida? (Ingresar solo números)"));

console.log(`Pediste ${cantidad} de esa opción`);

if (seleccion <= opciones.length && seleccion > 0 ) {
    precioFinal = opciones[seleccion - 1].precio * cantidad;
    resumen.innerHTML = `<h2>¡Hola ${nombre}!</h2>
                         <p>Este es el resumen de tu pedido:<br>
                            El costo de tu pedido es: ${precioFinal}$<br>
                            Elegiste ${cantidad} unidades de:<br> 
                            ${opciones[seleccion - 1].menu()}</p>`;
    console.log(`El costo de tu pedido es: ${precioFinal}$. Resumen:
${seleccion} de ${opciones[seleccion - 1].menu()}`);
} else {
    precioFinal = 0;
    resumen.innerHTML = `<h2>¡Hola ${nombre}!</h2>
                         <p>El costo de tu pedido es: ${precioFinal}$. Porque no contamos con el número de opción que elegiste.</p>`;
    console.log(`El costo de tu pedido es: ${precioFinal}$. Porque no contamos con el número de opción que elegiste.`);
};

 
