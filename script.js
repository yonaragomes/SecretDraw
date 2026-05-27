let nomes = [];
const input = document.getElementById("inputNome")
const botao = document.getElementById("btnAdicionar")
const span = document.getElementById("totalParticipantes")

function adicionar() {
    const nome = (input.value);
    nomes.push(nome)

    let nParticipantes = Number(span.textContent)
    nParticipantes += 1
    span.textContent = nParticipantes
    
    const item = document.createElement("li")
    item.textContent = nome
    listaParticipantes.appendChild(item)

    input.value = ""
}

botao.addEventListener("click", adicionar);

// inserir, quando clicar em adicionar:
// - adiciona em um Array e limpa o input
// - aumenta total de participantes
// - adiciona o nome do participante na lista


