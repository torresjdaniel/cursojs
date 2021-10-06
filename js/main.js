let numero;
let nombre;
let resultado;


nombre = prompt("¡Hola! ¿Cómo te llamas?");
numero = prompt(nombre + ", ¿Estas listo para la calculadora infinita sin sentido? \n Pone el número que quieras y algo va a pasar, cuando te canses ingresa cualquier letra o no pongas nada.");

while(parseInt(numero)){
    console.log("el numero es: " + numero + " y se le va a sumar " + nombre.length);  
    resultado = parseInt(numero) + nombre.length;
    console.log("El resultado es: " + resultado);
    alert("Tu resultado es: " + resultado);
    console.log("--------------------------------");
    numero = prompt(nombre + ", ¿Estas listo para la calculadora infinita sin sentido? \n Pone el número que quieras y algo va a pasar, cuando te canses ingresa cualquier letra o no pongas nada.");
}
