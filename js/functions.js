function crearPresupuesto(e){
    e.preventDefault();
    nombre = divPresupuesto.children[0].value;
    seleccion = parseInt(divPresupuesto.children[1].value);
    cantidad = parseInt(divPresupuesto.children[2].value);
    crearPresupuestoUI(articleResumen)
    guardarPresupuesto("presupuesto");
    divPresupuesto.children[0].value = "";
    selectOpcion.innerHTML = `<option>¡Elegí tu opción!</option>`;
    selectCantidad.innerHTML = `<option>Cantidad</option>`;
};

function crearPresupuestoUI(contenedor) {
    formPresupuesto.children[2].value = "Hacer otro presupuesto"
    contenedor.innerHTML = "";
    let div = document.createElement("div");
    div.id = "divResumen";
    precioFinal = opciones[seleccion - 1].precio * cantidad; 
    div.innerHTML = `<h2>¡Hola ${nombre}! Este es el resumen de tu pedido:</h2>
                         <p>El costo de tu pedido es: ${precioFinal}$<br>
                             Elegiste ${cantidad} ${cantidad == 1 ? "unidad" : "unidades" } de la opción ${seleccion}, que incluye:<br> 
                             ${opciones[seleccion - 1].menu()}
                         </p>`;
    contenedor.appendChild(div);
    $(div).append('<button class="botones" data-bs-toggle="modal" data-bs-target="#modalPedido">Hacer pedido</button>');
    $("#divResumen").fadeIn(1500);
}

function cargarPresupuestoUI(contenedor){
    formPresupuesto.children[2].value = "Hacer otro presupuesto"
    contenedor.innerHTML = "";
    let div = document.createElement("div");
    div.id = "divResumen";
    div.innerHTML = `<h2>¡Hola ${nombre}! Este es el resumen de tu último presupuesto:</h2>
                         <p>El costo de tu pedido es: ${precioFinal}$<br>
                             Elegiste ${cantidad} ${cantidad == 1 ? "unidad" : "unidades" } de la opción ${seleccion}, que incluye:<br> 
                             ${opciones[seleccion - 1].menu()}
                         </p>`;
    contenedor.appendChild(div);
    $(div).append('<button class="botones" data-bs-toggle="modal" data-bs-target="#modalPedido">Hacer pedido</button>');
    // $('#btn').click(hacerPedido);  
    $("#divResumen").fadeIn(1500, function(){
        setTimeout(function () {
            $("#divResumen").fadeOut(5000, function(){
                formPresupuesto.children[2].value = "Resumen del pedido"
                div.innerHTML = "";
                $(div).append('<button id="btn2" class="botones">Ver último resumen</button>');
                $("#divResumen").fadeIn(1500);
                $('#btn2').click(function () {cargarPresupuestoUI(articleResumen);});
            });
        },55000); 
        })
}

function selectConfig(select, tipo) {
    switch (tipo) {
        case opcion:
            select.innerHTML = "";
            for (const opcion of opciones) {
                select.innerHTML += `<option value="${opcion.numero}">Opción ${opcion.numero}</option>`;
            }
            break;
        case cantidad:
            select.innerHTML = "";
            select.innerHTML += `<option value="1">1</option>
                                 <option value="2">2</option>   
                                 <option value="3">3</option>                           
                                 <option value="4">4</option>                           
                                 <option value="5">5</option>
                                                             `;
            break;
        default:
            break;
    }
}

function guardarPresupuesto(clave){
    presupuestos.push(new Presupuesto(nombre, seleccion, cantidad, precioFinal));
    const presupuestoJSON = JSON.stringify(presupuestos);
    localStorage.setItem(clave, presupuestoJSON);
}

function cargarPresupuesto(clave, contenedor){
    if (clave in localStorage){
        const presupuestoss = JSON.parse(localStorage.getItem(clave));
        if (presupuestoss.length == undefined){
            localStorage.clear();
        }else {
            for (const presupuesto of presupuestoss) {
                presupuestos.push(presupuesto);
            }
            let indice = presupuestos.length - 1;
            nombre = presupuestos[indice].nombreElegido;
            seleccion = parseInt(presupuestos[indice].opcionElegida);
            cantidad = parseInt(presupuestos[indice].cantidadElegida);
            precioFinal = parseInt(presupuestos[indice].precioFinalElegido);
            cargarPresupuestoUI(contenedor); 
        }         
    }  
}

function hacerPedido() {
    let indice = presupuestos.length - 1;
    const presupuestoJSON = JSON.stringify(presupuestos[indice]);
    $.post(URLPOST, presupuestoJSON, (respuesta, estado) => {
        if(estado == "success"){
            modalPedido.hide();
            alert(`Pedido Enviado. Numero de compra: ${respuesta.id}`);
            $("#divResumen").fadeOut(2000);
        }
    });
}