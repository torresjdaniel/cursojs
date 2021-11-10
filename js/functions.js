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
    presupuestos.push(new Presupuesto(nombre, seleccion, cantidad, precioFinal));
    const presupuestoJSON = JSON.stringify(presupuestos);
    localStorage.setItem(clave, presupuestoJSON);
}

function cargarPresupuesto(clave, contenedor){
    if (localStorage.length > 0){
        let presupuestoss = JSON.parse(localStorage.getItem(clave));
        for (const presupuesto of presupuestoss) {
            presupuestos.push(presupuesto);
        }
        let indice = presupuestos.length - 1
        nombre = presupuestos[indice].nombreElegido;
        seleccion = parseInt(presupuestos[indice].opcionElegida);
        cantidad = parseInt(presupuestos[indice].cantidadElegida);
        precioFinal = parseInt(presupuestos[indice].precioFinalElegido);
        cargarPresupuestoUI(contenedor);          
    }  
}