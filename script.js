let nomes = [];
const input = document.getElementById("inputNome")
const botao = document.getElementById("btnAdicionar")
const botao1 = document.getElementById("btnSortearSimples")
const botao2 = document.getElementById("btnNovamente")
const nSorteado = document.getElementById("resultadoSimples")
const span = document.getElementById("totalParticipantes")
const btnSortearAmigo = document.getElementById("btnSortearAmigo")

nSorteado.style.display = "none"

function adicionarNomes() {
    if (input.value) {
        const nome = (input.value);
        nomes.push(nome)

        let nParticipantes = Number(span.textContent)
        nParticipantes += 1
        span.textContent = nParticipantes

        const item = document.createElement("li")
        const rm = document.createElement("span")
        rm.classList.add("remover")
        rm.textContent = "x"

        item.textContent = nome
        item.appendChild(rm)
        listaParticipantes.appendChild(item)

        function removerNome() {
            item.remove()

            nomes = nomes.filter(n => n !== nome)

            let total = Number(span.textContent)
            total -= 1
            span.textContent = total

            if (nomes.length < 1) {
                nSorteado.style.display = "none"
            } else {
                nSorteado.style.display = "block"
            }
        }

        rm.addEventListener("click", removerNome)

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

<<<<<<< HEAD
function sortearNovamente() {
    if (nomes.length > 1) {
        sortearNome()
    } else {
        nSorteado.style.display = "none"
    }
}

function SortearAmigoSecreto() {
=======
function SortearAmigoSecreto() {
    const n = nomes.length
    if (n < 3) {
        alert("Erro: precisa ser maior que 3");
    }
>>>>>>> 7c62bf63e3625ef91ec55728eac91ec923418d98
    let nomesAmigos = [...nomes]
    let resultados = {}
    for (const nome of nomes){
        let countWhile = true
        let index
        while (countWhile){
            const index = Math.floor(Math.random() * nomesAmigos.length)
            if (nome !== nomesAmigos[index]){
                countWhile = false
            }
        }
        resultados[nome] = nomesAmigos[index]
        nomesAmigos.splice(index, 1)
    }
    console.log(resultados)
    return resultados
}
<<<<<<< HEAD

=======
>>>>>>> 7c62bf63e3625ef91ec55728eac91ec923418d98
botao1.addEventListener("click", sortearNome);
botao2.addEventListener("click", sortearNovamente);
btnSortearAmigo.addEventListener("click", SortearAmigoSecreto);

// sortear nome:
// - tem que pegar a lista de nomes e verificar se > 1
// - sortear pelo indice (com Math.random)
// - substituir o nome pelo indice
// - esconder o botao sortear e "substituir" pelo nomeSorteado
