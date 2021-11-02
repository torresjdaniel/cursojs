function crearPresupuesto(e){
    articleResumen.innerHTML = "";
    e.preventDefault();
    nombre = formPresupuesto.children[1].value;
    seleccion = parseInt(formPresupuesto.children[2].value);
    cantidad = parseInt(formPresupuesto.children[3].value);
    crearPresupuestoUI(articleResumen)
    guardarPresupuesto("presupuesto");
    formPresupuesto.children[1].value = "";
    selectOpcion.innerHTML = `<option>¡Elegí tu opción!</option>`;
    formPresupuesto.children[3].value = "";

};

function crearPresupuestoUI(contenedor){
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
    contenedor.appendChild(div);    
}

function cargarPresupuestoUI(contenedor){
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
    contenedor.appendChild(div);    
}

function selectConfig(select){
    select.innerHTML = "";
    for (const opcion of opciones) {
        select.innerHTML += `<option value="${opcion.numero}">Opción ${opcion.numero}</option>`;  
    }
}

function guardarPresupuesto(clave){
    const presupuestoJSON = JSON.stringify(new Presupuesto(nombre, seleccion, cantidad, precioFinal));
    localStorage.setItem(clave, presupuestoJSON);
}

function cargarPresupuesto(clave, contenedor){
    if (localStorage.length > 0){
        const presupuesto = JSON.parse(localStorage.getItem(clave));
        nombre = presupuesto.nombreElegido;
        seleccion = parseInt(presupuesto.opcionElegida);
        cantidad = parseInt(presupuesto.cantidadElegida);
        precioFinal = parseInt(presupuesto.precioFinalElegido);
        cargarPresupuestoUI(contenedor);          
    }  
}