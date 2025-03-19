// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.
// app.js

let amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const amigoInput = document.getElementById('amigo');
const resultado = document.getElementById('resultado');

function agregarAmigo() {
    const nombreAmigo = amigoInput.value.trim();
    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        amigoInput.value = ''; // Limpia el input
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}  

function actualizarListaAmigos() {
    listaAmigos.innerHTML = ''; // Limpia la lista
    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
} 

function sortearAmigo() {
    if (amigos.length < 2) {
        resultado.textContent = "Debes ingresar al menos dos amigos para sortear.";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSeleccionado}</strong>!`;
}


