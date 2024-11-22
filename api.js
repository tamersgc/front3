

class ApiConnection {

    url = "http://localhost:3333/alunos"

    async removerAluno(id) {

        const response = await fetch(this.url+"/"+id, {
            method: "DELETE"
        });

    }

    async cadastrar(aluno) {

        const response = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(aluno),
            headers: { "Content-type": "application/json" }
        });

    }

    async lerDados() {
        //const response = await fetch("https://banco-vzvz.onrender.com/alunos");
        const response = await fetch(this.url);

        const dados = await response.json()

        //console.log(dados)

        return dados

    }


}


export default  ApiConnection;

//const api = new ApiConnection()
//api.lerDados()
//api.removerAluno()
//api.criarAluno()