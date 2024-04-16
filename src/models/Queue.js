import { Nodo } from './Nodo.js'
export class Queue {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.tamano = 0;
    }

    encolar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (this.tamano === 0) {
            this.primero = nuevoNodo;
            this.ultimo = nuevoNodo;
        } else {
            this.ultimo.siguiente = nuevoNodo;
            this.ultimo = nuevoNodo;
        }
        this.tamano++;
    }

    desencolar() {
        if (this.tamano === 0) return null;
        const valorDesencolado = this.primero.valor;
        this.primero = this.primero.siguiente;
        this.tamano--;
        return valorDesencolado;
    }

    estaVacia() {
        return this.tamano === 0;
    }
}