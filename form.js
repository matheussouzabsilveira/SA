function entrar(){
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const ende = document.getElementById("ende").value

    if(nome.length == 0 || email.length == 0 || senha.length == 0 || ende.length == 0){
        alert("Preencha todos os Campos")
    }else{

        const dados = {
            nome: nome,
            email: email,
            senha: senha,
            endereço: ende
        }

        localStorage.setItem("dados", JSON.stringify(dados))

        const dadostring = localStorage.getItem("dados")

        const dadosobject = JSON.parse(dadostring)

        console.log(typeof dadosobject)

        alert("Seus dados foram salvos, seja bem vindo " + nome + "!")
    }
}
