
$.get(URLJSON, function(datos, estado) {
    if(estado == "success"){
        for (const dato of datos){
            opciones.push(new Opcion(dato.numero, dato.corte, dato.tamanio, dato.personas, dato.precio, dato.salsas, dato.pan));
        }
        for (const opcion of opciones) {
            let li = document.createElement("li");
            let contador = 1500;
            li.id = `opcion${opcion.numero}`;
            li.innerHTML = opcion.menu();
            ulOpciones.appendChild(li);
            $(`#opcion${opcion.numero}`).fadeIn(contador*opcion.numero); 
        }
        
        cargarPresupuesto("presupuesto", articleResumen);
    }
})

selectOpcion.innerHTML = `<option>¡Elegí tu opción!</option>`;
selectCantidad.innerHTML = `<option>Cantidad</option>`;

formPresupuesto.addEventListener("submit", crearPresupuesto);
selectOpcion.addEventListener("focus", function () {selectConfig(selectOpcion, opcion);});
selectCantidad.addEventListener("focus", function () {selectConfig(selectCantidad, cantidad);});
botonEnviar.addEventListener("click", hacerPedido);


