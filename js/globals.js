const opciones = [];
const presupuestos = [];
const URLJSON = "data/opciones.json";
const URLPOST = "https://jsonplaceholder.typicode.com/posts";
const EmailJsUserID = "user_vTr8itaXy0Ah5j9JAS5ZD";

let nombre;
let seleccion; 
let cantidad;
let precioFinal;
let timerID;


const ulOpciones = document.getElementById("opciones");
const formPresupuesto = document.getElementById("presupuesto");
const articleResumen = document.getElementById("resumen");
const selectOpcion = document.getElementById("opcion");
const selectCantidad = document.getElementById("cantidad");
const divPresupuesto = document.getElementById("divPresupuesto");
const botonEnviar = document.getElementById("botonEnviar");
const modalPedido = new bootstrap.Modal(document.getElementById("modalPedido"));
const modalConfirmacion = new bootstrap.Modal(document.getElementById("modalConfirmacion"));
const formModal = document.getElementById("formModal");
const modalContenido = document.getElementById("modalContenido");
const textoModal = document.getElementById("textoModal");

