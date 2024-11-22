
import ApiConnection from './api.js';

const api = new ApiConnection()

const btnCadastro = document.querySelector("#btn-cadastro")

btnCadastro.addEventListener('click',  async () => {

    const nome = document.querySelector("#input-nome").value
    const email = document.querySelector("#input-email").value

    const aluno = {
        nome,
        email
    }

    await api.cadastrar(aluno)

    carregarPagina()

})

function limparTabela() {
    const tbody = document.querySelector("tbody")

    //tbody.querySelectorAll("tr").forEach(tr => { tr.remove() })

    tbody.innerHTML = ""

}

async function carregarPagina() {

    limparTabela()

    const dados = await api.lerDados()

    const tbody = document.querySelector("tbody")

    dados.forEach(aluno => {

        const tr = document.createElement("tr")

        const nome = document.createElement("td")
        const email = document.createElement("td")
        const button = document.createElement("td")

        nome.innerText = aluno.nome
        email.innerText = aluno.email
        button.appendChild( criarButton(aluno.id) )

        tr.appendChild(nome)
        tr.appendChild(email)
        tr.appendChild(button)

        tbody.appendChild(tr)

    });

}

function criarButton(id){
    const button = document.createElement("button")

    button.innerText = "Remover"

    button.addEventListener('click', async ()=>{

        await api.removerAluno(id)

        carregarPagina()

    })

    return button
}

carregarPagina()
















