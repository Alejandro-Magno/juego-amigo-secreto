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

