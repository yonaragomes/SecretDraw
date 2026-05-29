let nomes = [];
let resultadoAmigo = {}
const input = document.getElementById("inputNome")
const botao = document.getElementById("btnAdicionar")
const botao1 = document.getElementById("btnSortearSimples")
const botao2 = document.getElementById("btnNovamente")
const nSorteado = document.getElementById("resultadoSimples")
const span = document.getElementById("totalParticipantes")
const btnSortearAmigo = document.getElementById("btnSortearAmigo")
const selectParticipante = document.getElementById("selectParticipante")
const btnVerAmigo = document.getElementById("btnVerAmigo")
const mensagem = document.getElementById("msgAmigoSecreto")
const btnRefazer = document.getElementById("btnRefazer")

nSorteado.style.display = "none"

function adicionarNomes() {
    if (input.value) {
        const nome = (input.value)
        
        const listaNomes = nome.split(",")

        listaNomes.forEach(nome => {
            nome = nome.trim()

            if (nome !== "") {
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

                const option = document.createElement("option")
                option.value = nome
                option.textContent = nome
                selectParticipante.appendChild(option)

                function removerNome() {
                    item.remove()

                    nomes = nomes.filter(n => n !== nome)

                    const options = selectParticipante.querySelectorAll("option")

                    options.forEach(option => {
                        if (option.value === nome) {
                            option.remove()
                        }
    })
                    let total = Number(span.textContent)
                    total -= 1
                    span.textContent = total

                    if (nomes.length < 1) {
                        nSorteado.style.display = "none"
                    }
                }
                rm.addEventListener("click", removerNome)
            }
        })
                input.value = ""
    } else {
        alert('Insira um nome')
    }
}

// inserir quando clicar em adicionar:
// - adiciona em um array
// - aumenta total dos participantes
// - adiciona o nome do participante na lista
// - limpa o valor do input

function evento(e) {
    if (e.key === "Enter") {
        adicionarNomes()
    }
}

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
    if (nomes.length > 1) {
        sortearNome()
    } else if (nomes.length <= 1) {
        nSorteado.style.display = "none"
    }
}

// sortear nome:
// - tem que pegar a lista de nomes e verificar se > 1
// - sortear pelo indice (com Math.random)
// - substituir o nome pelo indice
// - esconder o botao sortear e "substituir" pelo nomeSorteado

function SortearAmigoSecreto() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 participantes")
        return
    }

    let nomesAmigos = [...nomes]
    resultadoAmigo = {}

    for (const nome of nomes) {
        let valido = false
        let index

        while (!valido) {
            index = Math.floor(Math.random() * nomesAmigos.length)

            if (nome !== nomesAmigos[index]) {
                valido = true
            }
        }

        resultadoAmigo[nome] = nomesAmigos[index]
        nomesAmigos.splice(index, 1)
    }

    mensagem.style.display = "block"
    mensagem.textContent = "Sorteio realizado com sucesso!"
}

function verAmigoSecreto() {
    const participante = selectParticipante.value

    if (participante === "") {
        alert("Selecione um participante")
        return
    }

    if (Object.keys(resultadoAmigo).length === 0) {
        alert("Realize o sorteio primeiro")
        return
    }

    mensagem.style.display = "block"
    mensagem.textContent = `${participante}, seu amigo secreto é ${resultadoAmigo[participante]}`
}

function refazerSorteio() {
    resultadoAmigo = {}

    mensagem.style.display = "none"
    selectParticipante.value = ""
}

input.addEventListener("keydown", evento)
botao.addEventListener("click", adicionarNomes);
botao1.addEventListener("click", sortearNome);
botao2.addEventListener("click", sortearNovamente);
btnSortearAmigo.addEventListener("click", SortearAmigoSecreto);
btnSortearAmigo.addEventListener("click", SortearAmigoSecreto);
btnVerAmigo.addEventListener("click", verAmigoSecreto)
btnRefazer.addEventListener("click", refazerSorteio)

// amigo secreto:
// - verificar se existe mais de 1 participante
// - criar uma cópia da lista de nomes
// - sortear um índice aleatório para cada participante
// - impedir que a pessoa tire ela mesma
// - salvar o resultado do sorteio
// - remover o nome já sorteado da lista
// - mostrar mensagem de sorteio realizado 


// sortear nome:
// - tem que pegar a lista de nomes e verificar se > 1
// - sortear pelo indice (com Math.random)
// - substituir o nome pelo indice
// - esconder o botao sortear e "substituir" pelo nomeSorteado
