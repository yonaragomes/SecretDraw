let nomes = [];
const input = document.getElementById("inputNome")
const botao = document.getElementById("btnAdicionar")
const botao1 = document.getElementById("btnSortearSimples")
const botao2 = document.getElementById("btnNovamente")
const nSorteado = document.getElementById("resultadoSimples")
const span = document.getElementById("totalParticipantes")

nSorteado.style.display = "none"

function adicionarNomes() {
    if (input.value) {
        const nome = (input.value);
        nomes.push(nome)

        let nParticipantes = Number(span.textContent)
        nParticipantes += 1
        span.textContent = nParticipantes

        const item = document.createElement("li")
        item.textContent = nome
        listaParticipantes.appendChild(item)

        input.value = ""
    } else {
        alert('Insira um nome')}
}

// inserir quando clicar em adicionar:
// - adiciona em um array
// - aumenta total dos participantes
// - adiciona o nome do participante na lista
// - limpa o valor do input

// inserir, quando clicar em adicionar:
// - adiciona em um Array e limpa o input
// - aumenta total de participantes
// - adiciona o nome do participante na lista


function evento(e) {
    if (e.key === "Enter") {
        adicionarNomes()
    }
}

input.addEventListener("keydown", evento)
botao.addEventListener("click", adicionarNomes);

function sortearNome() {
    if (nomes.length > 1) {
        const indiceAleatorio = Math.floor(Math.random() * nomes.length)
        const nomeSorteado = nomes[indiceAleatorio]

        botao1.style.display = "none"
        nSorteado.style.display = "block"
        nSorteado.textContent = nomeSorteado
    } 
}

function sortearNovamente() {
    if (sortearNome) {
        const indiceAleatorio = Math.floor(Math.random() * nomes.length)
        const nomeSorteado = nomes[indiceAleatorio]

        nSorteado.textContent = nomeSorteado
    }
}

botao1.addEventListener("click", sortearNome);
botao2.addEventListener("click", sortearNovamente)

// sortear nome:
// - tem que pegar a lista de nomes e verificar se > 1
// - sortear pelo indice (com Math.random)
// - substituir o nome pelo indice
// - esconder o botao sortear e "substituir" pelo nomeSorteado
