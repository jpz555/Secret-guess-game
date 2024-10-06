let numeroSecreto;
let intentos = 0 ;
let listaNumeroSorteados = [];
let numeroMaximo = 10;


// Funciones que reciben parametros
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste al numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // El susuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarRegsitro();
    }
    return;
}

function limpiarRegsitro() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    // let numeroSecreto = ; // Variable de ambito de bloque
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumeroSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearón todos los numeros psoibles')
    } else {
        // Si el numero generado esta incluido en la lista
        // Metodo 'include' para saber si hay un numero en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            // Concepto de recursividad, se llama a si misma
            return generarNumeroSecreto();
        } else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del numero secreto");
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar el registro la caja
    limpiarRegsitro();
    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // Inicializar los intentos
    condicionesIniciales();
    // Desahabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true)
    
}

condicionesIniciales();

/*
<div class="container__texto">
                    <h1></h1>
                    <p class="texto__parrafo"></p>
                </div>
                <input type="number" id="valorUsuario" min="1" max="10" class="container__input">
*/
