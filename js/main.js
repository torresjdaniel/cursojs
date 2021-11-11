
opciones.push(new Opcion(1, "PALETA", "CHICA", 10, 4300, 3, 2));
opciones.push(new Opcion(2, "PALETA", "GRANDE", 15, 4600, 3, 3));
opciones.push(new Opcion(3, "PERNIL", "REGULAR" , 25, 6500, 5, 4));


selectOpcion.innerHTML = `<option>¡Elegí tu opción!</option>`;
// verificarStorage("presupuesto");
cargarPresupuesto("presupuesto", articleResumen);

for (const opcion of opciones) {
    let li = document.createElement("li");
    li.innerHTML = opcion.menu();
    ulOpciones.appendChild(li);  
}

formPresupuesto.addEventListener("submit", crearPresupuesto);
selectOpcion.addEventListener("focus", function () {selectConfig(selectOpcion);});

