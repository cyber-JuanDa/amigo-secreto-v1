// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let myfriends = [];

function añadirAmigo() {
    const inputName = document.getElementById("amigo");
    const name = inputName.value.trim();
    
    if (name === "") { 
    alert("Por favor, inserte un nombre.");
    } else{
        myfriends.push(name);
        inputName.value = "";
        actualizarListaAmigos();
    }
}
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let friend of myfriends) {
        const li = document.createElement("li");
        li.textContent = friend;
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    if (myfriends.length === 0) {
        alert("No hay amigos para sortear. ¡Agrega algunos amigos primero!");
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * myfriends.length);
    const amigoSorteado = myfriends[indiceAleatorio];

   
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo secreto es: ${amigoSorteado}`;
}


document.querySelector("btnAñadir").addEventListener("click", añadirAmigo);
document.getElementById("btnSortear").addEventListener("click", sortearAmigo);