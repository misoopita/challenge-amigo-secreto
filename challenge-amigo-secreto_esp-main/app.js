// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosSorteados  = [];
let listaAmigos = [];


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre !== '') {
    listaAmigos.push(nombre);
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = listaAmigos.join(', ');
    }
    else {
        alert('Por favor, inserte un nombre.');
}
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    listaAmigosSorteados.push(amigoSorteado);
    listaAmigos = listaAmigos.filter(amigo => amigo !== amigoSorteado);
    
    // Actualiza el último sorteado (resultado)
    document.getElementById('resultado').innerHTML = amigoSorteado;
    
    // Actualiza la lista de amigos disponibles
    document.getElementById('listaAmigos').innerHTML = listaAmigos.join(', ');
    
    // Actualiza la lista histórica de sorteados (nuevo elemento)
    document.getElementById('listaAmigosSorteados').innerHTML = listaAmigosSorteados.join(', ');
}




function actualizarListaAmigos() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ''; // Limpiar la lista existente

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = listaAmigos[i]; // Establecer el texto del <li> al nombre del amigo
        listaElement.appendChild(li); // Agregar el <li> a la lista
    }
}

