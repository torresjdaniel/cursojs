
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
        return `Opción ${this.numero}: ${this.corte} ${this.tamanio} (Comen ${this.personas} personas) + ${this.salsas} salsas + ${this.pan} Kilos de figazas. Costo: ${this.precio}\$` 
    }
}

const opciones = [];

opciones.push(new Opcion(1, "PALETA", "CHICA", 10, 4300, 3, 6));
opciones.push(new Opcion(2, "PALETA", "GRANDE", 15, 4600, 3, 7));
opciones.push(new Opcion(3, "PERNIL", "REGULAR" , 25, 6500, 5, 11));

let nombre;
let seleccion;
let cantidad;
let precioFinal;

const ulOpciones = document.getElementById("opciones");
const formPresupuesto = document.getElementById("presupuesto");
const articleResumen = document.getElementById("resumen");
const selectOpcion = document.getElementById("opcion");

for (const opcion of opciones) {
    let li = document.createElement("li");
    li.innerHTML = opcion.menu();
    ulOpciones.appendChild(li);
    selectOpcion.innerHTML += `<option value="${opcion.numero}">Opción ${opcion.numero}</option>`;
}

formPresupuesto.addEventListener("submit", presupuesto);

function presupuesto(e){
    e.preventDefault();
    let formulario = e.target;
    let div = document.createElement("div");
    nombre = formulario.children[1].value;
    seleccion = parseInt(formulario.children[2].value);
    cantidad = parseInt(formulario.children[3].value);
    if (cantidad != 0 ) {
        precioFinal = opciones[seleccion - 1].precio * cantidad;
        div.innerHTML = `<h2>¡Hola ${nombre}!</h2>
                             <p>Este es el resumen de tu pedido:<br>
                                El costo de tu pedido es: ${precioFinal}$<br>
                                Elegiste ${cantidad} unidades:<br> 
                                ${opciones[seleccion - 1].menu()}</p>`;
    } else {
        precioFinal = 0;
        div.innerHTML = `<h2>¡Hola ${nombre}!</h2>
                             <p>El costo de tu pedido es: ${precioFinal}$. Porque no elegiste una cantidad.</p>`;
    }
    articleResumen.appendChild(div);
};