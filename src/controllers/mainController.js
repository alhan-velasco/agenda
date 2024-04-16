import { Queue } from "../models/queue.js";

const agenda = new Queue();

function agregarContacto(nombre, telefono) {
    agenda.encolar({ nombre, telefono });
    actualizarListaContactos();
}

function extraerContacto() {
    if (agenda.estaVacia()) {
        console.log('La agenda está vacía.');
    } else {
        const contacto = agenda.desencolar();
        console.log(`Se ha extraído a ${contacto.nombre} con el número ${contacto.telefono} de la agenda.`);
        actualizarListaContactos();
    }
}

function actualizarListaContactos() {
    const listaContactos = document.getElementById('listaContactos');
    listaContactos.innerHTML = '';
    let nodo = agenda.primero;
    while (nodo !== null) {
        const li = document.createElement('li');
        li.textContent = `${nodo.valor.nombre}: ${nodo.valor.telefono}`;
        listaContactos.appendChild(li);
        nodo = nodo.siguiente;
    }
}

const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const telefonoInput = document.getElementById('telefono');
const extraerBtn = document.getElementById('extraer');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = nombreInput.value;
    const telefono = telefonoInput.value;
    agregarContacto(nombre, telefono);
    nombreInput.value = '';
    telefonoInput.value = '';
});

extraerBtn.addEventListener('click', function() {
    extraerContacto();
});