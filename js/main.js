let nombre;
let equipo;



nombre = prompt("¡Buenas! ¿Cómo es tu nombre?");
equipo = prompt("Genial " + nombre + ", ¿Con cuales de los 2 equipos de fútbol del súper clásico de Argentina te quedas?").toLowerCase();

if ((equipo == "boca") || (equipo == "boca juniors") || (equipo == "river") || (equipo == "river plate")) {
    if ((equipo=="boca") || (equipo == "boca juniors")){
        alert(nombre +" elegiste la mitad más uno ;)");
        console.log(nombre +" elegiste la mitad más uno ;)");
    }else{
        alert(nombre + " elegiste al millonario ;)")
        console.log(nombre + " elegiste al millonario ;)");
    }
} else {
    alert(nombre + " mmm ese equipo no pertenece al super clásico :(")
    console.log(nombre + " mmm ese equipo no pertenece al super clásico :(");
}

