
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

const opciones = [];


opciones.push(new Opcion(1, "PALETA", "CHICA", 10, 4300, 3, 2));
opciones.push(new Opcion(2, "PALETA", "GRANDE", 15, 4600, 3, 3));
opciones.push(new Opcion(3, "PERNIL", "REGULAR" , 25, 6500, 5, 4));

let nombre;
let seleccion; 
let cantidad;
let precioFinal;

const ulOpciones = document.getElementById("opciones");
const formPresupuesto = document.getElementById("presupuesto");
const articleResumen = document.getElementById("resumen");
const selectOpcion = document.getElementById("opcion");

selectOpcion.innerHTML = `<option>¡Elegí tu opción!</option>`;
// cargarPresupuesto();
pregunta();


for (const opcion of opciones) {
    let li = document.createElement("li");
    li.innerHTML = opcion.menu();
    ulOpciones.appendChild(li);  
}

formPresupuesto.addEventListener("submit", crearPresupuesto);
selectOpcion.addEventListener("focus", selectConfig);

function crearPresupuesto(e){
    articleResumen.innerHTML = "";
    e.preventDefault();
    nombre = formPresupuesto.children[1].value;
    seleccion = parseInt(formPresupuesto.children[2].value);
    cantidad = parseInt(formPresupuesto.children[3].value);
    crearPresupuestoUI()
    guardarPresupuesto();
    formPresupuesto.children[1].value = "";
    selectOpcion.innerHTML = `<option>¡Elegí tu opción!</option>`;
    formPresupuesto.children[3].value = "";

};

function crearPresupuestoUI(){
    let div = document.createElement("div");
    if (cantidad > 0 ) {
        precioFinal = opciones[seleccion - 1].precio * cantidad;
        div.innerHTML = `<h2>¡Hola ${nombre}! Este es el resumen de tu pedido:</h2>
                             <p>El costo de tu pedido es: ${precioFinal}$<br>
                                Elegiste ${cantidad} de:<br> 
                                ${opciones[seleccion - 1].menu()}</p>`;
    } else {
        precioFinal = 0;
        div.innerHTML = `<h2>¡Hola ${nombre}!</h2>
                             <p>El costo de tu pedido es: ${precioFinal}$. Porque no elegiste una cantidad.</p>`;
    }
    articleResumen.appendChild(div);    
}

function cargarPresupuestoUI(){
    let div = document.createElement("div");
    if (cantidad > 0 ) {
        div.innerHTML = `<h2>¡Hola ${nombre}! Este fue tu último pedido:</h2>
                             <p>El costo de tu pedido es: ${precioFinal}$<br>
                                Elegiste ${cantidad} de:<br> 
                                ${opciones[seleccion - 1].menu()}</p>`;
    } else {
        precioFinal = 0;
        div.innerHTML = `<h2>¡Hola ${nombre}! Este fue tu último pedido:</h2>
                             <p>El costo de tu pedido es: ${precioFinal}$. Porque no elegiste una cantidad.</p>`;
    }
    articleResumen.appendChild(div);    
}

function selectConfig(){
    selectOpcion.innerHTML = "";
    for (const opcion of opciones) {
        selectOpcion.innerHTML += `<option value="${opcion.numero}">Opción ${opcion.numero}</option>`;  
    }
}

function guardarPresupuesto(){
    const presupuestoJSON = JSON.stringify(new Presupuesto(nombre, seleccion, cantidad, precioFinal));
    localStorage.setItem("presupuesto", presupuestoJSON);
}

function cargarPresupuesto(){
    const presupuesto = JSON.parse(localStorage.getItem("presupuesto"));
    formPresupuesto.children[1].value = presupuesto.nombreElegido;
    selectOpcion.innerHTML = presupuesto.opcionElegida;
    formPresupuesto.children[3].value = presupuesto.cantidadElegida;
}

function pregunta(){
    if (localStorage.length > 0){
        const presupuesto = JSON.parse(localStorage.getItem("presupuesto"));
        nombre = presupuesto.nombreElegido;
        seleccion = parseInt(presupuesto.opcionElegida);
        cantidad = parseInt(presupuesto.cantidadElegida);
        precioFinal = parseInt(presupuesto.precioFinalElegido);
        cargarPresupuestoUI();          
    }  
}